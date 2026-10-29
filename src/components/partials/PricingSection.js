"use client";

import React from "react";

export default function PricingSection() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head reveal">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>Transparent Pricing</span>
          </div>
          <h2>
            Predictable investment.
            <br />
            <span className="text-gradient">Engineered for real ROI.</span>
          </h2>
          <p>
            Choose the collaboration model that fits your stage of business. No hidden agency fees,
            no 12-month handcuffs, and zero vanity metrics.
          </p>
        </div>

        {/* 2-Column Luxury Pricing Cards */}
        <div className="pricing-grid">
          {/* Plan 1: Fixed Monthly Retainer ($300/mo) */}
          <article className="pricing-card light-plan depth-in">
            <div className="pricing-card-header">
              <div className="plan-badge-pill">
                <span>FIXED MONTHLY RETAINER</span>
              </div>
              <h3 className="plan-name">Monthly Growth Management</h3>
              <p className="plan-desc">
                Ideal for ambitious businesses looking for structured, hands-on campaign execution with
                a predictable monthly cost.
              </p>

              <div className="price-box">
                <span className="price-currency">$</span>
                <span className="price-amount">300</span>
                <span className="price-period">/ month</span>
              </div>
              <span className="price-subtext">Flat retainer · Zero hidden surprises</span>
            </div>

            <div className="pricing-divider"></div>

            <div className="pricing-features">
              <h4 className="features-title">WHAT’S INCLUDED:</h4>
              <ul className="features-list">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Full Meta Ads Management:</strong> Facebook & Instagram Advantage+ setup and scaling.
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Google Search & PMax:</strong> Intent-focused search campaigns and keyword bidding.
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Server-Side CAPI Tracking:</strong> 100% signal verification & deduplication.
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Weekly Loom Video Briefs:</strong> Honest, zero-jargon metric walkthroughs.
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>7-Day Creative Sprints:</strong> Fresh hooks, ad angles, and visual tests deployed weekly.
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Direct Media Buyer Access:</strong> Direct communication via WhatsApp & email.
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>100% Root Ownership:</strong> You retain full root access to all pixels, assets, and accounts.
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Zero Lock-in Contract:</strong> Rolling 30-day trust agreements. Pause or cancel anytime.
                  </div>
                </li>
              </ul>
            </div>

            <div className="pricing-card-footer">
              <a href="#contact" className="btn light pricing-cta-btn">
                Get started monthly <span>↗</span>
              </a>
              <span className="guarantee-note">Quick 3-day onboarding · No setup fee</span>
            </div>
          </article>

          {/* Plan 2: Performance Growth Partner (10% - 15%) */}
          <article className="pricing-card featured-plan depth-in delay-1">
            <div className="plan-aurora-glow" aria-hidden="true"></div>
            <div className="popular-ribbon">
              <span className="popular-star">★</span>
              <span>SCALING PARTNERSHIP</span>
            </div>

            <div className="pricing-card-header">
              <div className="plan-badge-pill highlight">
                <span className="live-pulse-dot"></span>
                <span>PERFORMANCE / SPEND SHARE</span>
              </div>
              <h3 className="plan-name">Performance Scale Partner</h3>
              <p className="plan-desc">
                Ideal for established e-commerce brands and scaling companies who want aggressive growth with aligned incentives.
              </p>

              <div className="price-box">
                <span className="price-amount gradient-text">10% – 15%</span>
                <span className="price-period">/ total ad spend</span>
              </div>
              <span className="price-subtext">Tied directly to your volume and profitability</span>
            </div>

            <div className="pricing-divider"></div>

            <div className="pricing-features">
              <h4 className="features-title">EVERYTHING IN MONTHLY, PLUS:</h4>
              <ul className="features-list">
                <li>
                  <span className="check-icon highlight">✓</span>
                  <div>
                    <strong>Senior Media Buyer & Strategist:</strong> Dedicated veteran media buyer for your brand.
                  </div>
                </li>
                <li>
                  <span className="check-icon highlight">✓</span>
                  <div>
                    <strong>Daily Bid & Budget Pacing:</strong> Real-time budget reallocation to highest-performing ad sets.
                  </div>
                </li>
                <li>
                  <span className="check-icon highlight">✓</span>
                  <div>
                    <strong>Unlimited Spend Scaling:</strong> Smooth scaling without tiered agency management penalty fees.
                  </div>
                </li>
                <li>
                  <span className="check-icon highlight">✓</span>
                  <div>
                    <strong>High-Velocity Creative Pipeline:</strong> UGC script briefs, video iterations, and motion ads.
                  </div>
                </li>
                <li>
                  <span className="check-icon highlight">✓</span>
                  <div>
                    <strong>Landing Page & CRO Audits:</strong> Conversion rate reviews to maximize ROAS on post-click traffic.
                  </div>
                </li>
                <li>
                  <span className="check-icon highlight">✓</span>
                  <div>
                    <strong>Multi-Touch Attribution:</strong> GA4 & first-party attribution modeling for accurate CAC.
                  </div>
                </li>
                <li>
                  <span className="check-icon highlight">✓</span>
                  <div>
                    <strong>Priority VIP Channel:</strong> Dedicated private Slack/WhatsApp channel with sub-2hr response.
                  </div>
                </li>
                <li>
                  <span className="check-icon highlight">✓</span>
                  <div>
                    <strong>Skin-in-the-Game Alignment:</strong> Our agency revenue grows only when your ad spend scales profitably.
                  </div>
                </li>
              </ul>
            </div>

            <div className="pricing-card-footer">
              <a href="#contact" className="btn primary pricing-cta-btn highlight">
                Apply for performance partnership <span>↗</span>
              </a>
              <span className="guarantee-note">Accepting 2 partners this month · Qualification call required</span>
            </div>
          </article>
        </div>

        {/* Micro Trust Strip under pricing */}
        <div className="pricing-trust-strip reveal">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>100% Ad Account Ownership</span>
          </div>
          <div className="trust-sep">·</div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Rolling 30-Day Agreements</span>
          </div>
          <div className="trust-sep">·</div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Zero Long-Term Lock-in</span>
          </div>
          <div className="trust-sep">·</div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Weekly Video Audits</span>
          </div>
        </div>
      </div>
    </section>
  );
}

