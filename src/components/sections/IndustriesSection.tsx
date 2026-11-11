import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/data/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CoverArt } from "@/components/ui/CoverArt";
import { cn } from "@/lib/utils";

export function IndustriesSection() {
  return (
    <section className="section-y bg-paper text-text-dark" aria-labelledby="industries-heading">
      <div className="container-x">
        <SectionHeading
          tone="light"
          eyebrow="Industries"
          title={<span id="industries-heading">Growth Strategies Built Around Your Industry.</span>}
          description="Every industry has its own buying cycle, regulations and seasonality. Our playbooks start there."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 0.08} className={cn(i === 0 && "lg:col-span-2", i === 3 && "lg:col-span-2")}>
              <li className="group relative h-full overflow-hidden rounded-[var(--radius-card)] bg-ink text-white">
                <CoverArt variant={ind.art} label={`Abstract illustration for ${ind.name}`} className="absolute inset-0 opacity-70 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
                <div className="relative flex min-h-[300px] h-full flex-col justify-end p-7">
                  <span className="grid size-11 place-items-center rounded-2xl bg-lime text-ink">
                    <ind.icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold">{ind.name}</h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/75">{ind.description}</p>
                  <Link href={`/industries#${ind.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-lime after:absolute after:inset-0">
                    Explore {ind.name} <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
