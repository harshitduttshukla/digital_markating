import type { ArtVariant } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Brand-consistent abstract artwork rendered as inline SVG.
 * Used in place of stock photography until real project imagery exists —
 * zero network cost, crisp at any size, no layout shift.
 */
export function CoverArt({
  variant,
  className,
  label,
}: {
  variant: ArtVariant;
  className?: string;
  label: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-ink-2", className)}>
      <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" role="img" aria-label={label}>
        <defs>
          <radialGradient id={`g-${variant}`} cx="30%" cy="20%" r="90%">
            <stop offset="0%" stopColor="#7055F7" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#171B29" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`l-${variant}`} x1="0" x2="1">
            <stop offset="0%" stopColor="#B7F36B" />
            <stop offset="100%" stopColor="#7055F7" />
          </linearGradient>
          <pattern id={`p-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="white" strokeOpacity="0.05" />
          </pattern>
        </defs>
        <rect width="400" height="260" fill={`url(#p-${variant})`} />
        <rect width="400" height="260" fill={`url(#g-${variant})`} />
        {variant === "bars" &&
          [40, 70, 55, 95, 80, 130, 115, 165].map((h, i) => (
            <rect key={i} x={60 + i * 38} y={220 - h} width="22" height={h} rx="5" fill={i === 7 ? "#B7F36B" : "#7055F7"} fillOpacity={i === 7 ? 1 : 0.35 + i * 0.07} />
          ))}
        {variant === "waves" && (
          <>
            <path d="M0 190 C80 170 120 120 200 130 S320 70 400 60" fill="none" stroke={`url(#l-${variant})`} strokeWidth="4" />
            <path d="M0 210 C90 200 140 170 210 175 S330 130 400 120" fill="none" stroke="#7055F7" strokeOpacity="0.4" strokeWidth="2" />
            <path d="M0 190 C80 170 120 120 200 130 S320 70 400 60 V260 H0Z" fill="#B7F36B" fillOpacity="0.06" />
            <circle cx="320" cy="82" r="6" fill="#B7F36B" />
          </>
        )}
        {variant === "orbit" && (
          <>
            {[50, 85, 120].map((r) => (
              <circle key={r} cx="270" cy="130" r={r} fill="none" stroke="white" strokeOpacity="0.12" />
            ))}
            <circle cx="270" cy="130" r="20" fill="#7055F7" />
            <circle cx="355" cy="130" r="7" fill="#B7F36B" />
            <circle cx="220" cy="45" r="5" fill="white" fillOpacity="0.7" />
            <circle cx="160" cy="160" r="9" fill="#7055F7" fillOpacity="0.6" />
          </>
        )}
        {variant === "rings" && (
          <>
            <circle cx="200" cy="130" r="80" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="18" />
            <circle cx="200" cy="130" r="80" fill="none" stroke={`url(#l-${variant})`} strokeWidth="18" strokeDasharray="340 503" strokeLinecap="round" transform="rotate(-90 200 130)" />
            <circle cx="200" cy="130" r="50" fill="none" stroke="#7055F7" strokeOpacity="0.5" strokeWidth="8" strokeDasharray="200 314" strokeLinecap="round" transform="rotate(-90 200 130)" />
          </>
        )}
        {variant === "grid" &&
          Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 10 }).map((_, c) => {
              const on = (r * 3 + c * 7) % 5 === 0;
              return <rect key={`${r}-${c}`} x={30 + c * 35} y={30 + r * 35} width="24" height="24" rx="6" fill={on ? "#B7F36B" : "#7055F7"} fillOpacity={on ? 0.9 : 0.12 + ((r + c) % 4) * 0.08} />;
            }),
          )}
        {variant === "steps" && (
          <>
            {[0, 1, 2, 3, 4].map((i) => (
              <rect key={i} x={50 + i * 62} y={200 - i * 34} width="58" height={20 + i * 34} rx="6" fill="#7055F7" fillOpacity={0.25 + i * 0.15} />
            ))}
            <path d="M60 190 L120 160 L180 125 L245 92 L305 55 L350 40" fill="none" stroke="#B7F36B" strokeWidth="3" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  );
}
