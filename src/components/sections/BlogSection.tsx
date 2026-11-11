import { posts } from "@/data/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/ui/BlogCard";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function BlogSection() {
  return (
    <section className="section-y bg-paper text-text-dark" aria-labelledby="insights-heading">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading tone="light" eyebrow="Insights" title={<span id="insights-heading">Insights That Move Businesses Forward.</span>} />
          <Reveal delay={0.1} className="shrink-0">
            <ButtonLink href="/blog" variant="dark" arrow>All insights</ButtonLink>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
