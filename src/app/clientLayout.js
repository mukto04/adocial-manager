"use client";

import { Toaster } from "react-hot-toast";

export default function ClientLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#f8faff" />
        <link rel="icon" type="image/png" href="/images/logo/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/images/logo/favicon.png" />
        <link rel="apple-touch-icon" href="/images/logo/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=cabinet-grotesk@700,800&f[]=satoshi@500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#111827",
              color: "#ffffff",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: "600",
              padding: "12px 24px",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            },
          }}
        />
      </body>
    </html>
  );
}
