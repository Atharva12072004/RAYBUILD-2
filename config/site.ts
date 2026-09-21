export const siteConfig = {
  name: "RAYBUILD GROUP",
  legalName: "Raybuild Multi-Sector Enterprises",
  phone: process.env.NEXT_PUBLIC_PRIMARY_PHONE || "+91 XXXXXXXXXX",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX",
  email: process.env.NEXT_PUBLIC_PRIMARY_EMAIL || "[PRIMARY EMAIL]",
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "[COMPANY ADDRESS]",
  solarUrl: process.env.NEXT_PUBLIC_SOLAR_URL || "/solar",
  constructionUrl: process.env.NEXT_PUBLIC_CONSTRUCTION_URL || "/construction",
  social: {
    instagram: "[INSTAGRAM URL]",
    facebook: "[FACEBOOK URL]",
    youtube: "[YOUTUBE URL]",
    linkedin: "[LINKEDIN URL]",
    x: "[X/TWITTER URL]"
  }
} as const;

export const divisions = {
  solar: { key: "solar", name: "Raybuild Solar", href: "/solar" },
  construction: { key: "construction", name: "Raybuild Construction", href: "/construction" }
} as const;
