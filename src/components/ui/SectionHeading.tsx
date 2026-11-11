import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow tone={tone} className={align === "center" ? "justify-center" : ""}>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          "mt-4 text-[2.1rem] leading-[1.05] font-semibold sm:text-5xl lg:text-[3.4rem]",
          light ? "text-text-dark" : "text-white",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-[#4a4f63]" : "text-muted")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em]",
        tone === "light" ? "text-violet" : "text-lime",
        className,
      )}
    >
      <span aria-hidden className="inline-block size-1.5 rounded-full bg-current" />
      {children}
    </p>
  );
}
