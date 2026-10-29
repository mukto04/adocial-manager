"use client";

import React, { useState, useEffect, useRef } from "react";

const PLATFORMS = [
  {
    id: "instagram",
    name: "Instagram",
    tag: "Reels & Story Ad",
    badge: "ROAS 4.8X",
    color: "#E1306C",
  },
  {
    id: "google",
    name: "Google",
    tag: "Search & PMax Ad",
    badge: "92% Intent",
    color: "#4285F4",
  },
  {
    id: "facebook",
    name: "Facebook",
    tag: "Feed & Video Ad",
    badge: "CAPI Match",
    color: "#1877F2",
  },
];

export default function HeroAdPortal({ videoSrc, gifSrc }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const timerRef = useRef(null);

  // Auto-cycle through platforms every 4.5 seconds
  useEffect(() => {
    if (isPaused || videoSrc || gifSrc) return;

    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % PLATFORMS.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, videoSrc, gifSrc]);

  return (
    <div
      className="hero-ad-portal"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Live Advertising Simulation Portal"
    >
      {/* Outer ambient glow behind the portal */}
      <div className="portal-glow" aria-hidden="true"></div>

      {/* Circular Screen Viewport (Zero fog/glare overlays for 100% crystal-clear visibility) */}
      <div className="portal-circle">
        {/* If user provided an active video/gif and no error */}
        {videoSrc && !videoError ? (
          <div className="portal-custom-media">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoError(true)}
              className="portal-video"
            />
            <div className="portal-media-badge">LIVE AD MEDIA</div>
          </div>
        ) : gifSrc ? (
          <div className="portal-custom-media">
            <img src={gifSrc} alt="Live Ad Showcase" className="portal-gif" />
            <div className="portal-media-badge">LIVE AD MEDIA</div>
          </div>
        ) : (
          /* Live Interactive Ad Simulation */
          <div className="portal-ad-stage">
            {/* ─── 1. INSTAGRAM REELS AD ─── */}
            <div
              className={`portal-screen screen-instagram ${
                activeTab === 0 ? "active" : ""
              }`}
            >
              {/* Story/Reel Top Status */}
              <div className="ig-header">
                <div className="ig-brand">
                  <div className="ig-avatar-ring">
                    <div className="ig-avatar">A</div>
                  </div>
                  <div className="ig-meta">
                    <span className="ig-name">adocial.growth</span>
                    <span className="ig-sponsored">Sponsored</span>
                  </div>
                </div>
                <div className="ig-equalizer" aria-label="Audio playing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              {/* Reel Visual Content */}
              <div className="ig-creative">
                <div className="ig-product-card">
                  <span className="ig-trend-badge">🔥 TOP AD ANGLE</span>
                  <h4>Scale E-Com to 7-Figures</h4>
                  <p>Tested UGC & motion hooks deployed weekly.</p>
                  <div className="ig-stat-pill">
                    <span className="ig-stat-val">4.8x</span>
                    <span className="ig-stat-lbl">Target ROAS</span>
                  </div>
                </div>

                {/* Floating Heart / Reactions */}
                <div className="ig-floating-hearts" aria-hidden="true">
                  <span className="heart h1">❤️</span>
                  <span className="heart h2">🔥</span>
                </div>
              </div>

              {/* Instagram Bottom Action */}
              <div className="ig-footer">
                <div className="ig-cta-btn">
                  <span>Shop Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
                <div className="ig-live-metrics">
                  <span className="metric-dot"></span>
                  <span>Meta CAPI 100% Match</span>
                </div>
              </div>
            </div>

            {/* ─── 2. GOOGLE SEARCH & PMAX AD ─── */}
            <div
              className={`portal-screen screen-google ${
                activeTab === 1 ? "active" : ""
              }`}
            >
              {/* Google Search Bar Mock */}
              <div className="g-search-bar">
                <svg className="g-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <span className="g-search-query">performance ad agency...</span>
                <span className="g-mic-dot"></span>
              </div>

              {/* Google Sponsored Card */}
              <div className="g-ad-card">
                <div className="g-ad-tag">
                  <span className="g-sponsor-pill">Sponsored</span>
                  <span className="g-url">adocial.com</span>
                </div>
                <h3 className="g-headline">
                  Adocial™ — Turn Ad Spend Into Revenue
                </h3>
                <p className="g-snippet">
                  Stop wasting ad budget. 1st-party signal verification & ROAS-driven scaling.
                </p>

                {/* Sitelinks Grid */}
                <div className="g-sitelinks">
                  <span className="g-link">• Free Strategy Audit</span>
                  <span className="g-link">• Case Studies</span>
                </div>
              </div>

              {/* Google Bottom Metric */}
              <div className="g-footer-pill">
                <span className="g-dot"></span>
                <span>High-Intent Capture · 92% Match</span>
              </div>
            </div>

            {/* ─── 3. FACEBOOK FEED & VIDEO AD ─── */}
            <div
              className={`portal-screen screen-facebook ${
                activeTab === 2 ? "active" : ""
              }`}
            >
              {/* FB Header */}
              <div className="fb-header">
                <div className="fb-avatar">A</div>
                <div className="fb-meta">
                  <div className="fb-name-row">
                    <span className="fb-name">Adocial Agency</span>
                    <span className="fb-badge">✓</span>
                  </div>
                  <span className="fb-sub">Sponsored · 🌐</span>
                </div>
              </div>

              {/* FB Video Creative Frame */}
              <div className="fb-video-box">
                <div className="fb-play-overlay">
                  <div className="fb-play-icon">▶</div>
                  <span className="fb-live-label">LIVE AD VIDEO</span>
                </div>
                {/* Audio wave simulation */}
                <div className="fb-wave-row" aria-hidden="true">
                  <span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span>
                </div>
                <div className="fb-time-pill">0:18 / 0:45</div>
              </div>

              {/* FB Bottom CTA Strip */}
              <div className="fb-cta-strip">
                <div className="fb-cta-text">
                  <span className="fb-domain">ADOCIAL.COM</span>
                  <span className="fb-cta-title">Scale with Intention</span>
                </div>
                <div className="fb-action-btn">Learn More</div>
              </div>
            </div>
          </div>
        )}

        {/* Compact Interactive Platform Switcher */}
        <div className="portal-controls" aria-label="Switch advertising platform">
          {PLATFORMS.map((platform, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={platform.id}
                type="button"
                className={`portal-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveTab(idx)}
                aria-pressed={isActive}
              >
                <span
                  className="portal-btn-indicator"
                  style={{
                    backgroundColor: isActive ? platform.color : "rgba(255,255,255,0.4)",
                  }}
                ></span>
                <span className="portal-btn-text">{platform.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
