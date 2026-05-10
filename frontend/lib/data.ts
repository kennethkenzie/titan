// Static fallback content used when the Laravel API is unavailable.
// Keeps the marketing site cinematic during local development.

export const SERVICES = [
  { id: 1, title: "Corporate Identity & Branding", slug: "corporate-identity", description: "Logo systems, visual identity, brand guidelines and naming for ambitious organisations.", icon: "Hexagon" },
  { id: 2, title: "Creative Marketing", slug: "creative-marketing", description: "Campaign strategy, social, radio, TV, online and PR — accredited media agency support.", icon: "Megaphone" },
  { id: 3, title: "Pixel-Perfect Printing", slug: "printing", description: "Offset, digital, large-format, packaging, textile and specialty finishing for every product.", icon: "Printer" },
  { id: 4, title: "Web & Digital Solutions", slug: "web-solutions", description: "Websites, web apps, UI/UX, and online content built on modern, performant stacks.", icon: "Layers" },
  { id: 5, title: "Events & Activations", slug: "events", description: "Corporate events, conferences, activations and event branding from concept to delivery.", icon: "CalendarHeart" },
  { id: 6, title: "Audio/Visual & Motion", slug: "motion", description: "Documentary, explainer videos, infomercials, animated logos and motion graphics.", icon: "Film" },
];

export const PROJECTS = [
  { id: 1, title: "Helios Capital", slug: "helios-capital", category: "Finance", client: "Helios", year: 2025, description: "Identity + platform for a quantitative hedge fund.", image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?w=1600" },
  { id: 2, title: "Northwind Aero", slug: "northwind-aero", category: "Aerospace", client: "Northwind", year: 2024, description: "Cinematic launch site for next-gen propulsion systems.", image: "https://images.unsplash.com/photo-1518365050014-70fe7232897f?w=1600" },
  { id: 3, title: "Obsidian OS", slug: "obsidian-os", category: "SaaS", client: "Obsidian Labs", year: 2025, description: "Operating system identity and product surface.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600" },
  { id: 4, title: "Vantage Motors", slug: "vantage-motors", category: "Automotive", client: "Vantage", year: 2024, description: "Luxury EV brand world and configurator.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600" },
  { id: 5, title: "Atlas Robotics", slug: "atlas-robotics", category: "Hardware", client: "Atlas", year: 2025, description: "Industrial robotics brand with motion-led storytelling.", image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=1600" },
  { id: 6, title: "Lumen Studio", slug: "lumen-studio", category: "Media", client: "Lumen", year: 2024, description: "Editorial platform for a premium media network.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600" },
];

export const CASE_STUDIES = [
  { id: 1, title: "Scaling Helios from 0 to $1B AUM", slug: "helios-capital", summary: "How identity, platform, and narrative compounded into a market-defining fund.", image: "https://images.unsplash.com/photo-1642784353782-b6e5c2d57e0a?w=1600", challenge: "Differentiate in a crowded quant market.", solution: "A monolithic visual system, motion-first marketing, and a custom investor portal.", results: "$1B AUM in 14 months, 4.8M site sessions, 9x lead conversion." },
  { id: 2, title: "Launching Northwind to the world", slug: "northwind-aero", summary: "A cinematic reveal that captured aerospace media and investors.", image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1600", challenge: "Translate complex propulsion tech into emotional storytelling.", solution: "Editorial site with WebGL, narrative motion, and live telemetry.", results: "12M impressions in 30 days, $80M Series B oversubscribed." },
  { id: 3, title: "Obsidian OS — building a category", slug: "obsidian-os", summary: "From stealth to category-defining product launch.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600", challenge: "Define an emerging category for technical buyers.", solution: "Brand system, docs platform, and developer-grade marketing surface.", results: "200k waitlist, top of HN for 7 days, 6x enterprise pipeline." },
];

export const BLOGS = [
  { id: 1, title: "The new rules of premium brand systems", slug: "premium-brand-systems", excerpt: "Why the next decade of branding is engineered, not designed.", content: "...", image: "https://images.unsplash.com/photo-1551503766-ac63dfa6401c?w=1600", author: "Mara Voss" },
  { id: 2, title: "Motion as a product surface", slug: "motion-product-surface", excerpt: "Treating animation as core UX, not decoration.", content: "...", image: "https://images.unsplash.com/photo-1492551557933-34265f7af79e?w=1600", author: "Kenji Aoyama" },
  { id: 3, title: "Engineering cinematic web at scale", slug: "cinematic-web-scale", excerpt: "Performance, motion, and storytelling without compromise.", content: "...", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600", author: "Lior Bennet" },
];

export const TESTIMONIALS = [
  { id: 1, quote: "Smari Creatives didn't just rebrand us — they re-engineered how the market perceives our category.", name: "Eva Marin", role: "CMO, Helios Capital" },
  { id: 2, quote: "The most cinematic launch we've ever shipped. Our investors couldn't stop talking about it.", name: "Daniel Cho", role: "CEO, Northwind Aero" },
  { id: 3, quote: "Their motion language became a core part of our product. Customers feel the difference.", name: "Priya Raman", role: "Head of Product, Obsidian Labs" },
  { id: 4, quote: "Elite team. Aggressive timelines. Unmatched craft.", name: "Marco Aliberti", role: "Founder, Vantage Motors" },
];

export const STATS = [
  { value: 142, suffix: "+", label: "Brands engineered" },
  { value: 38, suffix: "", label: "Awards & honors" },
  { value: 9, suffix: "x", label: "Avg. growth multiple" },
  { value: 24, suffix: "M", label: "Sessions delivered" },
];

export const CLIENTS = [
  "HELIOS","NORTHWIND","OBSIDIAN","VANTAGE","ATLAS","LUMEN","ARC","MERIDIAN","CIPHER","NOVA","OREN","PHASE",
];

export const TEAM = [
  { name: "Mara Voss", role: "Founder & Creative Director", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800" },
  { name: "Kenji Aoyama", role: "Head of Motion", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
  { name: "Lior Bennet", role: "Engineering Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800" },
  { name: "Priya Raman", role: "Strategy Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800" },
  { name: "Marco Aliberti", role: "Brand Director", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800" },
  { name: "Eva Marin", role: "Production Lead", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800" },
];

export const OFFICE_PHOTOS = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400",
];

export const JOURNEY = [
  { step: "01", title: "Discovery", description: "Deep audits, stakeholder interviews, and market mapping." },
  { step: "02", title: "Strategy", description: "Positioning, narrative, and roadmap engineered for compounding impact." },
  { step: "03", title: "Design", description: "Cinematic identity systems, motion language, and product surfaces." },
  { step: "04", title: "Engineering", description: "Production-grade builds shipped on aggressive timelines." },
  { step: "05", title: "Launch", description: "Coordinated reveal — press, motion, and conversion infrastructure." },
  { step: "06", title: "Scale", description: "Ongoing partnership: iteration, optimization, and expansion." },
];

export const BRAND_PILLARS = [
  { title: "Foundation", description: "Purpose, positioning, and the core narrative thesis.", items: ["Vision", "Mission", "Values", "Tone"] },
  { title: "Identity", description: "Visual and verbal expression — the brand's signature.", items: ["Wordmark", "Typography", "Color", "Voice"] },
  { title: "Experience", description: "Every surface a customer touches — engineered.", items: ["Web", "Product", "Motion", "Spatial"] },
  { title: "Growth", description: "Compounding systems for sustained brand momentum.", items: ["Campaigns", "Content", "Partnerships", "Measurement"] },
];

export const CERTIFICATIONS = [
  { name: "ISO 27001", category: "Security" },
  { name: "SOC 2 Type II", category: "Compliance" },
  { name: "Awwwards SOTD x14", category: "Recognition" },
  { name: "FWA x9", category: "Recognition" },
  { name: "Webby Winner", category: "Recognition" },
  { name: "Google Partner", category: "Platform" },
  { name: "Vercel Premier", category: "Platform" },
  { name: "AWS Advanced", category: "Platform" },
];

export const CAPACITY = [
  { label: "Concurrent engagements", value: 12, suffix: "" },
  { label: "Specialists on staff", value: 48, suffix: "" },
  { label: "Avg. project velocity", value: 6, suffix: " wks" },
  { label: "Studio uptime", value: 99, suffix: ".9%" },
];

export const PRESS = [
  "FAST COMPANY","WIRED","TECHCRUNCH","FORBES","BLOOMBERG","THE VERGE","DEZEEN","IT'S NICE THAT",
];

export const SOCIAL_METRICS = [
  { value: "2.4M", label: "Annual impressions" },
  { value: "98%", label: "Client retention" },
  { value: "4.9/5", label: "Avg. partner rating" },
  { value: "62", label: "Industries served" },
];
