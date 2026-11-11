import "server-only";
import type { ContactFormData } from "./validations";

export type LeadDeliveryResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "delivery_failed" };

/**
 * Integration boundary for enquiries.
 *
 * Today it forwards the lead as JSON to LEAD_WEBHOOK_URL (works with Zapier,
 * Make, n8n, HubSpot/Zoho workflows, Slack, etc.). Swap the body of this
 * function for a direct CRM SDK or transactional email (Resend, SES, …)
 * without touching the form or the API route.
 *
 * If no integration is configured we report that honestly — the UI then
 * tells the visitor to use email/WhatsApp instead of faking success.
 */
export async function deliverLead(lead: ContactFormData & { meta: Record<string, string> }): Promise<LeadDeliveryResult> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return { ok: false, reason: "not_configured" };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, phone: `+91${lead.phone}`, receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(8000),
    });
    return res.ok ? { ok: true } : { ok: false, reason: "delivery_failed" };
  } catch {
    return { ok: false, reason: "delivery_failed" };
  }
}
