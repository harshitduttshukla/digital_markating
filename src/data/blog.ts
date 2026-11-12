import type { BlogPost } from "@/types";

/** Starter articles. Edit freely or replace with a CMS source later. */
export const posts: BlogPost[] = [
  {
    slug: "seo-strategies-for-indian-businesses",
    title: "SEO Strategies That Work for Indian Businesses",
    excerpt: "Mobile-first indexing, vernacular search and hyper-local intent: what Indian businesses should prioritise in their SEO roadmap.",
    category: "SEO",
    date: "2026-10-14",
    readingMinutes: 7,
    author: "Tesoap Lab Editorial",
    art: "waves",
    content: [
      { paragraphs: ["Search behaviour in India has some features of its own. Most searches happen on mobile, many buyers mix English with regional languages, and local intent like 'near me' is very common. A good SEO strategy has to account for all of this."] },
      { heading: "1. Treat mobile performance as a ranking requirement", paragraphs: ["Google indexes the mobile version of your site first. Slow pages on mid-range Android devices and patchy networks hurt both rankings and conversions."], list: ["Compress and properly size images", "Limit third-party scripts", "Check Core Web Vitals in Search Console"] },
      { heading: "2. Map keywords to intent, not just volume", paragraphs: ["A keyword with lower volume and clear buying intent is often worth more than a large informational one. Group keywords by intent and give each group a single page that owns it."] },
      { heading: "3. Account for language variation", paragraphs: ["Buyers may search in Hinglish or in regional scripts. Research these variations and, where your audience calls for it, create dedicated pages instead of machine-translated copies."] },
      { heading: "4. Build authority the slow, durable way", paragraphs: ["Relevant mentions from industry publications, associations and partners carry more weight than bulk directory links, and they don't carry the risk of a penalty."] },
    ],
  },
  {
    slug: "google-ads-vs-meta-ads",
    title: "Google Ads vs Meta Ads: Where Should Your Budget Go?",
    excerpt: "Capturing demand versus creating it. A practical framework for splitting paid media budget between search and social.",
    category: "Paid Media",
    date: "2026-09-28",
    readingMinutes: 6,
    author: "Tesoap Lab Editorial",
    art: "bars",
    content: [
      { paragraphs: ["Google Ads and Meta Ads aren't really competing for the same job. Google captures demand that already exists. Meta creates demand among people who haven't started looking yet."] },
      { heading: "When Google Ads usually comes first", paragraphs: ["If people already search for your product or service, search ads put you in front of them at the moment of intent. Service businesses, B2B and urgent-need categories often start here."] },
      { heading: "When Meta Ads usually comes first", paragraphs: ["Visual products, impulse purchases and new categories with little search demand often grow faster with Meta's audience targeting and creative formats."] },
      { heading: "A practical way to split budget", paragraphs: ["Start where intent is strongest, prove unit economics, then expand into the second channel. The most important step is the same measurement framework for both, so you compare them on cost per qualified customer and not on platform-reported numbers."], list: ["Define one business KPI across channels", "Use UTMs and CRM feedback consistently", "Review marginal returns monthly"] },
    ],
  },
  {
    slug: "how-to-generate-qualified-business-leads",
    title: "How to Generate Qualified Business Leads, Not Just More Leads",
    excerpt: "Why cheap leads cost more in the end, and how to align ads, landing pages and CRM data around lead quality.",
    category: "Lead Generation",
    date: "2026-09-09",
    readingMinutes: 8,
    author: "Tesoap Lab Editorial",
    art: "steps",
    content: [
      { paragraphs: ["A low cost per lead looks good on a report until the sales team spends its week chasing people who were never going to buy. Lead quality is a marketing problem as much as a sales problem."] },
      { heading: "Define what 'qualified' means", paragraphs: ["Agree with sales on the criteria that make a lead worth following up: budget, timeline, location, company size. Without that definition, optimisation has no target."] },
      { heading: "Let your forms do some filtering", paragraphs: ["One or two well-chosen qualifying questions can lift lead quality a lot, even if total volume drops."] },
      { heading: "Feed outcomes back to the ad platforms", paragraphs: ["Import CRM stages such as 'qualified' or 'site visit booked' back into Google and Meta as conversions, so their bidding algorithms learn which users actually become customers."] },
    ],
  },
  {
    slug: "local-seo-guide-for-indian-businesses",
    title: "The Local SEO Guide for Indian Businesses",
    excerpt: "From Google Business Profile basics to review strategy: a step-by-step guide to winning the map pack in your city.",
    category: "Local SEO",
    date: "2026-08-21",
    readingMinutes: 9,
    author: "Tesoap Lab Editorial",
    art: "rings",
    content: [
      { paragraphs: ["For clinics, restaurants, coaching institutes and showrooms, the Google map pack often decides who gets the call. Here's how to improve your chances."] },
      { heading: "Complete your Google Business Profile", paragraphs: ["Choose the most accurate primary category, add services and products, upload real photos, and keep opening hours up to date, especially around festivals and holidays."] },
      { heading: "Keep your business details consistent", paragraphs: ["Your business name, address and phone number should match exactly across your website, directories and social profiles."] },
      { heading: "Build an ethical review habit", paragraphs: ["Ask satisfied customers for reviews at the right moment, make it easy with a direct link, and reply to every review, including the critical ones. Never buy or incentivise reviews."] },
      { heading: "Create useful location pages", paragraphs: ["If you serve several areas or run several branches, give each one its own page with unique information such as directions, the team, local services and FAQs."] },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
