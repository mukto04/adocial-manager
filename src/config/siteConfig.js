/**
 * Adocial - Site Configuration
 * Centralized settings for brand details, contact options, and external links.
 */
export const siteConfig = {
  name: "Adocial",
  legalName: "Adocial Media Ltd.",
  domain: "adocial.com",
  url: "https://adocial.com",
  tagline: "Performance Advertising for Ambitious Businesses",
  description:
    "We help ambitious businesses reach the right audience, generate qualified leads, and make better decisions through strategic, performance-focused advertising.",
  
  // Configurable Contact Channels
  contact: {
    email: "hello@adocial.com",
    // Replace with your real WhatsApp number (including country code, e.g. 15551234567)
    whatsappNumber: "15551234567",
    whatsappLink: "https://wa.me/15551234567?text=Hi%20Adocial%2C%20I%20would%20like%20to%20discuss%20our%20ad%20campaigns.",
    // External scheduling link placeholder (e.g., Calendly / Cal.com)
    bookingUrl: "#booking",
    officeTimezones: "Global Coverage • All Timezones Supported",
  },

  // Service Areas
  services: [
    {
      id: "meta-ads",
      title: "Meta Ads Management",
      platform: "Facebook & Instagram",
      summary:
        "Full-funnel campaign planning, dynamic creative testing, high-intent audience segmentation, and algorithmic scaling across Meta's ecosystem.",
    },
    {
      id: "google-ads",
      title: "Google Ads Management",
      platform: "Search & Performance Max",
      summary:
        "High-intent search capture, negative keyword sculpting, Smart Bidding alignment, and commercial audience feeds engineered for lead acquisition.",
    },
    {
      id: "tracking-optimization",
      title: "Tracking & Optimization",
      platform: "CAPI & Attribution Intelligence",
      summary:
        "Server-side Conversion API deployment, multi-touch event verification, zero iOS data loss, and structured testing for data-informed budget decisions.",
    },
  ],

  // Navigation Links
  navLinks: [
    { name: "Services", href: "#services" },
    { name: "Our Approach", href: "#approach" },
    { name: "ROI Calculator", href: "#intelligence" },
    { name: "Proof", href: "#proof" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
};

