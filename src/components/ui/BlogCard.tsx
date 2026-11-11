import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types";
import { CoverArt } from "./CoverArt";
import { formatDate, cn } from "@/lib/utils";

export function BlogCard({ post, tone = "light", className }: { post: BlogPost; tone?: "light" | "dark"; className?: string }) {
  const light = tone === "light";
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border transition-shadow duration-500",
        light ? "border-line-dark bg-white hover:shadow-[0_24px_60px_-30px_rgba(23,25,35,0.35)]" : "border-line bg-ink-2",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <CoverArt variant={post.art} label={`Featured illustration for “${post.title}”`} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-lime px-3 py-1 text-xs font-medium text-ink">{post.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className={cn("font-mono text-xs", light ? "text-[#6b7086]" : "text-muted")}>
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
        </p>
        <h3 className={cn("mt-3 text-xl leading-snug font-semibold", light ? "text-text-dark" : "text-white")}>{post.title}</h3>
        <p className={cn("mt-3 line-clamp-3 text-[15px] leading-relaxed", light ? "text-[#4a4f63]" : "text-muted")}>{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className={cn("mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold after:absolute after:inset-0", light ? "text-violet" : "text-lime")}
        >
          Read more<span className="sr-only">: {post.title}</span>
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
