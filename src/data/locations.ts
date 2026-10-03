export const SITE_URL = "https://gulf.momsonteaching.com";

export const boards = [
  "CBSE",
  "ICSE",
  "IGCSE",
  "Kerala Board",
] as const;

export const locations = [
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    currency: "AED",
    timeZone: "Gulf Standard Time (GST, UTC+4)",
  },
  {
    slug: "doha",
    name: "Doha",
    country: "Qatar",
    currency: "QAR",
    timeZone: "Arabia Standard Time (AST, UTC+3)",
  },
  {
    slug: "kuwait-city",
    name: "Kuwait City",
    country: "Kuwait",
    currency: "KWD",
    timeZone: "Arabia Standard Time (AST, UTC+3)",
  },
  {
    slug: "manama",
    name: "Manama",
    country: "Bahrain",
    currency: "BHD",
    timeZone: "Arabia Standard Time (AST, UTC+3)",
  },
  {
    slug: "riyadh",
    name: "Riyadh",
    country: "Saudi Arabia",
    currency: "SAR",
    timeZone: "Arabia Standard Time (AST, UTC+3)",
  },
  {
    slug: "muscat",
    name: "Muscat",
    country: "Oman",
    currency: "OMR",
    timeZone: "Gulf Standard Time (GST, UTC+4)",
  },
  {
    slug: "oman",
    name: "Oman",
    country: "Oman",
    currency: "OMR",
    timeZone: "Gulf Standard Time (GST, UTC+4)",
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    country: "Bahrain",
    currency: "BHD",
    timeZone: "Arabia Standard Time (AST, UTC+3)",
  },
] as const;

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}