import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

export const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-lime text-ink hover:bg-[#c9ff85] shadow-[0_0_0_0_rgba(183,243,107,0)] hover:shadow-[0_8px_30px_-6px_rgba(183,243,107,0.55)]",
        violet: "bg-violet text-white hover:bg-violet-soft hover:shadow-[0_8px_30px_-6px_rgba(112,85,247,0.6)]",
        outline: "border border-white/15 text-white hover:border-white/40 hover:bg-white/5",
        dark: "bg-ink text-white hover:bg-ink-3",
        ghost: "text-white/80 hover:text-white",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[15px]",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Variants = VariantProps<typeof buttonVariants>;

interface CommonProps extends Variants {
  children: ReactNode;
  className?: string;
  /** Show the animated arrow icon */
  arrow?: boolean;
}

function Inner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        />
      )}
    </>
  );
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  arrow,
  ...rest
}: CommonProps & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  const external = typeof href === "string" && /^https?:/.test(href);
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      <Inner arrow={arrow}>{children}</Inner>
    </Link>
  );
}

export function Button({
  variant,
  size,
  className,
  children,
  arrow,
  ...rest
}: CommonProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  );
}
