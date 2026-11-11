import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { deliverLead } from "@/lib/leads";

const MIN_FILL_MS = 3000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
// Best-effort, per-instance rate limit. Use a shared store (e.g. Upstash Redis) in production.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, message: "Too many submissions. Please try again in a few minutes." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields.", errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const { companyFax, startedAt, ...lead } = parsed.data;
  // Spam heuristics: honeypot filled or form submitted implausibly fast.
  // Respond with a generic success so bots learn nothing, but drop the lead.
  if (companyFax || (startedAt && Date.now() - startedAt < MIN_FILL_MS)) {
    return NextResponse.json({ ok: true });
  }

  const result = await deliverLead({
    ...lead,
    meta: { ip, userAgent: request.headers.get("user-agent") ?? "", referer: request.headers.get("referer") ?? "" },
  });

  if (!result.ok) {
    const message =
      result.reason === "not_configured"
        ? "Online enquiries aren't connected yet. Please email or WhatsApp us directly — we'd love to hear from you."
        : "We couldn't send your enquiry right now. Please try again or contact us by email or WhatsApp.";
    return NextResponse.json({ ok: false, reason: result.reason, message }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}
