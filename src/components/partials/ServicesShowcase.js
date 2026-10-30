"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Target, Cpu } from "lucide-react";

export default function ServicesShowcase({ onOpenBooking }) {
  return (
    <section className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden" id="services">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-14 scroll-reveal">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60">
              01 / Core Capabilities
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Strategic performance advertising built with intent.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From dynamic creative sprints to server-side attribution, we engineer every layer of your paid acquisition funnel for predictable scaling.
          </p>
        </div>

        {/* 3 High-Impact Capability Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          
          {/* ─── CARD 1: META ADS ─── */}
          <div className="rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                  01 / META ADS ECOSYSTEM
                </span>
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  Advantage+
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Meta Ads Management
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full-funnel audience segmentation, dynamic creative testing, and algorithmic scaling across Facebook &amp; Instagram.
              </p>

              {/* Live Micro-HUD Simulator */}
              <div className="mt-5 p-4 rounded-2xl bg-slate-950 text-white font-mono text-xs border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Creative Sprints</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    3 Hooks × 2 Angles
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[78%] rounded-full" />
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
                  <span>Advantage+ Broad Scale</span>
                  <span className="text-blue-400 font-bold">ROAS 4.6x Avg</span>
                </div>
              </div>

              {/* Execution Deliverables */}
              <div className="mt-6 space-y-2.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Dynamic creative testing (Hooks, Body &amp; CTAs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Automated ad fatigue killswitches &amp; budget pacing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Native 9:16 Reels &amp; UGC conversion frameworks</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-8 pt-5 border-t border-slate-100">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all cursor-pointer"
              >
                <span>Explore Meta Strategy</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ─── CARD 2: GOOGLE ADS ─── */}
          <div className="rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-300 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                  02 / GOOGLE SEARCH &amp; PMAX
                </span>
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  High-Intent
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                Google Ads Management
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Capture high-intent commercial buyers with negative keyword sculpting, Smart Bidding alignment, and multichannel feeds.
              </p>

              {/* Live Micro-HUD Simulator */}
              <div className="mt-5 p-4 rounded-2xl bg-slate-950 text-white font-mono text-xs border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Search Sculpting</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Exact Match 94% QS
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[88%] rounded-full" />
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
                  <span>Junk Query Filter</span>
                  <span className="text-emerald-400 font-bold">$0 Wasted Spend</span>
                </div>
              </div>

              {/* Execution Deliverables */}
              <div className="mt-6 space-y-2.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Negative keyword sculpting (zero broad match bleed)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Performance Max multichannel feeds (Search, Maps, YouTube)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Smart Bidding alignment (Target CPA &amp; Target ROAS)</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-8 pt-5 border-t border-slate-100">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white transition-all cursor-pointer"
              >
                <span>Explore Google Strategy</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ─── CARD 3: CAPI & ATTRIBUTION ─── */}
          <div className="rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/60">
                  03 / ATTRIBUTION INTELLIGENCE
                </span>
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  Zero iOS Loss
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Tracking &amp; Server CAPI
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                First-party server-side Conversion API deployment, deduplication, and weekly transparent video audits.
              </p>

              {/* Live Micro-HUD Simulator */}
              <div className="mt-5 p-4 rounded-2xl bg-slate-950 text-white font-mono text-xs border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Server CAPI Stream</span>
                  <span className="text-indigo-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    Latency: 38ms
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full w-[96%] rounded-full" />
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
                  <span>Match Quality Score</span>
                  <span className="text-emerald-400 font-bold">9.6 / 10 Highest</span>
                </div>
              </div>

              {/* Execution Deliverables */}
              <div className="mt-6 space-y-2.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>First-party server tokens (bypasses ad-blockers &amp; iOS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Advanced multi-touch deduplication (zero double counts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Weekly Loom video audits directly from your account</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-8 pt-5 border-t border-slate-100">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all cursor-pointer"
              >
                <span>Explore Attribution</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
