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
    "Adocial helps ambitious businesses in the USA, UK, Canada, Australia, and international markets generate qualified leads and scale revenue through strategic Meta & Google advertising.",
  keywords: [
    "Adocial",
    "Adocial.com",
    "Performance Advertising Agency",
    "Meta Ads Management",
    "Google Ads Management",
    "Paid Advertising Agency USA",
    "Facebook Ads UK Canada Australia",
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
      "Strategic, performance-focused advertising for ambitious businesses across the USA, UK, Canada, and Australia.",
    url: "https://adocial.com",
    siteName: "Adocial",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 300,
        height: 78,
        alt: "Adocial",
      },
    ],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}
