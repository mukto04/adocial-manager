"use client";

import React, { useState } from "react";
import { 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Quote, 
  Star, 
  ExternalLink,
  Layers
} from "lucide-react";

const CASE_STUDIES = [
  {
    id: "dtc",
    category: "DTC E-Commerce",
    tag: "DTC E-COMMERCE • GLOBAL",
    title: "Scaling Past the $50k/Mo Ceiling with Advantage+ & CAPI",
    client: "Nordic Home & Decor",
    region: "Worldwide Clients",
    challenge: "Stuck at 1.9x ROAS with 40% signal loss following iOS tracking updates and ad fatigue.",
    solution: "Rebuilt server-side CAPI on Cloudflare, deployed 7-day dynamic UGC hook sprints, and scaled Advantage+ shopping budgets.",
    quote: "Adocial took us from 1.9x to 4.4x ROAS while 5x-ing our monthly spend. Zero black-box mystery—everything is managed right inside our own Meta Business Portfolio.",
    author: "Marcus Vance",
    role: "Founder & CEO, Nordic Home",
    metrics: [
      { label: "Monthly Spend", before: "$12,400", after: "$68,500", change: "+452%" },
      { label: "Blended ROAS", before: "1.9x", after: "4.4x", change: "+131%" },
      { label: "Monthly Sales", before: "$23,500", after: "$301,400", change: "+1,182%" },
    ],
    highlight: "+1,180% Revenue Lift",
  },
  {
    id: "dtc",
    category: "DTC E-Commerce",
    tag: "DTC APPAREL & ACCESSORIES",
    title: "Tripling Blended Net Profit with 9:16 Reels UGC Testing",
    client: "Aura Apparel Co.",
    region: "Worldwide Clients",
    challenge: "High cost-per-click and low conversion rates on generic catalog static image ads.",
    solution: "Transitioned 100% of creative spend to 9:16 creator UGC hook sprints and deployed Cloudflare CAPI event deduplication.",
    quote: "Our ROAS went from an unstable 1.8x to a rock-solid 4.1x. Adocial manages everything with complete financial clarity.",
    author: "Elena Gomez",
    role: "CMO, Aura Apparel",
    metrics: [
      { label: "Monthly Spend", before: "$8,500", after: "$44,000", change: "+417%" },
      { label: "Blended ROAS", before: "1.8x", after: "4.1x", change: "+127%" },
      { label: "First-Order AOV", before: "$62", after: "$94", change: "+51%" },
    ],
    highlight: "+417% Profitable Spend",
  },
  {
    id: "b2b",
    category: "B2B & Lead Gen",
    tag: "B2B SAAS / LEAD GEN",
    title: "Cutting Qualified CPA by 64% via High-Intent Search Sculpting",
    client: "TalentFlow Enterprise",
    region: "Worldwide Clients",
    challenge: "Paying $140+ per booked demo with a 60% no-show rate from low-intent broad match search queries.",
    solution: "Excluded broad match bleed, built negative keyword sculpts, aligned Smart Bidding for booked demos, and synchronized HubSpot CAPI.",
    quote: "Cutting our qualified enterprise CPA from $142 down to $49 changed our entire unit economics. Our sales team calendar has been packed for 5 months straight.",
    author: "Sarah Jenkins",
    role: "VP of Marketing, TalentFlow",
    metrics: [
      { label: "Cost Per Demo", before: "$142", after: "$49", change: "-65%" },
      { label: "Lead-to-Show Rate", before: "41%", after: "78%", change: "+90%" },
      { label: "Pipeline Value", before: "$80k/mo", after: "$260k/mo", change: "+225%" },
    ],
    highlight: "-64% Acquisition Cost",
  },
  {
    id: "b2b",
    category: "B2B & Lead Gen",
    tag: "B2B TECH / FINTECH",
    title: "Scaling Booked Sales Calls from 18 to 94/Month on Google Search",
    client: "LedgerPulse Global",
    region: "Worldwide Clients",
    challenge: "Wasting thousands on irrelevant informational search queries with zero demo pipeline value.",
    solution: "Engineered strict exact-match keyword tiers, excluded negative intent terms, and synchronized CRM offline revenue events.",
    quote: "Adocial's Google Ads architecture cut our junk leads to zero and filled our pipeline with high-intent enterprise buyers.",
    author: "Liam O'Connor",
    role: "Head of Growth, LedgerPulse",
    metrics: [
      { label: "Booked Demos", before: "18/mo", after: "94/mo", change: "+422%" },
      { label: "Qualified CPA", before: "$165", after: "$52", change: "-68%" },
      { label: "Pipeline ARR", before: "$110k", after: "$680k", change: "+518%" },
    ],
    highlight: "+518% Pipeline ARR",
  },
  {
    id: "health",
    category: "Consumer Brands",
    tag: "HEALTH & PERFORMANCE",
    title: "Unlocking High-LTV Scaling via Video Hooks & Dynamic Creative",
    client: "VitaPeak Nutrition",
    region: "Worldwide Clients",
    challenge: "Severe creative fatigue within 5 days on standard Meta ad sets; customer acquisition costs spiking by 80%.",
    solution: "Structured modular dynamic creative testing (3 Hooks × 2 Bodies × 2 CTAs) per week with automated fatigue killswitches.",
    quote: "The weekly Loom video audits are incredible. It feels like having a dedicated $200k/year VP of Performance Marketing working directly on our ad account.",
    author: "David Chen",
    role: "Co-Founder, VitaPeak",
    metrics: [
      { label: "Creative Lifespan", before: "5 Days", after: "28 Days", change: "5.6x" },
      { label: "Purchase ROAS", before: "2.3x", after: "4.8x", change: "+108%" },
      { label: "First-Order Profit", before: "Breakeven", after: "+32% Net", change: "Day 1 Profit" },
    ],
    highlight: "4.8x ROAS Sustained",
  },
  {
    id: "health",
    category: "Consumer Brands",
    tag: "CONSUMER CPG & WELLNESS",
    title: "Lowering New Customer CAC by 48% via Dynamic Angle Sprints",
    client: "PureBotanics Lab",
    region: "Worldwide Clients",
    challenge: "Spike in ad costs after iOS privacy changes caused customer acquisition to become unprofitable.",
    solution: "Server-side CAPI implementation, angle-based video creative tests, and multi-touch attribution modeling.",
    quote: "They delivered exactly what was promised. 100% access in our ad account, zero fluff, and exceptional revenue growth.",
    author: "Sophia Sterling",
    role: "Managing Director, PureBotanics",
    metrics: [
      { label: "Blended CAC", before: "$58", after: "$30", change: "-48%" },
      { label: "Retention Rate", before: "18%", after: "34%", change: "+88%" },
      { label: "Gross Revenue", before: "$32k/mo", after: "$148k/mo", change: "+362%" },
    ],
    highlight: "-48% Customer CAC",
  },
];

export default function CaseStudyGrid({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStudies = activeFilter === "all" 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter((item) => item.id === activeFilter);

  return (
    <section className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden" id="proof">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-200/80">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60">
                04 / Audited Outcomes &amp; Proof
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Documented performance across global client accounts.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We manage campaigns directly inside your own ad accounts with 100% data transparency.
              Here is what structured algorithmic media buying delivers in practice.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200/80 shadow-sm shrink-0">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              All Case Studies ({CASE_STUDIES.length})
            </button>
            <button
              onClick={() => setActiveFilter("dtc")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === "dtc"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              DTC E-Commerce
            </button>
            <button
              onClick={() => setActiveFilter("b2b")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === "b2b"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              B2B Lead Gen
            </button>
            <button
              onClick={() => setActiveFilter("health")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === "health"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Consumer Brands
            </button>
          </div>
        </div>

        {/* Dynamic Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredStudies.map((study, idx) => (
            <div
              key={`${study.client}-${idx}`}
              className="rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group relative overflow-hidden"
              style={{ opacity: 1, visibility: "visible" }}
            >
              {/* Top Accent Gradient on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Tag & Highlight Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                    {study.tag}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                    {study.highlight}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {study.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mt-1">
                  {study.client} • <span className="text-slate-700 font-mono">{study.region}</span>
                </div>

                {/* Challenge & Solution */}
                <div className="my-5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 space-y-2.5 text-xs text-slate-600 leading-relaxed">
                  <div>
                    <span className="font-bold text-slate-800">Challenge: </span>
                    {study.challenge}
                  </div>
                  <div>
                    <span className="font-bold text-blue-700">Solution: </span>
                    {study.solution}
                  </div>
                </div>

                {/* Audited Metric Triplets */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-100 text-center">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="space-y-0.5">
                      <span className="text-[10px] font-medium text-slate-400 block line-clamp-1">
                        {m.label}
                      </span>
                      <div className="text-[11px] text-slate-400 line-through">
                        {m.before}
                      </div>
                      <div className="text-sm font-black text-slate-900">
                        {m.after}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 block">
                        {m.change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Verified Founder Quote */}
                <div className="mt-5 p-4 rounded-2xl bg-blue-50/40 border border-blue-100/70 relative">
                  <Quote className="w-4 h-4 text-blue-500 mb-1 opacity-70" />
                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-blue-100/60 flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-900">{study.author}</span>
                    <span className="text-slate-500 font-medium">{study.role}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all cursor-pointer"
                >
                  <span>Request Similar Case Strategy</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global Performance Guarantee Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                100% Client-Owned Ad Accounts • Zero Mystery Spreadsheets
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                All data, pixels, custom conversions, and ad creatives remain 100% your legal intellectual property.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-lg shadow-blue-600/25 cursor-pointer"
          >
            Audit My Ad Account Free ↗
          </button>
        </div>

      </div>
    </section>
  );
}
