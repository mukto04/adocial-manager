"use client";

import { Toaster } from "react-hot-toast";

export default function ClientLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased bg-white text-charcoal selection:bg-cobalt-600 selection:text-white"
        style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" }}
      >
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#0f172a",
              color: "#ffffff",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: "500",
              padding: "10px 22px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 35px -10px rgba(0,0,0,0.3)",
            },
          }}
        />
      </body>
    </html>
  );
}
