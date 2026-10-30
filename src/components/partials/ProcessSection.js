"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Search, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  FileCode2, 
  Flame, 
  Video 
} from "lucide-react";

const OPERATING_PHASES = [
  {
    phase: "01",
    tag: "FOUNDATION & DISCOVERY",
    title: "Full Account Diagnostic & Unit Economics Audit",
    timeframe: "Days 1–3",
    deliverable: "Deliverable: 24-Point Audit & Growth Roadmap",
    summary: "We dig deep into your historical ad spend, customer LTV, pixel health, and past creative failures to pinpoint immediate revenue leaks.",
    highlights: [
      "Historical spend & wasted budget forensic audit",
      "Exact blended CAC and target ROAS breakeven modeling",
      "Audience saturation & competitor creative teardown",
      "Direct invite to your Meta & Google ad accounts (zero password sharing)",
    ],
    metricBadge: "Identify 20–35% wasted ad spend",
    icon: Search,
    color: "from-blue-600 to-indigo-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200/80",
  },
  {
    phase: "02",
    tag: "SIGNAL INFRASTRUCTURE",
    title: "Server-Side CAPI & Attribution Architecture",
    timeframe: "Days 4–5",
    deliverable: "Deliverable: Cloudflare CAPI + GTM Server Container",
    summary: "We eliminate iOS 14.5+ signal drop by routing first-party conversion data directly from your server to Meta and Google algorithms.",
    highlights: [
      "Custom server-side Conversion API (Meta & Google) deployment",
      "Event deduplication & high match quality (EMQ 9.0+ score guarantee)",
      "Ad blocker & browser cookie limitation bypass",
      "HubSpot / Shopify / CRM real-time purchase synchronization",
    ],
    metricBadge: "99.4% Event Match Rate",
    icon: Cpu,
    color: "from-indigo-600 to-cyan-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
  },
  {
    phase: "03",
    tag: "RAPID TESTING",
    title: "7-Day High-Velocity Creative & Hook Sprints",
    timeframe: "Weekly Sprints",
    deliverable: "Deliverable: 3 Hooks × 2 Bodies × 2 CTAs Matrix",
    summary: "Creative is the new targeting. We systematically test unique video hooks, native UGC angles, and commercial copy every 7 days.",
    highlights: [
      "Systematic dynamic creative testing (DCT) matrix",
      "Direct-response visual hooks designed for 3-second hold rate",
      "Automatic ad fatigue killswitches (kill losers before they waste budget)",
      "Winning creative scaling into broad algorithmic Advantage+ ad sets",
    ],
    metricBadge: "3x Longer Creative Lifespan",
    icon: Flame,
    color: "from-blue-600 to-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
  },
  {
    phase: "04",
    tag: "ALGORITHMIC SCALE",
    title: "Predictable Budget Scaling & Weekly Video Audits",
    timeframe: "Continuous",
    deliverable: "Deliverable: Weekly Loom Audits + 24/7 Slack Portal",
    summary: "Once winning unit economics are proven, we scale budgets smoothly by 15-20% increments with zero performance crashes.",
    highlights: [
      "Predictable horizontal & vertical ad budget scaling",
      "Negative keyword sculpting & bid cap protection on Google",
      "Weekly 10-minute Loom video walking through raw numbers",
      "100% transparent reporting inside your ad account—no black boxes",
    ],
    metricBadge: "Weekly Loom Video Audits",
    icon: TrendingUp,
    color: "from-emerald-600 to-teal-600",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200/80",
  },
];

export default function ProcessSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = OPERATING_PHASES[activeIdx];
  const CurrentIcon = current.icon;

  return (
    <section className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden" id="process">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8 border-b border-slate-200/80 scroll-reveal">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60">
                03 / Operating Protocol
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Rigorous execution. Every step engineered for predictability.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              No black-box secrecy or mystery spreadsheets. Here is the exact 4-stage operating protocol we deploy inside your ad accounts.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-full text-xs font-semibold text-slate-700 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Accepting 2 new brand partners this month</span>
          </div>
        </div>

        {/* 4-Step Interactive Navigation Tabs (Desktop & Tablet) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {OPERATING_PHASES.map((phase, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={phase.phase}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg -translate-y-1"
                    : "bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-black px-2 py-0.5 rounded ${
                    isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    PHASE {phase.phase}
                  </span>
                  <span className={`text-[11px] font-mono ${isActive ? "text-slate-400" : "text-slate-500"}`}>
                    {phase.timeframe}
                  </span>
                </div>
                <div className={`font-display font-bold text-sm line-clamp-1 ${isActive ? "text-white" : "text-slate-900"}`}>
                  {phase.tag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Cinematic Showcase Card */}
        <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-blue-600/15 blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left 7 Columns: Detailed Phase Architecture */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/80">
                  PHASE {current.phase} • {current.tag}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {current.timeframe}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {current.summary}
              </p>

              {/* Concrete Execution Milestones */}
              <div className="pt-2 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Key Deliverables &amp; Protocols:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Micro-Terminal Snapshot & Deliverable Badge */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/90">
                <div className="flex items-center gap-2">
                  <CurrentIcon className="w-5 h-5 text-blue-400" />
                  <span className="font-mono text-xs font-bold text-slate-300">STAGE VERIFICATION</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full font-bold">
                  ACTIVE
                </span>
              </div>

              <div className="my-6 space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Formal Deliverable
                  </span>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <FileCode2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{current.deliverable}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Expected Outcome
                  </span>
                  <div className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{current.metricBadge}</span>
                  </div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="pt-4 border-t border-slate-800/90 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">Progress Roadmap</span>
                <span className="font-mono font-bold text-white">Step {activeIdx + 1} of 4</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Foundation Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="font-mono text-xs font-bold text-blue-600 mb-1">01 / ROOT CONTROL</div>
            <div className="font-display font-bold text-slate-900 text-sm">100% Account Ownership</div>
            <p className="text-xs text-slate-500 mt-1">You retain complete admin rights. We manage as partner agency.</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="font-mono text-xs font-bold text-emerald-600 mb-1">02 / TRANSPARENCY</div>
            <div className="font-display font-bold text-slate-900 text-sm">Weekly Loom Video Briefs</div>
            <p className="text-xs text-slate-500 mt-1">Direct screen walkthrough of exact ad spends, tests, and wins.</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="font-mono text-xs font-bold text-indigo-600 mb-1">03 / TESTING CADENCE</div>
            <div className="font-display font-bold text-slate-900 text-sm">7-Day Creative Sprints</div>
            <p className="text-xs text-slate-500 mt-1">Fresh hooks, angles, and ad copy continuously deployed.</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="font-mono text-xs font-bold text-purple-600 mb-1">04 / FREEDOM</div>
            <div className="font-display font-bold text-slate-900 text-sm">Rolling 30-Day Terms</div>
            <p className="text-xs text-slate-500 mt-1">No 12-month lock-in contracts. We earn your business monthly.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
