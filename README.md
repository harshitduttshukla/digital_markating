# Tesoap Lab — Digital Growth Agency Website

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · React Hook Form + Zod

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL and LEAD_WEBHOOK_URL
npm run dev                  # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```

- Brand, contact, WhatsApp, socials, certifications, client logos: `src/config/site.ts`
- Content: `src/data/*` (services, case studies, industries, testimonials, blog)
- Lead delivery boundary: `src/lib/leads.ts` (currently a JSON webhook)

Placeholder content is flagged in the UI (`isDemo` / `isSample`) and must be replaced before launch.
