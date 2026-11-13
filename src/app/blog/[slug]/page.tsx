import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/data/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CoverArt } from "@/components/ui/CoverArt";
import { BlogCard } from "@/components/ui/BlogCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { articleSchema, buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const meta = buildMetadata({ title: p.title, description: p.excerpt, path: `/blog/${p.slug}`, type: "article", publishedTime: p.date });
  // Long headlines would be truncated in search results once " | Tesoap Lab" is appended — drop the suffix for those.
  return p.title.length > 47 ? { ...meta, title: { absolute: p.title } } : meta;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative overflow-hidden pb-12 pt-32 sm:pt-40">
          <div aria-hidden className="grid-bg noise-mask absolute inset-0" />
          <div className="container-x relative max-w-4xl">
            <Breadcrumbs items={[{ name: "Insights", path: "/blog" }, { name: post.title, path }]} />
            <p className="mt-10 font-mono text-xs text-muted">
              <span className="rounded-full bg-lime px-3 py-1 text-ink">{post.category}</span>
              <span className="ml-3"><time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read · {post.author}</span>
            </p>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-6xl">{post.title}</h1>
            <p className="mt-6 text-xl leading-relaxed text-muted">{post.excerpt}</p>
          </div>
        </header>
        <div className="container-x max-w-5xl">
          <CoverArt variant={post.art} label={`Featured illustration for “${post.title}”`} className="aspect-[21/9] rounded-[28px]" />
        </div>
        <div className="container-x max-w-3xl py-16 sm:py-20">
          <div className="space-y-10 text-lg leading-[1.8] text-white/85">
            {post.content.map((block, i) => (
              <section key={i}>
                {block.heading && <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">{block.heading}</h2>}
                <div className="space-y-5">
                  {block.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </div>
                {block.list && (
                  <ul className="mt-5 space-y-2 border-l-2 border-lime pl-6">
                    {block.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
          <aside className="mt-16 rounded-[var(--radius-card)] border border-line bg-ink-2 p-8">
            <p className="font-display text-2xl font-semibold">Want this applied to your business?</p>
            <p className="mt-2 text-muted">Get a free growth audit with prioritised recommendations for your website and campaigns.</p>
            <ButtonLink href="/contact?intent=audit" arrow className="mt-6">Get a free growth audit</ButtonLink>
          </aside>
        </div>
      </article>

      <section className="section-y bg-paper text-text-dark" aria-labelledby="related-posts">
        <div className="container-x">
          <h2 id="related-posts" className="text-3xl font-semibold sm:text-4xl">Keep reading</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>
      <FinalCTA />
      <JsonLd data={articleSchema({ title: post.title, description: post.excerpt, path, date: post.date, author: post.author })} />
    </>
  );
}
