import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function ServicesSection() {
  return (
    <section id="services" className="section-y relative" aria-labelledby="services-heading">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title={<span id="services-heading">Everything You Need to Grow Online.</span>}
            description="Six disciplines, one growth plan. Use one service or combine them — every channel is measured against the same business outcome."
          />
          <Reveal delay={0.1} className="shrink-0">
            <ButtonLink href="/services" variant="outline" arrow>All services</ButtonLink>
          </Reveal>
        </div>
        {/* Bento: first card spans two rows on desktop to break the uniform grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08} className={i === 0 ? "lg:row-span-2" : ""}>
              <ServiceCard service={s} index={i} featured={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
