"use client";

import React, { useState } from "react";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Audit & Discover",
    deliverable: "Deliverable: Account & Competitor Audit",
    desc: "We analyze your past spend, pixel health, CAC benchmarks, and creative history to pinpoint exactly where budget is being wasted and where immediate scale potential lies.",
    coreLabel: "SYSTEM AUDIT",
  },
  {
    num: "02",
    title: "Strategy & Architecture",
    deliverable: "Deliverable: Multi-Platform Growth Map",
    desc: "We engineer full-funnel campaign structures across Meta & Google, configuring audience exclusions, custom offer angles, and testing budgets tailored to your unit economics.",
    coreLabel: "GROWTH MAP",
  },
  {
    num: "03",
    title: "Launch & Signal Verification",
    deliverable: "Deliverable: Server-Side CAPI + Live Ads",
    desc: "All campaigns launch with first-party CAPI server tracking verified for 100% signal accuracy. We deploy high-converting creative angles and capture algorithmic data.",
    coreLabel: "SIGNAL SYNC",
  },
  {
    num: "04",
    title: "Scale, Optimize & Report",
    deliverable: "Deliverable: Weekly Loom & Budget Scaling",
    desc: "We cut unprofitable ad sets fast, double down on winning hooks, and provide weekly Loom video walkthroughs with transparent, zero-jargon metrics.",
    coreLabel: "SCALE ENGINE",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section process process-light-theme" id="approach">
      <div className="wrap process-layout">
        {/* Left Column: Rich Value Proposition & Pillars */}
        <div className="process-left-content reveal-left">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>The Adocial Operating System</span>
          </div>

          <h2 className="process-heading">
            Thoughtful work.
            <br />
            <span className="process-heading-gradient">Engineered step by step.</span>
          </h2>

          <p className="process-lead-p">
            You’ll always know what we’re testing, why it matters, and where every dollar goes. No
            vanity metrics, no mystery spreadsheets, and zero black-box secrecy.
          </p>

          {/* 4 Value Commitment Pillars */}
          <div className="process-pillars-grid">
            <div className="process-pillar-card">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3468f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="pillar-text">
                <h4>100% Account Ownership</h4>
                <p>You retain full root access to your ad accounts, pixels, and creative assets at all times.</p>
              </div>
            </div>

            <div className="process-pillar-card">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3468f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <div className="pillar-text">
                <h4>Weekly Loom Video Briefs</h4>
                <p>Every week, your media buyer records an honest video walkthrough of metrics and next tests.</p>
              </div>
            </div>

            <div className="process-pillar-card">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3468f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div className="pillar-text">
                <h4>7-Day Creative Sprints</h4>
                <p>Continuous creative iteration with fresh angles, hooks, and formats deployed every 7 days.</p>
              </div>
            </div>

            <div className="process-pillar-card">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3468f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                </svg>
              </div>
              <div className="pillar-text">
                <h4>Zero Long-Term Lock-in</h4>
                <p>No 12-month handcuffs. We operate on rolling 30-day agreements and earn your trust each month.</p>
              </div>
            </div>
          </div>

          {/* Action Row & Client Capacity */}
          <div className="process-actions">
            <a href="#contact" className="btn primary">
              Talk through your goals <span>↗</span>
            </a>
            <div className="process-capacity-tag">
              <span className="capacity-pulse-dot"></span>
              <span>Accepting 2 new partners this month</span>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Light-Theme Interactive Process Stage */}
        <div className="process-stage-light reveal-right">
          <div className="process-stage-header">
            <div className="stage-header-badge">
              <span className="live-pulse-dot"></span>
              <span>LIVE EXECUTION PIPELINE</span>
            </div>
            <span className="stage-version">METHODOLOGY V2.6</span>
          </div>

          <div className="process-stage-body">
            {/* 3D Visual Sapphire Floating Cube & Orbital Rings */}
            <div className="process-visual-col">
              <div className="process-3d-scene">
                <div className="process-orbit orbit-outer"></div>
                <div className="process-orbit orbit-inner"></div>

                <div className="process-core-light">
                  <span className="core-number">{PROCESS_STEPS[activeStep].num}</span>
                  <small className="core-tag">
                    {PROCESS_STEPS[activeStep].coreLabel}
                  </small>
                </div>

                <div className="process-ping ping-a"></div>
                <div className="process-ping ping-b"></div>
              </div>

              <div className="active-step-hint">
                <span>Phase {PROCESS_STEPS[activeStep].num} of 04</span>
              </div>
            </div>

            {/* Interactive Steps List */}
            <div className="process-steps-list">
              <div className="process-line-track"></div>

              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <article
                    key={step.num}
                    className={`process-step-card ${isActive ? "active" : ""}`}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                  >
                    <div className="step-circle-badge">
                      <span>{step.num}</span>
                    </div>
                    <div className="step-card-content">
                      <div className="step-card-top">
                        <h3 className="step-card-title">{step.title}</h3>
                        <span className="step-deliverable-badge">{step.deliverable}</span>
                      </div>
                      <p className="step-card-desc">{step.desc}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

