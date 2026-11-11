import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

/** Visible label for placeholder / illustrative content. */
export function DemoBadge({ label = "Demo content", className }: { label?: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-200",
        className,
      )}
    >
      <Info aria-hidden className="size-3" />
      {label}
    </span>
  );
}
