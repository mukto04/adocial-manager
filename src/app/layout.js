// Style Sheets
import "@/styles/css/globals.css";
import "@/styles/sass/main.scss";

// Client Layout
import ClientLayout from "@/app/clientLayout";

// Metadata
export const metadata = {
  title: {
    template: "%s | Adocial — Performance Advertising Agency",
    default: "Adocial — Turn Ad Spend Into Smarter Growth",
  },
  description:
    "Adocial helps ambitious businesses worldwide generate qualified leads and scale revenue through strategic, performance-focused Meta & Google advertising.",
  keywords: [
    "Adocial",
    "Adocial.com",
    "Performance Advertising Agency",
    "Meta Ads Management",
    "Google Ads Management",
    "Global Paid Advertising Agency",
    "Worldwide Facebook Ads",
    "Conversion Rate Optimization",
    "Server-Side CAPI",
  ],
  authors: [{ name: "Adocial" }],
  metadataBase: new URL("https://adocial.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adocial — Turn Ad Spend Into Smarter Growth",
    description:
      "Strategic, performance-focused advertising engineered to scale ambitious businesses worldwide.",
    url: "https://adocial.com",
    siteName: "Adocial",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 300,
        height: 78,
        alt: "Adocial",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/images/logo/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/images/logo/favicon.png",
    apple: "/images/logo/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}
