import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { serviceLinks, companyLinks, legalLinks } from "@/config/navigation";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "./SocialIcon";
import { cities, cityNames, landingPath, landingServices, serviceNames } from "@/data/pages/types";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">{siteConfig.coreMessage}</p>
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {siteConfig.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.name} on ${s.label}`}
                  className="grid size-10 place-items-center rounded-full border border-line text-white/70 transition-colors hover:border-lime hover:text-lime"
                >
                  <SocialIcon name={s.label} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <FooterCol title="Services" links={serviceLinks} className="lg:col-span-3" />
        <FooterCol title="Company" links={companyLinks} className="lg:col-span-2" />
        <div className="lg:col-span-3">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Contact</h2>
          <ul className="mt-5 space-y-3 text-[15px]">
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2.5 text-white/80 hover:text-white">
                <Mail aria-hidden className="size-4 text-lime" /> {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.contact.phoneE164}`} className="flex items-center gap-2.5 text-white/80 hover:text-white">
                <Phone aria-hidden className="size-4 text-lime" /> {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-white/80 hover:text-white">
                <MessageCircle aria-hidden className="size-4 text-lime" /> WhatsApp us
              </a>
            </li>
            <li className="pt-1 text-sm text-muted">{siteConfig.contact.hours}</li>
          </ul>
        </div>
      </div>

      <nav aria-label="Locations" className="container-x border-t border-line py-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {cities.map((city) => (
            <div key={city}>
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted"><Link href={`/${city}`} className="hover:text-white">{cityNames[city]}</Link></h2>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
                {landingServices.map((s) => (
                  <li key={s}>
                    <Link href={landingPath(city, s)} className="text-white/70 transition-colors hover:text-white">{serviceNames[s]}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      <div aria-hidden className="container-x select-none overflow-hidden">
        <p className="translate-y-[18%] text-center font-display text-[19vw] font-bold leading-none tracking-tight text-white/[0.035] lg:text-[13.5rem]">
          {siteConfig.name}
        </p>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.legalName}. All rights reserved.</p>
          <ul className="flex gap-6">
            {legalLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, className }: { title: string; links: { label: string; href: string }[]; className?: string }) {
  return (
    <div className={className}>
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{title}</h2>
      <ul className="mt-5 space-y-3 text-[15px]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-white/80 transition-colors hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
