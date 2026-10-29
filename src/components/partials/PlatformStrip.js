"use client";

import React from "react";

const AD_PLATFORMS = [
  {
    id: "google",
    name: "Google Ads",
    spec: "Search & Performance Max",
    tag: "High Intent",
    color: "#4285F4",
    bg: "rgba(66, 133, 244, 0.08)",
    border: "rgba(66, 133, 244, 0.25)",
  },
  {
    id: "meta",
    name: "Meta Ads",
    spec: "Advantage+ & Scale",
    tag: "Volume & Scale",
    color: "#0866FF",
    bg: "rgba(8, 102, 255, 0.08)",
    border: "rgba(8, 102, 255, 0.25)",
  },
  {
    id: "instagram",
    name: "Instagram Ads",
    spec: "Reels & Visual Creative",
    tag: "Brand Velocity",
    color: "#E1306C",
    bg: "rgba(225, 48, 108, 0.08)",
    border: "rgba(225, 48, 108, 0.25)",
  },
  {
    id: "youtube",
    name: "YouTube Ads",
    spec: "Video Action Campaigns",
    tag: "High LTV",
    color: "#FF0000",
    bg: "rgba(255, 0, 0, 0.08)",
    border: "rgba(255, 0, 0, 0.25)",
  },
];

function PlatformIcon({ id }) {
  if (id === "google") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
      </svg>
    );
  }
  if (id === "meta") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#0866FF">
        <path d="M16.99 3.003c-2.453 0-4.492 1.488-5.02 2.378-.528-.89-2.567-2.378-5.02-2.378-3.79 0-6.95 3.037-6.95 6.786 0 4.606 4.07 9.157 10.96 11.168.66.192 1.36.192 2.02 0 6.89-2.01 10.96-6.562 10.96-11.168 0-3.749-3.16-6.786-6.95-6.786zm-5.02 12.87c-3.77-1.353-6.04-4.237-6.04-6.084 0-1.895 1.61-3.435 3.59-3.435 1.7 0 3.3 1.255 3.95 3.078.11.314.51.314.62 0 .65-1.823 2.25-3.078 3.95-3.078 1.98 0 3.59 1.54 3.59 3.435 0 1.847-2.27 4.731-6.04 6.084-.33.118-.7.118-1.03 0z"/>
      </svg>
    );
  }
  if (id === "instagram") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#E1306C">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    );
  }
  if (id === "youtube") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#FF0000">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    );
  }
  return null;
}

export default function PlatformStrip() {
  const allPlatforms = [...AD_PLATFORMS, ...AD_PLATFORMS, ...AD_PLATFORMS, ...AD_PLATFORMS];

  return (
    <section className="logo-strip">
      <div className="wrap">
        <div className="platform-head">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>Official Advertising Networks</span>
          </div>
          <p className="platform-kicker-desc">
            One cohesive, data-driven strategy across high-converting channels
          </p>
        </div>
      </div>

      {/* Infinite Marquee Track with edge gradient masks */}
      <div className="platform-marquee-wrap">
        <div className="platform-marquee-track">
          {allPlatforms.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="platform-card"
              style={{
                "--card-accent": item.color,
                "--card-bg": item.bg,
                "--card-border": item.border,
              }}
            >
              <div
                className="platform-card-icon"
                style={{ background: item.bg, borderColor: item.border }}
              >
                <PlatformIcon id={item.id} />
              </div>
              <div className="platform-card-info">
                <span className="platform-card-title">{item.name}</span>
                <span className="platform-card-spec">{item.spec}</span>
              </div>
              <span className="platform-card-tag">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Micro Trust Indicators */}
      <div className="wrap">
        <div className="platform-metrics-row">
          <div className="platform-metric-item">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Server-Side CAPI & 1st-Party Signal</span>
          </div>
          <div className="platform-metric-item">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Certified Meta & Google Media Buyers</span>
          </div>
          <div className="platform-metric-item">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v10a2 2 0 002 2h10a1 1 0 100-2H5V5h10a1 1 0 100-2H3zm9 6a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-4 4a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <span>Multi-Touch Attribution & Deduplication</span>
          </div>
        </div>
      </div>
    </section>
  );
}

