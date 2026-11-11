import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[80vh] place-items-center pt-24 text-center">
      <div>
        <p className="font-mono text-sm text-lime">404</p>
        <h1 className="mt-4 text-5xl font-semibold sm:text-6xl">This page took a wrong turn.</h1>
        <p className="mx-auto mt-5 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/" arrow>Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="outline">Contact us</ButtonLink>
        </div>
      </div>
    </section>
  );
}
