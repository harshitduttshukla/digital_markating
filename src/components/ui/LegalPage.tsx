import { PageHero } from "./PageHero";

/** Simple shell for legal pages. Content must be reviewed by a qualified professional. */
export function LegalPage({ title, path, sections }: { title: string; path: string; sections: { heading: string; body: string }[] }) {
  return (
    <>
      <PageHero crumbs={[{ name: title, path }]} eyebrow="Legal" title={title}>
        <p className="max-w-2xl rounded-2xl border border-amber-300/25 bg-amber-300/[0.06] p-4 text-sm text-amber-100">
          Template text. Have this page reviewed by a legal professional and updated with your registered business details before launch.
        </p>
      </PageHero>
      <section className="container-x max-w-3xl pb-24">
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl font-semibold">{s.heading}</h2>
              <p className="mt-3 leading-relaxed text-white/75">{s.body}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
