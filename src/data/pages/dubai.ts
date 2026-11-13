import type { LandingBase } from "./types";

/* ------------------------------------------------------------------ */
/* 9. Dubai — SEO (Luxury editorial)                                   */
/* ------------------------------------------------------------------ */
export const dubaiSeo = {
  label: "SEO in Dubai",
  metaTitle: "SEO Agency in Dubai | English & Arabic SEO",
  metaDescription:
    "Bilingual English and Arabic SEO for Dubai real estate, hospitality, tourism, retail and professional services. Technical precision, trusted content.",
  hero: {
    title: "Visibility, considered.",
    lede: "In Dubai, the first search often decides the shortlist. We craft bilingual search strategies for brands whose customers expect precision — from the first result to the final enquiry.",
  },
  principles: [
    { numeral: "I", title: "Two languages, one strategy", body: "English and Arabic searches differ in phrasing and intent. We research each natively rather than translating keywords." },
    { numeral: "II", title: "International by default", body: "Your buyers may search from Riyadh, London or Mumbai. Hreflang and market targeting are planned from day one." },
    { numeral: "III", title: "Quality over volume", body: "Fewer, better pages that answer questions completely — the standard premium audiences expect." },
  ],
  sectors: [
    { name: "Real estate", body: "Off-plan projects, communities and investor guides that rank alongside portals." },
    { name: "Hospitality", body: "Direct-booking visibility for hotels, restaurants and beach clubs." },
    { name: "Tourism", body: "Experience and itinerary content for visitors planning months ahead." },
    { name: "Retail", body: "Store, brand and category pages for malls and boutiques." },
    { name: "Professional services", body: "Company setup, legal, accounting and consultancy firms competing on expertise." },
  ],
  services: [
    { title: "Bilingual keyword research", body: "Native Arabic and English demand mapping by market." },
    { title: "Technical SEO & hreflang", body: "Clean architecture for multi-language, multi-market sites." },
    { title: "Editorial content", body: "Guides and pages written to a publication standard." },
    { title: "Local & Maps", body: "Google Business Profile for every location and community." },
  ],
  method: ["Discovery", "Audit", "Architecture", "Content", "Authority", "Review"],
  faqs: [
    {
      question: "Do you offer Arabic SEO in Dubai?",
      answer:
        "Yes. We plan Arabic keyword research and content with native-language writers, and structure the site so Arabic and English pages are correctly linked with hreflang.",
    },
    {
      question: "Can SEO help sell off-plan property to overseas buyers?",
      answer:
        "Yes. International investors often research communities, developers, service charges and visa considerations long before enquiring. Well-structured guides capture that demand.",
    },
    {
      question: "How competitive is SEO in Dubai?",
      answer:
        "Very, in real estate, hospitality and company formation. That is why we focus on specific communities, services and questions rather than chasing the broadest terms.",
    },
    {
      question: "Do you work with businesses in other Emirates?",
      answer: "Yes. The same approach applies to Abu Dhabi, Sharjah and across the GCC, with targeting planned per market.",
    },
  ],
} satisfies LandingBase & Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 10. Dubai — Digital marketing agency (International growth)         */
/* ------------------------------------------------------------------ */
export const dubaiDigital = {
  label: "Digital Marketing in Dubai",
  metaTitle: "Digital Marketing Agency in Dubai",
  metaDescription:
    "Digital marketing for Dubai businesses selling to the UAE, GCC and the world. Search, paid social and analytics planned across markets and languages.",
  hero: {
    title: "Grow from Dubai. Sell to the world.",
    lede: "Dubai businesses rarely sell to one market. Residents, GCC neighbours, tourists and overseas investors all search differently. We orchestrate digital marketing across every market you serve.",
  },
  markets: [
    { name: "UAE residents", x: 66, y: 62, note: "Mobile-first, bilingual, high expectations of speed." },
    { name: "GCC", x: 48, y: 58, note: "Arabic-led search and social, strong Snapchat and Instagram use." },
    { name: "India", x: 80, y: 60, note: "Investors and visitors researching in English." },
    { name: "UK & Europe", x: 32, y: 30, note: "Winter-season travellers and property buyers." },
    { name: "CIS", x: 60, y: 22, note: "Tourism and real estate demand with distinct seasonality." },
  ],
  services: [
    { title: "Search marketing", body: "SEO and Google Ads across languages and markets, with separate budgets by geography." },
    { title: "Paid social", body: "Meta, Snapchat, TikTok and LinkedIn campaigns built for each audience." },
    { title: "Programmatic & YouTube", body: "Video and display for awareness in priority markets." },
    { title: "Websites & CRO", body: "Multilingual landing pages that load fast and convert on mobile." },
    { title: "Analytics", body: "One measurement framework across markets, currencies and CRMs." },
  ],
  chapters: [
    { kicker: "Chapter one", title: "Know where demand comes from", body: "We size each market’s search and social demand before recommending budgets, so spend follows opportunity rather than habit." },
    { kicker: "Chapter two", title: "Speak each audience’s language", body: "Arabic and English creative, market-specific offers and landing pages that reflect local expectations." },
    { kicker: "Chapter three", title: "Measure one way, everywhere", body: "Consistent conversion definitions and dashboards so you can compare markets fairly and move budget with confidence." },
  ],
  faqs: [
    {
      question: "Do you run campaigns in Arabic?",
      answer: "Yes. Arabic and English campaigns are planned and written separately with native writers, not machine-translated.",
    },
    {
      question: "Can you target overseas buyers for Dubai real estate?",
      answer:
        "Yes, within each platform’s housing and financial ad policies. We plan market-by-market targeting and timing for investor audiences abroad.",
    },
    {
      question: "Which ad platforms work best in the UAE?",
      answer:
        "Google and Meta are the foundation for most businesses. Snapchat and TikTok are strong for younger and GCC audiences, LinkedIn for B2B and professional services.",
    },
    {
      question: "Do you have an office in Dubai?",
      answer: "We work with Dubai clients remotely with scheduled calls in Gulf Standard Time. Ask us about in-person workshops when you get in touch.",
    },
  ],
} satisfies LandingBase & Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 11. Dubai — Social media marketing (High-end campaign studio)       */
/* ------------------------------------------------------------------ */
export const dubaiSocial = {
  label: "Social Media Marketing in Dubai",
  metaTitle: "Social Media Marketing Agency in Dubai",
  metaDescription:
    "Bilingual social media campaigns for Dubai hospitality, real estate, tourism and retail brands on Instagram, TikTok and Snapchat, with vetted creators.",
  hero: {
    title: "Campaigns made for the city that sets the bar.",
    lede: "Dubai audiences scroll past ordinary. We create bilingual social campaigns with the production value, cultural fluency and pace this market expects.",
  },
  frames: [
    { title: "Sunset terrace launch", sector: "Hospitality" },
    { title: "Community walkthrough", sector: "Real estate" },
    { title: "48 hours in Dubai", sector: "Tourism" },
    { title: "Ramadan collection", sector: "Retail" },
    { title: "Founder Q&A", sector: "Professional services" },
  ],
  platforms: ["Instagram", "TikTok", "Snapchat", "YouTube", "LinkedIn"],
  calendar: [
    { moment: "Ramadan & Eid", body: "Respectful, values-led storytelling with timing adjusted for evening engagement." },
    { moment: "Winter season", body: "Peak tourism and events — experiences, dining and staycations." },
    { moment: "Shopping festivals", body: "Retail and hospitality offers built around the city’s festival calendar." },
    { moment: "Summer", body: "Indoor experiences, resident offers and travel content for outbound residents." },
  ],
  services: [
    { title: "Campaign concepts", body: "Big ideas built for social first, adapted across platforms." },
    { title: "Bilingual production", body: "Arabic and English scripts, captions and on-screen text." },
    { title: "Creator programmes", body: "Vetted creators with audiences that match yours, with proper disclosure." },
    { title: "Paid amplification", body: "Meta, TikTok and Snapchat ads that scale your best content." },
  ],
  faqs: [
    {
      question: "Do influencers in the UAE need a licence?",
      answer:
        "UAE rules require paid influencer advertising to be properly licensed and disclosed. We work with creators who meet current requirements and include clear disclosure in every brief.",
    },
    {
      question: "Do you create content in Arabic?",
      answer: "Yes. Captions, scripts and on-screen text are written by native Arabic writers and adapted, not translated literally.",
    },
    {
      question: "Is TikTok or Snapchat worth it for our brand?",
      answer:
        "Both have strong reach in the UAE, especially among younger residents and GCC audiences. We recommend them when your customers are there — not by default.",
    },
    {
      question: "Can you handle campaign shoots in Dubai?",
      answer: "Yes. We plan shoots with local production partners and handle permits, talent and location requirements as part of pre-production.",
    },
  ],
} satisfies LandingBase & Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 12. Dubai — Email marketing (Premium communication platform)        */
/* ------------------------------------------------------------------ */
export const dubaiEmail = {
  label: "Email Marketing in Dubai",
  metaTitle: "Email Marketing Agency in Dubai",
  metaDescription:
    "Email marketing for Dubai hotels, developers, retailers and advisory firms: bilingual newsletters, automation journeys and consent-first segmentation.",
  hero: {
    title: "Correspondence worthy of your brand.",
    lede: "For Dubai’s premium brands, every email is a brand moment. We design newsletters and automated journeys that feel personal, arrive in the right language and respect your audience’s inbox.",
  },
  audiences: [
    { name: "Guests", body: "Pre-arrival, in-stay and post-stay journeys for hotels and resorts." },
    { name: "Investors", body: "Project launches, construction updates and market notes for property buyers." },
    { name: "Members", body: "Loyalty, events and early access for retail and lifestyle brands." },
    { name: "Clients", body: "Insight newsletters and service updates for advisory and legal firms." },
  ],
  automation: [
    { step: "Enquiry", detail: "Bilingual confirmation within minutes" },
    { step: "Qualify", detail: "Preferences & language captured" },
    { step: "Nurture", detail: "Segmented content over weeks" },
    { step: "Convert", detail: "Personal invitation or offer" },
    { step: "Retain", detail: "Anniversary & loyalty moments" },
  ],
  newsletters: [
    { name: "The Community Letter", audience: "Property investors", cadence: "Monthly" },
    { name: "This Weekend", audience: "Hotel & dining guests", cadence: "Weekly" },
    { name: "Market Brief", audience: "Professional services clients", cadence: "Quarterly" },
  ],
  services: [
    { title: "Newsletter design", body: "Elegant, accessible templates in Arabic (RTL) and English." },
    { title: "Automation journeys", body: "Enquiry, onboarding, pre-arrival and loyalty flows." },
    { title: "Segmentation", body: "Language, nationality, interest and lifecycle-based audiences." },
    { title: "Data & consent", body: "Opt-in practices aligned with the UAE’s personal data protection law." },
  ],
  faqs: [
    {
      question: "Can you design emails in Arabic?",
      answer: "Yes. We build right-to-left templates that render correctly across major email clients, and pair them with English versions where needed.",
    },
    {
      question: "How do you handle data protection in the UAE?",
      answer:
        "We follow consent-first practices aligned with the UAE’s Federal Decree-Law No. 45 of 2021 on personal data protection, and recommend you confirm specifics with your legal adviser.",
    },
    {
      question: "Which platforms do you work with?",
      answer: "Commonly Mailchimp, Klaviyo, HubSpot, Salesforce Marketing Cloud and Brevo. Hotels often integrate with their PMS or CRM.",
    },
    {
      question: "How often should we send?",
      answer: "As often as you have something worth reading. For most premium brands, that means fewer, better emails supported by automated journeys.",
    },
  ],
} satisfies LandingBase & Record<string, unknown>;
