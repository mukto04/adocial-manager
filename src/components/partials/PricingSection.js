"use client";

import React from "react";

export default function PricingSection() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="wrap">
        {/* Section Header - Exactly matches "What we do" Services Header */}
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
            You add us as Manager to your Meta or Google Ads account. We prepare, launch, and optimize every campaign
            directly from your account based on your goals and budget.
          </p>
        </div>

        {/* 2-Column Luxury Pricing Grid - Built on the same service-card DNA */}
        <div className="pricing-grid">
          {/* Card 1: Fixed Monthly Retainer ($300/mo) */}
          <article className="pricing-card service-card depth-in">
            <span className="card-sheen" aria-hidden="true"></span>
            
            <div className="pricing-card-top">
              <span className="service-number">01 / FIXED MONTHLY</span>
              <span className="pricing-mini-badge">Fixed Rate</span>
            </div>

            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>

            <h3>Monthly Dedicated Ads Manager</h3>

            <div className="pricing-rate-lockup">
              <span className="pricing-rate-amount">$300</span>
              <span className="pricing-rate-period">/ month</span>
            </div>
            
            <p className="pricing-rate-desc">
              Hire us as your remote Ads Manager. You add us to your Meta or Google Ads account, and we build, launch,
              and optimize whatever campaigns you need directly from your account.
            </p>

            <div className="pricing-card-divider"></div>

            <ul className="pricing-service-list">
              <li>
                <span className="pricing-check">✓</span>
                <span><strong>Added as Manager:</strong> Invite us into your Meta (FB &amp; IG) or Google Ads Manager</span>
              </li>
              <li>
                <span className="pricing-check">✓</span>
                <span><strong>Any Campaign Type:</strong> Leads, E-commerce sales, WhatsApp chats, calls, or traffic</span>
              </li>
              <li>
                <span className="pricing-check">✓</span>
                <span><strong>Your Own Account:</strong> 100% of ad spend is billed to your card with zero agency markup</span>
              </li>
              <li>
                <span className="pricing-check">✓</span>
                <span><strong>Complete Execution:</strong> Audience targeting, ad copy, creative setup &amp; CAPI tracking</span>
              </li>
              <li>
                <span className="pricing-check">✓</span>
                <span><strong>Daily Optimization:</strong> Monitoring, budget adjustments &amp; pausing underperforming ads</span>
              </li>
              <li>
                <span className="pricing-check">✓</span>
                <span><strong>Weekly Reporting:</strong> Transparent updates and video audits via WhatsApp or Loom</span>
              </li>
              <li>
                <span className="pricing-check">✓</span>
                <span><strong>Rolling 30 Days:</strong> No long-term lock-in contracts. Cancel or pause anytime</span>
              </li>
            </ul>

            <div className="pricing-card-action">
              <a className="btn light pricing-btn" href="#contact">
                Hire dedicated manager ($300/mo) <span>↗</span>
              </a>
            </div>

            <div className="card-watermark"></div>
          </article>

          {/* Card 2: Part-Time / Performance Partner (10% - 15%) */}
          <article className="pricing-card service-card depth-in delay-1 popular-tier">
            <span className="card-sheen" aria-hidden="true"></span>

            <div className="pricing-card-top">
              <span className="service-number">02 / SPEND SHARE</span>
              <span className="pricing-mini-badge highlight">★ Recommended</span>
            </div>

            <div className="service-icon performance-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
                <path d="M16 7h6v6" />
              </svg>
            </div>

            <h3>Part-Time / Performance Partner</h3>

            <div className="pricing-rate-lockup">
              <span className="pricing-rate-amount highlight">10% – 15%</span>
              <span className="pricing-rate-period">/ total ad spend</span>
            </div>

            <p className="pricing-rate-desc">
              Flexible part-time management tied directly to your spend volume. You add us as Manager to your ad account,
              and we manage, test, and scale your campaigns for an aligned share of ad spend.
            </p>

            <div className="pricing-card-divider"></div>

            <ul className="pricing-service-list">
              <li>
                <span className="pricing-check highlight">✓</span>
                <span><strong>Flexible Spend Model:</strong> Pay only 10%–15% based on your actual monthly ad spend</span>
              </li>
              <li>
                <span className="pricing-check highlight">✓</span>
                <span><strong>Added as Manager:</strong> Full direct management inside your Meta or Google ad accounts</span>
              </li>
              <li>
                <span className="pricing-check highlight">✓</span>
                <span><strong>Your Own Account:</strong> Transparent ad spend billed directly to your payment method</span>
              </li>
              <li>
                <span className="pricing-check highlight">✓</span>
                <span><strong>Full Funnel Strategy:</strong> Top-of-funnel reach, retargeting pools &amp; Lookalike scaling</span>
              </li>
              <li>
                <span className="pricing-check highlight">✓</span>
                <span><strong>High-Velocity Testing:</strong> Continuous creative, hook &amp; ad angle experimentation</span>
              </li>
              <li>
                <span className="pricing-check highlight">✓</span>
                <span><strong>Daily Budget Pacing:</strong> Reallocating spend to winning ad sets to maximize ROAS</span>
              </li>
              <li>
                <span className="pricing-check highlight">✓</span>
                <span><strong>Priority Direct Access:</strong> Fast communication via WhatsApp or email</span>
              </li>
            </ul>

            <div className="pricing-card-action">
              <a className="btn primary pricing-btn" href="#contact">
                Start performance partnership <span>↗</span>
              </a>
            </div>

            <div className="card-watermark"></div>
          </article>
        </div>

        {/* Micro Trust Strip under pricing */}
        <div className="pricing-trust-strip reveal">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>100% Ad Account Ownership</span>
          </div>
          <div className="trust-sep">·</div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            <span>You Control Ad Budget on Your Card</span>
          </div>
          <div className="trust-sep">·</div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Rolling 30-Day Agreements</span>
          </div>
          <div className="trust-sep">·</div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Weekly Transparent Reports</span>
          </div>
        </div>
      </div>
    </section>
  );
}
