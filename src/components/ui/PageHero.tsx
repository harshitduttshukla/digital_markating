import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
}

/** Shared inner-page hero. `aside` enables a split layout. */
export function PageHero({ crumbs, eyebrow, title, description, children, aside, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-bg noise-mask absolute inset-0" />
        <div className="animate-drift absolute -left-40 -top-40 size-[640px] rounded-full bg-violet/25 blur-[120px]" />
      </div>
      <div className={cn("container-x relative", aside && "grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]")}>
        <div>
          <Breadcrumbs items={crumbs} />
          <Reveal className="mt-10">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-4xl text-[2.6rem] leading-[1.03] font-semibold sm:text-6xl lg:text-7xl">{title}</h1>
            {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>}
          </Reveal>
          {children && <Reveal delay={0.15} className="mt-9">{children}</Reveal>}
        </div>
        {aside && <Reveal delay={0.2}>{aside}</Reveal>}
      </div>
    </section>
  );
}
