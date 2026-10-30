"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Cpu } from "lucide-react";

const AD_PLATFORMS = [
  {
    id: "meta",
    name: "Meta Ads",
    spec: "Advantage+ & CAPI",
    tag: "Volume Scale",
    color: "#0866FF",
    bg: "rgba(8, 102, 255, 0.08)",
    border: "rgba(8, 102, 255, 0.25)",
  },
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
    id: "instagram",
    name: "Instagram Ads",
    spec: "Reels & UGC Sprints",
    tag: "Creative Scale",
    color: "#E1306C",
    bg: "rgba(225, 48, 108, 0.08)",
    border: "rgba(225, 48, 108, 0.25)",
  },
  {
    id: "youtube",
    name: "YouTube Ads",
    spec: "Demand Gen & Video",
    tag: "High LTV",
    color: "#FF0000",
    bg: "rgba(255, 0, 0, 0.08)",
    border: "rgba(255, 0, 0, 0.25)",
  },
  {
    id: "tiktok",
    name: "TikTok Ads",
    spec: "Spark & Catalog Feeds",
    tag: "Rapid Testing",
    color: "#000000",
    bg: "rgba(0, 0, 0, 0.06)",
    border: "rgba(0, 0, 0, 0.2)",
  },
  {
    id: "cloudflare",
    name: "Cloudflare CAPI",
    spec: "Server-Side Token Router",
    tag: "Zero iOS Loss",
    color: "#F38020",
    bg: "rgba(243, 128, 32, 0.08)",
    border: "rgba(243, 128, 32, 0.25)",
  },
  {
    id: "shopify",
    name: "Shopify / CRM",
    spec: "Offline Event Sync",
    tag: "100% Signal Match",
    color: "#96bf48",
    bg: "rgba(150, 191, 72, 0.08)",
    border: "rgba(150, 191, 72, 0.25)",
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
  if (id === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .594.045.88.13V9.4a6.33 6.33 0 0 0-.88-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48c.03-.03.06-.06.08-.09V10.2a8.27 8.27 0 0 0 5.69 2.25v-3.45a4.83 4.83 0 0 1 0-2.31z"/>
      </svg>
    );
  }
  if (id === "cloudflare") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#F38020">
        <path d="M18.3 12.3c-.3-1.6-1.7-2.8-3.4-2.8-.7 0-1.4.2-2 .6-.6-1.5-2.1-2.5-3.8-2.5-2.2 0-4 1.7-4.1 3.9C3.2 12 2 13.5 2 15.3c0 2 1.7 3.7 3.7 3.7h12.5c1.9 0 3.5-1.5 3.5-3.4 0-1.6-1.2-3-2.9-3.3h-.5z"/>
      </svg>
    );
  }
  if (id === "shopify") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#96bf48">
        <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm-1 15.93c-3.95-1.16-6.8-5.06-6.98-9.5L11 6.04v11.89zm2 0V6.04l6.98 2.39c-.18 4.44-3.03 8.34-6.98 9.5z"/>
      </svg>
    );
  }
  return null;
}

export default function PlatformStrip() {
  const allPlatforms = [...AD_PLATFORMS, ...AD_PLATFORMS, ...AD_PLATFORMS];

  return (
    <section className="py-14 bg-white border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 mb-8 text-center scroll-reveal">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-wider">Synchronized Advertising Infrastructure</span>
        </div>
        <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
          Full-Funnel Native Integration Across High-Converting Ad Networks
        </h3>
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
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 mt-8 pt-6 border-t border-slate-100">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Server-Side CAPI &amp; 1st-Party Signal Routing</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Meta Certified &amp; Google Premier Media Buyers</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>Multi-Touch Attribution &amp; Zero Double-Counting</span>
          </div>
        </div>
      </div>
    </section>
  );
}
