export const nav = {
  logo: "AXON",
  links: [
    { label: "Products", href: "#products" },
    { label: "Solutions", href: "#solutions" },
    { label: "Intelligence", href: "#intelligence" },
    { label: "Company", href: "#company" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Explore AXON",
};

export const hero = {
  eyebrow: "TECHNOLOGY & INTELLIGENCE HUB",
  headline: "We build the systems that move what's next.",
  body: "AXON creates intelligent products, digital infrastructure and AI-powered systems designed to turn complexity into momentum.",
  ctaPrimary: "Explore our products",
  ctaSecondary: "Build with AXON",
};

export const hub = {
  title: "One company. Multiple frontiers.",
  body: "AXON is built around a simple idea: the most valuable technology is not technology for its own sake. It is technology that understands, adapts and acts.",
  diagram: ["AXON", "INTELLIGENCE ENGINE", "Products · Systems · Agents · Data · Automation", "Real-world outcomes"],
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  metrics: { label: string; value: string }[];
};

export const productsIntro = {
  title: "Products built to think beyond the interface.",
  subtitle: "A growing ecosystem of intelligent products designed for real-world problems.",
};

export const products: Product[] = [
  {
    slug: "flow",
    name: "AXON Flow",
    category: "BUSINESS INTELLIGENCE / AUTOMATION",
    headline: "The intelligent commercial operating system for modern businesses.",
    description:
      "A CRM platform built around AI agents: lead management, automated follow-ups, funnel analysis, opportunity forecasting and WhatsApp automation, unified into a single commercial operating system.",
    metrics: [
      { label: "Weekly leads", value: "1,240" },
      { label: "Auto follow-ups", value: "86%" },
      { label: "Pipeline forecast", value: "+18%" },
    ],
  },
  {
    slug: "run",
    name: "AXON Run",
    category: "SPORTS / PERFORMANCE",
    headline: "Personalized training intelligence for runners who want to perform further.",
    description:
      "AXON Run reads training load, volume, intensity, recovery and injury history to build a training system that adapts with the athlete, not a static plan.",
    metrics: [
      { label: "Weekly load", value: "62 km" },
      { label: "Recovery", value: "88%" },
      { label: "Performance trend", value: "+6.4%" },
    ],
  },
  {
    slug: "scout",
    name: "AXON Scout",
    category: "FOOTBALL / PERFORMANCE INTELLIGENCE",
    headline: "Turning football data into competitive intelligence.",
    description:
      "Built for clubs, scouting and performance departments. AXON Scout processes match and training data to surface tactical patterns, space occupation, transitions and player comparisons.",
    metrics: [
      { label: "Matches analyzed", value: "412" },
      { label: "Tracked events", value: "58k" },
      { label: "Player profiles", value: "1,900+" },
    ],
  },
  {
    slug: "site",
    name: "AXON Site",
    category: "DIGITAL EXPERIENCE",
    headline: "Digital experiences engineered around the business.",
    description:
      "A platform for building websites, portals and interactive experiences shaped by AI-driven personalization instead of generic templates.",
    metrics: [
      { label: "Experiences shipped", value: "40+" },
      { label: "Avg. load time", value: "0.9s" },
      { label: "Personalization rules", value: "120+" },
    ],
  },
  {
    slug: "agent",
    name: "AXON Agent",
    category: "AI AGENTS",
    headline: "Autonomous systems for real business operations.",
    description:
      "Infrastructure for creating and operating specialized AI agents across sales, support, operations, research and backoffice work.",
    metrics: [
      { label: "Active agents", value: "24" },
      { label: "Tasks automated", value: "3,100/mo" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    slug: "insight",
    name: "AXON Insight",
    category: "DATA / DECISION INTELLIGENCE",
    headline: "Your data shouldn't just report the past.",
    description:
      "AXON Insight connects data from different sources and turns it into decisions: dashboards, anomaly detection, forecasts and natural-language questions.",
    metrics: [
      { label: "Data sources", value: "18" },
      { label: "Anomalies caught", value: "94%" },
      { label: "Reports automated", value: "230/mo" },
    ],
  },
  {
    slug: "ops",
    name: "AXON Ops",
    category: "OPERATIONS / AUTOMATION",
    headline: "Less operational friction. More human focus.",
    description:
      "Operational automation connecting CRM, ERP, WhatsApp, email, spreadsheets, APIs and AI agents to remove repetitive work from teams.",
    metrics: [
      { label: "Workflows live", value: "56" },
      { label: "Hours saved", value: "410/mo" },
      { label: "Systems connected", value: "12" },
    ],
  },
  {
    slug: "health",
    name: "AXON Health",
    category: "HEALTH / PERFORMANCE",
    headline: "Structured intelligence for health and performance professionals.",
    description:
      "A support tool for health and performance professionals to organize data, track evolution and generate reports — not a diagnostic or autonomous medical tool.",
    metrics: [
      { label: "Athletes tracked", value: "3,400+" },
      { label: "Reports generated", value: "1,100/mo" },
      { label: "Care teams", value: "60+" },
    ],
  },
];

export const customTech = {
  title: "When the product doesn't exist, we build it.",
  body: "Some problems cannot be solved with off-the-shelf software. AXON works with ambitious organizations to design, engineer and deploy intelligent systems built around their reality.",
  areas: [
    { title: "AI SYSTEMS", body: "Agents, copilots and intelligent automation." },
    { title: "BUSINESS SYSTEMS", body: "CRMs, platforms and internal systems." },
    { title: "DATA SYSTEMS", body: "Pipelines, dashboards and data intelligence." },
    { title: "DIGITAL PRODUCTS", body: "Digital products and tailored experiences." },
  ],
  cta: "Build something with AXON →",
};

export const howAxonThinks = {
  title: "We don't start with technology. We start with the problem.",
  steps: [
    { number: "01", title: "Understand", body: "Understand the problem, context and objective." },
    { number: "02", title: "Design", body: "Design the system, product or intelligence required." },
    { number: "03", title: "Build", body: "Build using software, data, automation and AI." },
    { number: "04", title: "Evolve", body: "Monitor, learn and improve continuously." },
  ],
};

export const intelligenceLayer = {
  title: "Intelligence is the layer connecting everything.",
  body: "AXON doesn't create isolated tools. It creates connected systems.",
  layers: ["DATA", "MODELS", "AGENTS", "AUTOMATION", "PRODUCTS", "PEOPLE", "OUTCOMES"],
};

export type ConceptualOrg = { name: string; sector: string };

export const trustedBy = {
  title: "Built for organizations that refuse to stand still.",
  eyebrow: "SELECTED CONCEPTUAL PARTNERSHIPS",
  note: "Illustrative, not real client engagements.",
  organizations: [
    { name: "NOVA", sector: "Technology" },
    { name: "VERTEX", sector: "Financial" },
    { name: "NORTH", sector: "Logistics" },
    { name: "ORBIT", sector: "Sports" },
    { name: "FURACÃO FC", sector: "Football" },
    { name: "LUMEN", sector: "Health" },
    { name: "MOTION", sector: "Commerce" },
    { name: "QUANTA", sector: "Manufacturing" },
    { name: "ECHO", sector: "Media" },
    { name: "CRUX", sector: "Energy" },
  ] satisfies ConceptualOrg[],
};

export type CaseStudy = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  resultsLabel: string;
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "commercial-intelligence",
    title: "Commercial Intelligence",
    problem: "A company with hundreds of leads and low commercial predictability.",
    solution: "AXON Flow + AI Agents + WhatsApp automation.",
    resultsLabel: "Illustrative results",
    results: ["+32% conversion", "-48% manual follow-up", "3.2x faster response"],
  },
  {
    id: "football-performance",
    title: "Football Performance",
    problem: "Large volumes of match data that are hard to turn into actionable information.",
    solution: "AXON Scout.",
    resultsLabel: "Illustrative results",
    results: ["3x faster reporting", "+21% tactical accuracy", "58k events tracked per season"],
  },
  {
    id: "athlete-intelligence",
    title: "Athlete Intelligence",
    problem: "Athletes need personalized training without relying only on spreadsheets.",
    solution: "AXON Run.",
    resultsLabel: "Illustrative results",
    results: ["+15% performance trend", "-30% injury risk signals missed", "100% training history unified"],
  },
];

export const future = {
  title: "The future won't be built by one technology.",
  subtitle: "It will be built by systems that connect them.",
  nodes: ["AI", "DATA", "SOFTWARE", "AUTOMATION", "SPORTS", "COMMERCE", "HEALTH", "FINANCE"],
  center: "AXON",
};

export const about = {
  title: "Building what comes next.",
  body: [
    "AXON was founded with a simple belief: technology should not only make things faster. It should make new things possible.",
    "We are building a technology company designed to operate at the intersection of software, artificial intelligence, automation and human ambition.",
  ],
  stats: [
    { value: "08+", label: "Products" },
    { value: "04", label: "Technology verticals" },
    { value: "30+", label: "Systems deployed" },
    { value: "12", label: "Markets explored" },
  ],
};

export const finalCta = {
  title: "Have a problem worth solving?",
  body: "Let's build the system that doesn't exist yet.",
  ctaPrimary: "Start a conversation →",
  ctaSecondary: "Explore AXON →",
};

export const footer = {
  logo: "AXON",
  tagline: "Technology & Intelligence Hub",
  links: nav.links,
  social: ["LinkedIn", "Instagram", "GitHub"],
  legal: "© 2026 AXON Technologies",
  concept: "Concept project / Portfolio",
};
