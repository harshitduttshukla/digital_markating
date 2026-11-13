import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cities, cityNames, landingPath, landingServices, serviceNames } from "@/data/pages";
import { cityHubs } from "@/data/pages/hubs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Homepage "Where we work" block — passes homepage authority to the city hubs and service pages. */
export function LocationsSection() {
  return (
    <section className="section-y" aria-labelledby="locations-heading">
      <div className="container-x">
        <SectionHeading eyebrow="Where we work" title={<span id="locations-heading">Local expertise in Mumbai, Bangalore and Dubai.</span>} />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {cities.map((c, i) => (
            <Reveal key={c} delay={i * 0.06} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-ink-2 p-7">
              <Link href={`/${c}`} className="group flex items-center justify-between">
                <h3 className="text-2xl font-semibold transition-colors group-hover:text-lime">Marketing in {cityNames[c]}</h3>
                <ArrowUpRight aria-hidden className="size-5 text-lime transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <p className="mt-3 text-sm text-muted">{cityHubs[c].sectors.join(" · ")}</p>
              <ul className="mt-6 space-y-2 border-t border-line pt-5">
                {landingServices.map((s) => (
                  <li key={s}>
                    <Link href={landingPath(c, s)} className="text-white/80 transition-colors hover:text-lime">{serviceNames[s]} in {cityNames[c]}</Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
