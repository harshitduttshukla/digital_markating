import type { LandingBase } from "./types";

/* ------------------------------------------------------------------ */
/* 5. Bangalore — SEO (Technology + data visualisation)                */
/* ------------------------------------------------------------------ */
export const bangaloreSeo = {
  label: "SEO in Bangalore",
  metaTitle: "SEO Agency in Bangalore for SaaS & B2B Tech",
  metaDescription:
    "Technical SEO for Bangalore SaaS and B2B tech: JavaScript rendering, programmatic pages, docs SEO and content that turns organic traffic into demos.",
  hero: {
    title: "SEO engineered like your product.",
    lede: "Bangalore’s SaaS and tech companies ship fast on frameworks that search engines do not always read well. We treat SEO as an engineering problem first and a content problem second.",
  },
  audit: [
    {
      area: "Rendering",
      checks: [
        { name: "Critical content in server HTML", status: "warn" },
        { name: "Client-side routes return 200", status: "pass" },
        { name: "Hydration does not change titles", status: "fail" },
        { name: "Lazy content reachable without scroll", status: "warn" },
      ],
    },
    {
      area: "Indexation",
      checks: [
        { name: "Staging blocked from crawl", status: "pass" },
        { name: "Canonicals on parameter URLs", status: "fail" },
        { name: "XML sitemap matches indexable set", status: "warn" },
        { name: "Docs versions consolidated", status: "warn" },
      ],
    },
    {
      area: "Performance",
      checks: [
        { name: "LCP under 2.5s on mobile", status: "warn" },
        { name: "INP under 200ms", status: "pass" },
        { name: "CLS under 0.1", status: "pass" },
        { name: "Third-party scripts deferred", status: "fail" },
      ],
    },
    {
      area: "Structured data",
      checks: [
        { name: "Organization & SoftwareApplication", status: "warn" },
        { name: "Breadcrumbs on docs & blog", status: "pass" },
        { name: "FAQ only where visible on page", status: "pass" },
        { name: "Article author entities", status: "fail" },
      ],
    },
  ],
  challenges: [
    { code: "E01", title: "JavaScript-heavy marketing sites", body: "SPAs and heavy client rendering delay or hide content from crawlers." },
    { code: "E02", title: "Docs and blog on different subdomains", body: "Authority is split across properties that never link to each other properly." },
    { code: "E03", title: "Category-defining terms are taken", body: "Head terms are owned by global players. Growth sits in integrations, comparisons and use cases." },
    { code: "E04", title: "Traffic without pipeline", body: "Top-of-funnel posts attract students and job seekers instead of buyers." },
  ],
  funnel: [
    { stage: "Problem-aware", share: 46, examples: "how to reduce churn in saas · invoice automation india" },
    { stage: "Solution-aware", share: 28, examples: "best expense management software · gst billing api" },
    { stage: "Comparison", share: 16, examples: "tool A vs tool B · alternatives to X" },
    { stage: "Brand & integration", share: 10, examples: "your-product + slack · your-product pricing" },
  ],
  services: [
    { name: "Technical SEO audit", scope: "Rendering, indexation, internal linking, CWV, log-file analysis" },
    { name: "Programmatic SEO", scope: "Templated integration, location or use-case pages with real data behind them" },
    { name: "Docs SEO", scope: "Information architecture, versioning and search for developer documentation" },
    { name: "Comparison & alternative pages", scope: "Honest, specific pages for high-intent evaluation queries" },
    { name: "Content engineering", scope: "Topic clusters mapped to product capabilities and ICP pain points" },
    { name: "Analytics & attribution", scope: "Organic signups, demos and pipeline in GA4 and your CRM" },
  ],
  changelog: [
    { tag: "v0.1", title: "Crawl & baseline", body: "Full crawl, log sample, Search Console export, rendering diff." },
    { tag: "v0.2", title: "Fix the platform", body: "Tickets written for your engineers, prioritised by impact and effort." },
    { tag: "v0.3", title: "Map demand", body: "Keyword universe clustered by funnel stage and product fit." },
    { tag: "v1.0", title: "Ship & iterate", body: "Pages shipped every sprint, measured against signups and demos." },
  ],
  faqs: [
    {
      question: "Our site is built on React / Next.js. Is that bad for SEO?",
      answer:
        "Not inherently. Problems come from what is rendered on the server versus the client, how routes behave and how metadata is set. We test what Googlebot actually receives and write specific tickets for your developers.",
    },
    {
      question: "Do you work directly with our engineering team?",
      answer:
        "Yes. We write tickets in your tracker with acceptance criteria, join sprint planning if useful, and verify fixes after release.",
    },
    {
      question: "Is programmatic SEO risky?",
      answer:
        "It is when pages are thin or duplicated. It works when each page is backed by unique data — integrations, templates, locations or benchmarks — that genuinely answers the query.",
    },
    {
      question: "How do you connect SEO to pipeline?",
      answer:
        "We track organic sessions through to signups, demo requests and opportunities in your CRM, so content decisions are based on what produces customers.",
    },
    {
      question: "Can you help with global rankings, not just Bangalore?",
      answer:
        "Yes. Most Bangalore SaaS companies sell to the US, Europe or global markets. We plan for the markets your customers are in, including hreflang where relevant.",
    },
  ],
} satisfies LandingBase & Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 6. Bangalore — Digital marketing agency (Swiss grid)                */
/* ------------------------------------------------------------------ */
export const bangaloreDigital = {
  label: "Digital Marketing in Bangalore",
  metaTitle: "Digital Marketing Agency in Bangalore",
  metaDescription:
    "Pipeline-focused digital marketing for Bangalore startups, SaaS and IT services firms. Search, LinkedIn, paid media and CRO measured against revenue.",
  hero: {
    title: "Marketing that reports to revenue.",
    lede: "For Bangalore startups, SaaS companies and IT services firms, the question is never ‘how many clicks?’ It is ‘how much pipeline?’ We build the system that answers it.",
  },
  problems: [
    { n: "01", title: "Long sales cycles", body: "Deals take months and involve several stakeholders. Last-click reports undervalue every early touch." },
    { n: "02", title: "Small, specific audiences", body: "Your total market may be a few thousand companies. Broad targeting burns budget quickly." },
    { n: "03", title: "Founder-led growth plateaus", body: "Referrals and the founder’s network got you here. They will not get you to the next stage." },
  ],
  services: [
    { n: "A", name: "Demand capture", items: ["Google Search", "Bing", "Review sites", "Comparison SEO"] },
    { n: "B", name: "Demand creation", items: ["LinkedIn Ads", "Thought leadership", "Webinars", "Retargeting"] },
    { n: "C", name: "Conversion", items: ["Landing pages", "Demo flow", "Pricing page tests", "Forms"] },
    { n: "D", name: "Measurement", items: ["GA4", "HubSpot / Salesforce", "Offline conversions", "Attribution"] },
  ],
  segments: [
    { name: "Early-stage startups", body: "Find the first repeatable channel. Small budgets, fast tests, honest reads." },
    { name: "Scaling SaaS", body: "Lower CAC as spend grows. Multi-channel orchestration and tighter attribution." },
    { name: "IT services & consultancies", body: "Account-based programmes for enterprise buyers in India and abroad." },
  ],
  model: [
    { label: "Month 1", title: "Diagnose", body: "Funnel audit, ICP interviews, tracking repair." },
    { label: "Month 2–3", title: "Prove", body: "Two or three focused channel bets with clear success criteria." },
    { label: "Month 4+", title: "Compound", body: "Double down on what works, retire what doesn’t." },
  ],
  faqs: [
    {
      question: "Do you work with pre-revenue startups?",
      answer:
        "Sometimes. If you have a clear ICP and a product people can try or buy, we can help find the first channel. If positioning is still moving, we will suggest focusing on customer conversations first.",
    },
    {
      question: "Which CRM do you integrate with?",
      answer: "Most often HubSpot, Salesforce, Zoho CRM and Pipedrive. The goal is to send qualified-lead and deal data back to ad platforms.",
    },
    {
      question: "Can you market to the US and Europe from Bangalore?",
      answer: "Yes. Many Bangalore companies sell internationally. We plan targeting, time zones, currency and messaging per market.",
    },
    {
      question: "How are your fees structured?",
      answer: "A fixed monthly retainer based on scope, separate from ad spend, which is billed directly to your accounts. No percentage-of-spend incentives to overspend.",
    },
  ],
} satisfies LandingBase & Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 7. Bangalore — Social media marketing (Bold creative agency)        */
/* ------------------------------------------------------------------ */
export const bangaloreSocial = {
  label: "Social Media Marketing in Bangalore",
  metaTitle: "Social Media Marketing Agency in Bangalore",
  metaDescription:
    "Social media marketing for Bangalore startups and tech brands: founder-led LinkedIn, product storytelling, employer branding and paid social for pipeline.",
  hero: {
    words: ["Loud", "ideas.", "Clear", "pipeline."],
    lede: "Tech brands do not need to be boring on social. They need to be specific. We help Bangalore startups turn product knowledge and founder perspective into content people actually follow.",
  },
  manifesto: [
    "Say one thing per post.",
    "Show the product, not the stock photo.",
    "Founders are the brand until the brand is bigger.",
    "Measure demos, not likes.",
  ],
  issues: [
    {
      no: "01",
      title: "Founder-led LinkedIn",
      body: "Ghostwritten posts in your voice, built from recorded conversations. Opinions, lessons and launches — never generic motivation.",
      tag: "LinkedIn",
    },
    {
      no: "02",
      title: "Product storytelling",
      body: "Short demos, feature launches and ‘how we built it’ threads that make complex software easy to grasp.",
      tag: "X · LinkedIn · YouTube",
    },
    {
      no: "03",
      title: "Employer branding",
      body: "Team stories and culture content that help you hire in one of the world’s most competitive talent markets.",
      tag: "Instagram · LinkedIn",
    },
    {
      no: "04",
      title: "Developer community",
      body: "Technical content and community presence where engineers already spend time.",
      tag: "X · Reddit · GitHub",
    },
  ],
  cards: [
    { kind: "Carousel", line: "5 things we learned shipping v2" },
    { kind: "Demo", line: "Watch: setup in 90 seconds" },
    { kind: "Founder post", line: "Why we said no to our biggest deal" },
    { kind: "Hiring", line: "Meet the team behind the API" },
    { kind: "Launch", line: "Now live: the integration you asked for" },
    { kind: "Poll", line: "How does your team handle on-call?" },
  ],
  process: [
    { title: "Voice interviews", body: "Monthly recorded sessions with founders and subject experts." },
    { title: "Content engine", body: "Each interview becomes posts, clips, carousels and newsletter material." },
    { title: "Distribution", body: "Organic posting, employee amplification and paid boosting of winners." },
    { title: "Feedback loop", body: "Track profile visits, inbound DMs and demo requests from social." },
  ],
  faqs: [
    {
      question: "Is social media useful for B2B SaaS?",
      answer:
        "Yes, especially LinkedIn. Buyers research vendors and founders before booking demos. Consistent, specific content builds familiarity that shortens sales conversations.",
    },
    {
      question: "Do founders need to write their own posts?",
      answer: "No. We interview them, draft in their voice and they approve. Most founders spend 30–45 minutes a month on it.",
    },
    {
      question: "Can you run LinkedIn Ads as well?",
      answer: "Yes. We promote the organic posts that perform best, run thought-leader ads and build retargeting audiences for demo campaigns.",
    },
    {
      question: "Which platforms should a Bangalore startup prioritise?",
      answer: "For B2B, usually LinkedIn first, then X or YouTube depending on audience. Consumer startups often lead with Instagram and YouTube Shorts.",
    },
  ],
} satisfies LandingBase & Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 8. Bangalore — Email marketing (Automation workflow)                */
/* ------------------------------------------------------------------ */
export const bangaloreEmail = {
  label: "Email Marketing in Bangalore",
  metaTitle: "Email Marketing & Automation in Bangalore",
  metaDescription:
    "Lifecycle email automation for Bangalore SaaS and B2B: onboarding, activation, trial conversion and expansion journeys with solid deliverability.",
  hero: {
    title: "Lifecycle email that moves users to the next step.",
    lede: "Signups are easy to count and hard to convert. We design behaviour-triggered email journeys that guide trial users to activation, and customers to expansion.",
  },
  journeys: [
    {
      name: "Trial onboarding",
      goal: "Activation in 7 days",
      nodes: [
        { t: "Signup", d: "Day 0" },
        { t: "Welcome + first task", d: "Day 0" },
        { t: "Completed setup?", d: "Branch", branch: true },
        { t: "Feature tip", d: "Day 2" },
        { t: "Founder check-in", d: "Day 5" },
        { t: "Trial ending", d: "Day 12" },
      ],
    },
    {
      name: "Activation nudges",
      goal: "Reach the ‘aha’ action",
      nodes: [
        { t: "Logged in, no action", d: "Trigger" },
        { t: "Use-case template", d: "+1 day" },
        { t: "Action taken?", d: "Branch", branch: true },
        { t: "Short video guide", d: "+3 days" },
        { t: "Offer a call", d: "+6 days" },
      ],
    },
    {
      name: "Expansion",
      goal: "Upgrade or add seats",
      nodes: [
        { t: "Usage hits 80% of plan", d: "Trigger" },
        { t: "Heads-up + options", d: "Same day" },
        { t: "Team invited?", d: "Branch", branch: true },
        { t: "Collaboration features", d: "+2 days" },
        { t: "Annual plan offer", d: "+7 days" },
      ],
    },
    {
      name: "Event follow-up",
      goal: "Meetings booked",
      nodes: [
        { t: "Webinar / meetup attended", d: "Trigger" },
        { t: "Recording + slides", d: "+2 hours" },
        { t: "Opened & clicked?", d: "Branch", branch: true },
        { t: "Relevant case resource", d: "+3 days" },
        { t: "Book a session", d: "+6 days" },
      ],
    },
  ],
  story: [
    { title: "Map the lifecycle", body: "We define the events that matter — signup, setup, first value, invite, upgrade — with your product team." },
    { title: "Wire the data", body: "Product events flow from Segment, your app or CDP into the email platform so triggers are real-time." },
    { title: "Write for behaviour", body: "Every email has one job and one action, written for the stage the user is actually in." },
    { title: "Test and branch", body: "Subject lines, timing and content tested; branches added where behaviour diverges." },
  ],
  stack: ["Customer.io", "HubSpot", "Braze", "Mailchimp", "Brevo", "Segment", "Zoho"],
  deliverability: [
    { k: "SPF", v: "Authorised senders defined" },
    { k: "DKIM", v: "Messages cryptographically signed" },
    { k: "DMARC", v: "Policy enforced and monitored" },
    { k: "Warm-up", v: "New domains ramped gradually" },
  ],
  faqs: [
    {
      question: "What is the difference between lifecycle and newsletter email?",
      answer:
        "Newsletters go to everyone on a schedule. Lifecycle emails are triggered by what each user does or doesn’t do in your product, so they are far more relevant and usually outperform broadcasts.",
    },
    {
      question: "Do we need a customer data platform?",
      answer: "Not always. Many teams send events directly from their app to the email tool. We recommend a CDP only when several tools need the same data.",
    },
    {
      question: "Can you help with cold outbound email?",
      answer:
        "We focus on permission-based lifecycle and marketing email. For outbound, we can advise on domain separation and deliverability so it does not damage your main sending reputation.",
    },
    {
      question: "How long does it take to launch onboarding flows?",
      answer: "Typically three to six weeks, depending on how quickly product events can be instrumented.",
    },
  ],
} satisfies LandingBase & Record<string, unknown>;
