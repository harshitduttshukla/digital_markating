import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { ArabicPage } from "@/data/pages/dubai-ar";
import { arabicPath } from "@/data/pages/dubai-ar";
import { landingPages, landingServices, type LandingServiceKey } from "@/data/pages";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { contactHref } from "../shared";

const arabicNum = ["١", "٢", "٣", "٤", "٥", "٦"];

/**
 * Arabic (RTL) Dubai landing page. One elegant composition shared by the four
 * Arabic pages — they are language editions of the bespoke English pages.
 */
export function DubaiArabicPage({ service, c }: { service: LandingServiceKey; c: ArabicPage }) {
  const href = contactHref("dubai", service);
  const enPath = `/dubai/${service}`;
  const crumbs = [
    { name: "الرئيسية", path: "/" },
    { name: "دبي", path: "/dubai" },
    { name: c.label, path: arabicPath(service) },
  ];

  return (
    <div lang="ar" dir="rtl" className="font-arabic">
      {/* HERO */}
      <section className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-violet/25 blur-[160px]" />
          <div className="grid-bg noise-mask absolute inset-0" />
        </div>
        <div className="container-x relative">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="مسار التنقل">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
                {crumbs.map((cr, i) => (
                  <li key={cr.path} className="flex items-center gap-1.5">
                    {i === crumbs.length - 1 ? (
                      <span aria-current="page" className="text-white/90">{cr.name}</span>
                    ) : (
                      <>
                        <Link href={cr.path} className="hover:text-white">{cr.name}</Link>
                        <ChevronLeft aria-hidden className="size-3.5 opacity-50" />
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <Link href={enPath} hrefLang="en" lang="en" dir="ltr" className="rounded-full border border-white/20 px-3 py-1 font-sans text-sm text-white/80 transition-colors hover:border-lime hover:text-white">
              English
            </Link>
          </div>

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <h1 className="text-[2.8rem] font-semibold leading-[1.15] sm:text-6xl lg:text-[4.6rem]">
                <span className="mb-6 block text-sm font-medium text-lime">{c.kicker}</span>
                {c.title}
                <br />
                <span className="text-gradient">{c.highlight}</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-[1.9] text-white/75">{c.lede}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={href} size="lg" arrow className="[&_svg]:-scale-x-100">{c.cta}</ButtonLink>
                <ButtonLink href="#ar-faq" size="lg" variant="outline">الأسئلة الشائعة</ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.15} aria-hidden className="relative mx-auto w-full max-w-[400px]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-full border border-white/15 bg-gradient-to-b from-violet/30 via-ink-2 to-ink">
                <div className="absolute inset-3 rounded-t-full border border-white/[0.07]" />
                <div className="absolute left-1/2 top-[22%] size-40 -translate-x-1/2 rounded-full bg-lime/15 blur-3xl" />
                <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[7rem] font-bold leading-none text-white/[0.08]">دبي</p>
                <svg viewBox="0 0 300 120" className="absolute inset-x-0 bottom-0 w-full text-white/15" preserveAspectRatio="none">
                  <path d="M0 120 V92 H30 V70 H44 V92 H70 V58 H82 V40 L88 8 L94 40 V58 H106 V92 H130 V76 H150 V60 H162 V92 H190 V66 H210 V50 H222 V92 H250 V80 H270 V92 H300 V120Z" fill="currentColor" fillOpacity=".25" stroke="currentColor" strokeWidth=".6" />
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section-y border-y border-line" aria-labelledby="ar-pillars">
        <div className="container-x">
          <h2 id="ar-pillars" className="max-w-2xl text-4xl font-semibold leading-[1.3] sm:text-5xl">ما الذي يميّز نهجنا</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-x-reverse md:divide-white/10">
            {c.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="md:px-8 md:first:pr-0">
                <p className="text-5xl font-light text-lime/80">{arabicNum[i]}</p>
                <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 leading-[1.9] text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y" aria-labelledby="ar-services">
        <div className="container-x">
          <h2 id="ar-services" className="text-4xl font-semibold leading-[1.3] sm:text-5xl">خدماتنا</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {c.services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.06} className="flex gap-5 rounded-[var(--radius-card)] border border-line bg-ink-2 p-7 transition-colors hover:border-lime/40">
                <span className="text-xl text-lime">{arabicNum[i]}</span>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-[1.9] text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section-y bg-ink-2" aria-labelledby="ar-steps">
        <div className="container-x text-center">
          <h2 id="ar-steps" className="text-4xl font-semibold leading-[1.3] sm:text-5xl">منهجية العمل</h2>
          <ol className={cn("mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-y-10 sm:grid-cols-3", c.steps.length > 5 ? "lg:grid-cols-6" : "lg:grid-cols-5")}>
            {c.steps.map((s, i) => (
              <li key={s}>
                <p className="text-3xl font-light text-white/30">{arabicNum[i]}</p>
                <p className="mt-3 text-lg">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="ar-faq" className="section-y" aria-labelledby="ar-faq-h">
        <div className="container-x max-w-3xl">
          <h2 id="ar-faq-h" className="mb-10 text-4xl font-semibold leading-[1.3] sm:text-5xl">الأسئلة الشائعة</h2>
          <FAQAccordion faqs={c.faqs} />
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="pb-20 sm:pb-28" aria-labelledby="ar-cta">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-[32px] border border-line bg-[#0b0d15] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div aria-hidden className="absolute left-1/2 top-0 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/40 blur-[120px]" />
            <div className="relative">
              <h2 id="ar-cta" className="text-4xl font-semibold leading-[1.3] sm:text-6xl">{c.closing.title}</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-[1.9] text-white/70">{c.closing.body}</p>
              <ButtonLink href={href} size="lg" className="mt-9 [&_svg]:-scale-x-100" arrow>{c.cta}</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED (Arabic) */}
      <nav aria-label="صفحات ذات صلة" className="border-t border-line">
        <div className="container-x flex flex-wrap gap-x-8 gap-y-3 py-12">
          {landingServices.filter((s) => s !== service).map((s) => (
            <Link key={s} href={arabicPath(s)} className="text-white/75 hover:text-lime">{arabicLabel(s)}</Link>
          ))}
          <Link href={enPath} hrefLang="en" className="font-sans text-white/75 hover:text-lime" lang="en">{landingPages.dubai[service].label} (English)</Link>
        </div>
      </nav>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </div>
  );
}

const arabicLabel = (s: LandingServiceKey) =>
  ({
    seo: "تحسين محركات البحث في دبي",
    "digital-marketing-agency": "التسويق الرقمي في دبي",
    "social-media-marketing": "التسويق عبر وسائل التواصل في دبي",
    "email-marketing": "التسويق عبر البريد الإلكتروني في دبي",
  })[s];
