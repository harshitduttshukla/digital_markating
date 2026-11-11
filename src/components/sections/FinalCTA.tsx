import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/config/site";

export function FinalCTA({
  title = "Ready to Grow Your Business?",
  description = "Let's identify your biggest digital growth opportunities and build a marketing strategy that delivers measurable results.",
  cta = "Get Your Free Growth Audit",
}: {
  title?: string;
  description?: string;
  cta?: string;
}) {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="cta-heading">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-line bg-[#0b0d15] px-6 py-16 text-center sm:px-12 sm:py-24">
            <div aria-hidden className="grid-bg noise-mask absolute inset-0" />
            <div aria-hidden className="animate-drift absolute left-1/2 top-0 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/40 blur-[120px]" />
            <div aria-hidden className="absolute -bottom-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-lime/10 blur-[100px]" />
            <div className="relative mx-auto max-w-3xl">
              <h2 id="cta-heading" className="text-4xl leading-[1.05] font-semibold sm:text-6xl">{title}</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">{description}</p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/contact?intent=audit" size="lg" arrow>{cta}</ButtonLink>
                <ButtonLink href={whatsappLink()} size="lg" variant="outline">
                  <span className="flex items-center gap-2"><MessageCircle aria-hidden className="size-4" /> Chat on WhatsApp</span>
                </ButtonLink>
              </div>
              <p className="mt-6 text-sm text-muted">Free, no-obligation. We reply within one business day.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
