import type { LandingBase } from "./types";

/* ------------------------------------------------------------------ */
/* 1. Mumbai — SEO  (Editorial / bold typography)                      */
/* ------------------------------------------------------------------ */
export const mumbaiSeo = {
  label: "SEO in Mumbai",
  metaTitle: "SEO Agency in Mumbai | Local & Technical SEO",
  metaDescription:
    "Locality-led SEO for Mumbai finance, real estate, hospitality and retail brands: technical fixes, neighbourhood pages and trusted content that win search.",
  hero: {
    kicker: "Search engine optimisation — Mumbai edition",
    lede: "Mumbai is searched by the street, not by the city. Buyers ask for a 2 BHK in Powai, a SEBI-registered advisor in Andheri or a rooftop table in Lower Parel. We build SEO around how Mumbai actually searches.",
  },
  queries: [
    { q: "2 bhk ready possession powai", sector: "Real estate" },
    { q: "sebi registered investment advisor andheri", sector: "Finance" },
    { q: "rooftop restaurant lower parel", sector: "Hospitality" },
    { q: "same day saree delivery mumbai", sector: "E-commerce" },
    { q: "furniture showroom near thane west", sector: "Retail" },
  ],
  challenges: [
    {
      title: "Page one belongs to portals",
      body: "Property portals, OTAs and marketplaces own the head terms. Independent brands win on long-tail, locality and comparison intent instead — if those pages exist.",
    },
    {
      title: "Neighbourhoods behave like cities",
      body: "Bandra, Borivali and Navi Mumbai have different buyers, prices and vocabulary. One generic ‘Mumbai’ page cannot rank for all of them.",
    },
    {
      title: "Money pages face a higher bar",
      body: "Finance and property content is judged on expertise and trust. Thin pages with no author, disclosures or sources rarely hold rankings.",
    },
    {
      title: "Seasonality is sharp",
      body: "Festive buying, monsoon lulls and launch cycles move demand quickly. Content published after the spike starts is already late.",
    },
  ],
  services: [
    { title: "Technical SEO", body: "Crawl budget, Core Web Vitals, faceted navigation and index hygiene — critical for large listing and catalogue sites.", size: "lg" },
    { title: "Locality landing pages", body: "Genuinely useful pages for the suburbs and micro-markets you serve, not doorway copies.", size: "md" },
    { title: "Trust-first content", body: "Expert-reviewed finance and property content with clear authorship and disclosures.", size: "md" },
    { title: "Google Business Profile", body: "Categories, photos, reviews workflow and posts for every physical location.", size: "sm" },
    { title: "Category & product SEO", body: "Structured category pages, filters and schema for Mumbai retailers and D2C stores.", size: "sm" },
    { title: "Digital PR", body: "Earned coverage and relevant links from publications your buyers already read.", size: "sm" },
  ],
  process: [
    { step: "Listen", body: "Interview your sales team. What do Mumbai customers ask before they buy?" },
    { step: "Map", body: "Group keywords by intent and locality, then assign each cluster one owning page." },
    { step: "Fix", body: "Resolve the technical blockers that cap how much of the site Google sees." },
    { step: "Publish", body: "Ship locality pages and expert content on a fixed monthly cadence." },
    { step: "Measure", body: "Report on enquiries and revenue, not just positions." },
  ],
  industries: [
    { name: "Finance", angle: "Advisor, loan and insurance queries where trust signals decide rankings." },
    { name: "Real estate", angle: "Project, locality and configuration pages that compete with portals on long-tail." },
    { name: "Hospitality", angle: "Restaurant, hotel and banquet visibility in local packs and maps." },
    { name: "Retail", angle: "Store-locator SEO that turns ‘near me’ searches into walk-ins." },
    { name: "E-commerce", angle: "Category architecture and product schema for catalogues of every size." },
  ],
  faqs: [
    {
      question: "How long does SEO take to work for a Mumbai business?",
      answer:
        "Technical fixes and Google Business Profile changes can show movement within weeks. Competitive terms in real estate or finance usually need four to nine months of consistent work. We share a realistic timeline after the audit rather than a blanket promise.",
    },
    {
      question: "Can you help us rank against property portals and marketplaces?",
      answer:
        "Rarely on the broadest head terms. The opportunity is in specific projects, configurations, localities and comparison searches that portals cover thinly. That is where we focus first.",
    },
    {
      question: "Do you create separate pages for each Mumbai suburb?",
      answer:
        "Only where you genuinely serve that area and have something specific to say — inventory, pricing context, directions or local proof. Duplicate pages with swapped place names tend to hurt rather than help.",
    },
    {
      question: "We are a regulated financial business. How do you handle content?",
      answer:
        "We draft, your compliance team reviews, and we never publish return claims or advice that has not been approved. Author bios, disclosures and sources are built into every template.",
    },
    {
      question: "What does the monthly report include?",
      answer:
        "Organic enquiries and revenue where tracking allows, visibility for your priority keyword clusters, pages shipped, technical issues resolved and the plan for the next month.",
    },
  ],
} satisfies LandingBase & Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 2. Mumbai — Digital marketing agency (Growth dashboard)             */
/* ------------------------------------------------------------------ */
export const mumbaiDigital = {
  label: "Digital Marketing in Mumbai",
  metaTitle: "Digital Marketing Agency in Mumbai",
  metaDescription:
    "Full-funnel digital marketing for Mumbai brands. SEO, Google Ads, Meta and CRO planned as one system, with reporting tied to enquiries and revenue.",
  hero: {
    title: "One growth system for Mumbai’s most competitive markets.",
    lede: "Ads, search, social and your website usually run as separate projects with separate reports. We plan them as one system, so every rupee is measured against the same goal: qualified business.",
  },
  sectors: [
    {
      name: "Real estate",
      insight: "Long consideration cycles. Buyers research for months, visit sites twice and compare across portals.",
      mix: [
        { channel: "Google Search", v: 34 },
        { channel: "Meta lead forms", v: 26 },
        { channel: "SEO & project pages", v: 22 },
        { channel: "Remarketing", v: 18 },
      ],
      focus: "Site-visit bookings, not raw leads",
    },
    {
      name: "Finance",
      insight: "High-trust category with strict platform policies. Clarity and compliance beat clever creative.",
      mix: [
        { channel: "Google Search", v: 38 },
        { channel: "SEO & content", v: 30 },
        { channel: "LinkedIn", v: 18 },
        { channel: "Email nurture", v: 14 },
      ],
      focus: "Cost per qualified application",
    },
    {
      name: "Hospitality",
      insight: "Direct bookings compete with OTAs. Weekend and event demand spikes need fast budget shifts.",
      mix: [
        { channel: "Google Hotel & Search", v: 32 },
        { channel: "Instagram", v: 28 },
        { channel: "Local SEO & Maps", v: 24 },
        { channel: "Email & WhatsApp", v: 16 },
      ],
      focus: "Direct booking share",
    },
    {
      name: "Retail & D2C",
      insight: "Festive peaks drive the year. Catalogue feeds and creative refresh speed decide profitability.",
      mix: [
        { channel: "Performance Max / Shopping", v: 36 },
        { channel: "Meta Advantage+", v: 30 },
        { channel: "SEO categories", v: 20 },
        { channel: "Retention email", v: 14 },
      ],
      focus: "Contribution margin after ad spend",
    },
  ],
  channels: [
    { name: "SEO", body: "Compounding visibility for the searches your buyers make every day." },
    { name: "Google Ads", body: "Intent-led Search, Shopping and Performance Max with clean conversion data." },
    { name: "Meta & Instagram", body: "Creative testing systems for reach, leads and catalogue sales." },
    { name: "LinkedIn", body: "Account-based campaigns for B2B, finance and enterprise offers." },
    { name: "Landing pages & CRO", body: "Faster, clearer pages that lift conversion across every channel." },
    { name: "Analytics", body: "GA4, server-side tagging and CRM feedback so bidding learns from real sales." },
  ],
  strategy: [
    { phase: "Days 1–15", title: "Audit & tracking", body: "Fix measurement first. No budget increases until conversions are trustworthy." },
    { phase: "Days 16–45", title: "Quick wins", body: "Cut wasted spend, repair landing pages, launch the highest-intent campaigns." },
    { phase: "Days 46–75", title: "Build", body: "Content, creative testing and audience expansion on proven foundations." },
    { phase: "Days 76–90", title: "Scale", body: "Shift budget to the channels with the best marginal return." },
  ],
  blueprints: [
    {
      name: "Project launch",
      sector: "Real estate",
      steps: ["Locality search ads", "Project microsite", "Virtual tour remarketing", "Site-visit booking", "Sales CRM handoff"],
      kpi: "Cost per site visit",
    },
    {
      name: "Festive season push",
      sector: "Retail & D2C",
      steps: ["Early-access email list", "Catalogue ads", "Gift-guide SEO pages", "Cart recovery", "Post-festive retention"],
      kpi: "Margin after ad spend",
    },
    {
      name: "Direct bookings",
      sector: "Hospitality",
      steps: ["Brand search defence", "Maps & reviews", "Instagram stories", "Direct-rate landing page", "Pre-stay email"],
      kpi: "Direct booking share",
    },
  ],
  commitments: [
    { title: "One dashboard", body: "All channels in a single view, refreshed automatically." },
    { title: "Weekly change log", body: "You see what we changed, why, and what happened next." },
    { title: "No lock-in", body: "Your ad accounts, data and assets stay in your name." },
  ],
  faqs: [
    {
      question: "What is the minimum budget to work with you in Mumbai?",
      answer:
        "It depends on the channel mix. For paid media we usually recommend a monthly ad spend that allows at least a few dozen conversions a month so platforms can optimise. We will tell you honestly in the first call if your budget is better spent on SEO or CRO first.",
    },
    {
      question: "Do you only work with Mumbai-based companies?",
      answer:
        "No, but this page is for businesses targeting Mumbai and MMR customers. Local nuance — localities, languages and seasonal peaks — shapes the plan.",
    },
    {
      question: "Who owns the ad accounts?",
      answer: "You do. We work inside accounts registered to your business so the data and history stay with you if we ever part ways.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We agree on a business metric up front — qualified leads, site visits, bookings or revenue — and report against it. Clicks and impressions are diagnostics, not goals.",
    },
  ],
} satisfies LandingBase & Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 3. Mumbai — Social media marketing (Creative studio)                */
/* ------------------------------------------------------------------ */
export const mumbaiSocial = {
  label: "Social Media Marketing in Mumbai",
  metaTitle: "Social Media Marketing Agency in Mumbai",
  metaDescription:
    "Social media marketing for Mumbai brands: Reels production, content calendars, creators and paid social for hospitality, retail, real estate and D2C.",
  hero: {
    title: "Content Mumbai stops scrolling for.",
    lede: "A city that moves this fast gives you about two seconds. We plan, shoot and publish social content with a hook in the first frame and a business reason behind every post.",
  },
  formats: ["Reels", "Carousels", "Stories", "UGC", "Creator collabs", "Live", "Shorts", "Paid social"],
  services: [
    { title: "Content strategy", body: "Pillars, tone and a monthly calendar mapped to your sales moments.", tall: true },
    { title: "Reels production", body: "Scripting, shoot days and edits made for vertical, sound-on viewing.", tall: false },
    { title: "Community management", body: "Replies, DMs and comment moderation within agreed response times.", tall: false },
    { title: "Creator partnerships", body: "Shortlisting relevant Mumbai creators, briefs, contracts and usage rights.", tall: true },
    { title: "Paid social", body: "Meta and YouTube campaigns that put your best organic content behind budget.", tall: false },
    { title: "Social listening", body: "What people say about your category, competitors and brand, summarised monthly.", tall: false },
  ],
  platforms: [
    {
      name: "Instagram",
      role: "Discovery and desire",
      body: "Reels for reach, carousels for saves, Stories for daily nudges. The core platform for hospitality, fashion and lifestyle in Mumbai.",
      cadence: "4–5 posts / week + daily Stories",
    },
    {
      name: "YouTube",
      role: "Depth and search",
      body: "Walkthroughs, explainers and Shorts. Strong for real estate tours and finance education.",
      cadence: "2 long-form / month + weekly Shorts",
    },
    {
      name: "LinkedIn",
      role: "Credibility",
      body: "Founder voice, hiring and B2B announcements for finance and professional services.",
      cadence: "3 posts / week",
    },
    {
      name: "Meta Ads",
      role: "Scale",
      body: "Proven organic posts promoted to lookalike and interest audiences across Mumbai and MMR.",
      cadence: "Always-on, refreshed bi-weekly",
    },
  ],
  pillars: [
    { name: "City", body: "Moments only Mumbai has — monsoon, local trains, festivals, food streets." },
    { name: "Product", body: "Show the thing, up close, in use, with a clear reason to care." },
    { name: "People", body: "Staff, founders, customers. Faces build trust faster than logos." },
    { name: "Proof", body: "Reviews, behind-the-scenes and process — evidence over adjectives." },
  ],
  concepts: [
    { title: "Monsoon menu drop", sector: "Hospitality", format: "Reel series" },
    { title: "Sunday site-visit diaries", sector: "Real estate", format: "Stories + Reels" },
    { title: "Festive lookbook", sector: "Retail", format: "Carousel" },
    { title: "Money myths, 30 seconds", sector: "Finance", format: "Shorts" },
    { title: "Unboxing in the local", sector: "D2C", format: "UGC" },
    { title: "Chef’s market walk", sector: "Hospitality", format: "Reel" },
  ],
  faqs: [
    {
      question: "Do you shoot content in Mumbai or only edit?",
      answer:
        "Both. We plan shoot days around your calendar and can also edit footage your team captures. Many brands use a mix of planned shoots and quick phone-shot content.",
    },
    {
      question: "How many posts will we get each month?",
      answer:
        "It depends on the platforms and formats you choose. A typical Instagram-led plan includes 16–20 feed posts plus Stories, but we would rather publish fewer strong posts than fill a calendar.",
    },
    {
      question: "Can you work with influencers and creators?",
      answer:
        "Yes. We shortlist creators whose audience matches yours, handle briefs and usage rights, and track results with unique links or codes. We do not buy followers or engagement.",
    },
    {
      question: "How do you report social media results?",
      answer:
        "Reach and engagement are tracked, but the report leads with outcomes you care about: profile visits, website clicks, enquiries, bookings or sales attributed to social.",
    },
  ],
} satisfies LandingBase & Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 4. Mumbai — Email marketing (Minimal SaaS / inbox)                  */
/* ------------------------------------------------------------------ */
export const mumbaiEmail = {
  label: "Email Marketing in Mumbai",
  metaTitle: "Email Marketing Services in Mumbai",
  metaDescription:
    "Email marketing for Mumbai retailers, hotels, financial services and D2C brands: automation flows, campaign design, deliverability and DPDP-aware consent.",
  hero: {
    title: "The inbox is still the most profitable shelf in Mumbai.",
    lede: "Social reach rents attention. Email owns it. We design, automate and test email programmes that bring Mumbai customers back — without spamming them.",
  },
  inbox: [
    { from: "Your store", subject: "Your cart is still here — ships today in Mumbai", tag: "Cart recovery", unread: true },
    { from: "Your hotel", subject: "Three days to go: what to pack for monsoon", tag: "Pre-stay", unread: true },
    { from: "Your fund house", subject: "Your quarterly portfolio note, in plain English", tag: "Nurture", unread: false },
    { from: "Your showroom", subject: "Diwali preview: early access for members", tag: "Campaign", unread: false },
  ],
  automations: [
    { trigger: "Signs up", action: "Welcome series", detail: "3 emails over 7 days introducing your story, bestsellers and offer." },
    { trigger: "Abandons cart", action: "Recovery flow", detail: "Reminder in 1 hour, social proof in 24 hours, final nudge at 48." },
    { trigger: "Completes purchase", action: "Post-purchase", detail: "Delivery updates, care tips and a review request." },
    { trigger: "Goes quiet 90 days", action: "Win-back", detail: "A reason to return, then a respectful sunset if they stay inactive." },
  ],
  services: [
    { title: "Strategy & audit", body: "Review of your list, platform, flows and past campaigns." },
    { title: "Automation build", body: "Welcome, cart, browse, post-purchase and win-back flows." },
    { title: "Campaign design", body: "Mobile-first templates that render in Gmail, Outlook and Apple Mail." },
    { title: "Copywriting", body: "Subject lines and body copy written for Mumbai customers, in English or Hinglish." },
    { title: "Deliverability", body: "SPF, DKIM, DMARC, warm-up and list hygiene so emails reach the inbox." },
    { title: "Consent & compliance", body: "Opt-in flows and preference centres aligned with India’s DPDP Act." },
  ],
  process: ["Audit", "Segment", "Automate", "Campaign", "Test", "Report"],
  analytics: [
    { label: "Revenue per recipient", note: "The metric that ties email to money." },
    { label: "Flow vs campaign revenue", note: "How much runs on autopilot." },
    { label: "Inbox placement", note: "Are you landing in Primary, Promotions or spam?" },
    { label: "List growth & churn", note: "Net new subscribers after unsubscribes." },
  ],
  faqs: [
    {
      question: "Which email platform do you recommend?",
      answer:
        "It depends on your stack. Shopify brands often suit Klaviyo; others do well on Mailchimp, Brevo, Zoho Campaigns or HubSpot. We work with your existing platform where it is fit for purpose.",
    },
    {
      question: "Is email marketing still effective in India?",
      answer:
        "For businesses with repeat customers — retail, D2C, hospitality and financial services — email remains one of the most cost-efficient channels because you are not paying per impression.",
    },
    {
      question: "Do you buy or rent email lists?",
      answer: "No. Purchased lists damage deliverability and breach consent requirements. We help you grow a permission-based list instead.",
    },
    {
      question: "Can you combine email with WhatsApp or SMS?",
      answer:
        "Yes. We often design journeys where email carries detail and WhatsApp handles time-sensitive nudges, within each platform’s opt-in rules.",
    },
  ],
} satisfies LandingBase & Record<string, unknown>;
