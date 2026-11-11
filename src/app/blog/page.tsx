import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/blog";
import { PageHero } from "@/components/ui/PageHero";
import { BlogCard } from "@/components/ui/BlogCard";
import { CoverArt } from "@/components/ui/CoverArt";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Insights — SEO & Digital Marketing Blog",
  description: "Practical guides on SEO, Google Ads, performance marketing, local SEO and lead generation for Indian businesses.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", path: "/blog" }]}
        eyebrow="Insights"
        title={<>Insights that move <span className="text-gradient">businesses forward.</span></>}
        description="Practical, no-fluff guides on search, paid media and conversion, written for Indian business owners and marketing teams."
      />
      <section className="section-y bg-paper text-text-dark">
        <div className="container-x">
          <Reveal>
            <article className="group relative grid overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_-40px_rgba(23,25,35,0.4)] lg:grid-cols-2">
              <div className="relative min-h-[260px] overflow-hidden">
                <CoverArt variant={featured.art} label={`Featured illustration for “${featured.title}”`} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col p-8 sm:p-12">
                <p className="font-mono text-xs text-[#6b7086]">
                  <span className="rounded-full bg-lime px-3 py-1 text-ink">{featured.category}</span>
                  <span className="ml-3"><time dateTime={featured.date}>{formatDate(featured.date)}</time> · {featured.readingMinutes} min read</span>
                </p>
                <h2 className="mt-6 text-3xl leading-tight font-semibold sm:text-4xl">{featured.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-[#4a4f63]">{featured.excerpt}</p>
                <Link href={`/blog/${featured.slug}`} className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-violet after:absolute after:inset-0">
                  Read article <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          </Reveal>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}><BlogCard post={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
