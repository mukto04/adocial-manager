"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Search,
  Activity,
  CheckCircle2,
  ArrowUpRight,
  SlidersHorizontal,
  Layers,
  Filter,
  ShieldCheck,
  Zap,
  Target
} from "lucide-react";

export default function Services({ onOpenBooking }) {
  // Interactive tab for Meta creative testing simulation
  const [activeHook, setActiveHook] = useState(0);
  const hooks = [
    { name: "Hook A: Direct Problem/Solution", ctr: "3.8%", status: "Winner (Scaling)" },
    { name: "Hook B: Social Proof UGC Montage", ctr: "2.4%", status: "Iterating" },
    { name: "Hook C: Founder Story Angle", ctr: "1.9%", status: "Paused" },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-50 border border-cobalt-200/60 text-xs font-semibold text-cobalt-700 tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600" />
              Core Capabilities
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.12]">
              Specialized Advertising Disciplines Engineered for Scalable ROI.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            We focus strictly on the three pillars that drive tangible commercial growth: high-converting Meta campaigns, high-intent Google search, and robust tracking infrastructure.
          </p>
        </div>

        {/* 3 Distinct Architectural Visual Treatments */}
        <div className="space-y-12 lg:space-y-16">
          
          {/* SERVICE 1: Meta Ads Management (Wide Feature with Interactive Creative Testing Visual) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 sm:p-12 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cobalt-700">
                  <span className="w-6 h-6 rounded-md bg-cobalt-100 flex items-center justify-center font-mono">
                    01
                  </span>
                  <span>Meta Ads Management</span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-charcoal tracking-tight leading-snug">
                  Full-Funnel Facebook & Instagram Architecture.
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  We design, test, and scale Meta campaigns engineered for North American and international buying psychology. Rather than boosting single posts, we implement controlled Dynamic Creative Testing (DCT) sandboxes combined with broad audience algorithms to systematically discover winning creative hooks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-600 shrink-0" />
                    <span>Dynamic Creative Testing (DCT)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-600 shrink-0" />
                    <span>Algorithmic Broad Targeting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-600 shrink-0" />
                    <span>Advantage+ Shopping Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-600 shrink-0" />
                    <span>Lead Gen & High-Intent Retargeting</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 text-xs font-bold text-cobalt-700 hover:text-cobalt-800 tracking-wider uppercase group"
                  >
                    <span>Discuss Meta Campaigns</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>

              {/* Right Custom Visual: Dynamic Creative Testing Sandbox */}
              <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-charcoal">
                    <Sparkles className="w-4 h-4 text-cobalt-600" />
                    <span>Dynamic Creative Sandbox (DCT)</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cobalt-50 text-cobalt-700 font-semibold">
                    Systematic Iteration
                  </span>
                </div>

                <div className="space-y-2.5">
                  {hooks.map((hook, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveHook(i)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between text-xs ${
                        activeHook === i
                          ? "bg-cobalt-50/70 border-cobalt-300 shadow-sm"
                          : "bg-slate-50 border-slate-200/70 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${
                          i === 0 ? "bg-emerald-500 animate-pulse" : "bg-slate-400"
                        }`} />
                        <span className="font-semibold text-slate-800">{hook.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-slate-700">{hook.ctr} CTR</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                          i === 0 ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-600"
                        }`}>
                          {hook.status}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                  <span>Optimization protocol:</span>
                  <span className="font-semibold text-charcoal">Kill fatigued ads, scale winning hooks by +20%</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* SERVICE 2: Google Ads Management (High-Intent Search & PMax Visual) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 sm:p-12 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Custom Visual: Search Intent Sculpting Diagram */}
              <div className="lg:col-span-6 order-2 lg:order-1 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-charcoal">
                    <Target className="w-4 h-4 text-cobalt-600" />
                    <span>Search Intent Architecture</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold">
                    Negative Sculpting
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  {/* High Intent Capture */}
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <div className="flex items-center justify-between text-emerald-900 font-semibold mb-1">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Exact & Commercial Intent (Targeted)
                      </span>
                      <span className="font-mono text-[11px] text-emerald-700">High ROAS</span>
                    </div>
                    <div className="font-mono text-[11px] text-emerald-800/90">
                      [emergency commercial roofer calgary], [custom erp software austin]
                    </div>
                  </div>

                  {/* Negative Waste Filtering */}
                  <div className="p-3 rounded-xl bg-red-50/60 border border-red-200">
                    <div className="flex items-center justify-between text-red-900 font-semibold mb-1">
                      <span className="flex items-center gap-1.5">
                        <Filter className="w-3.5 h-3.5 text-red-600" />
                        Negative Keywords (Spend Saved)
                      </span>
                      <span className="font-mono text-[11px] text-red-700">Wasted Clicks Eliminated</span>
                    </div>
                    <div className="font-mono text-[11px] text-red-800/80 line-through">
                      &quot;free template&quot;, &quot;salary&quot;, &quot;internship jobs&quot;, &quot;diy guide&quot;
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                  <span>Smart Bidding Alignment:</span>
                  <span className="font-semibold text-charcoal">Target CPA calibrated to unit margins</span>
                </div>
              </div>

              {/* Right Details */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cobalt-700">
                  <span className="w-6 h-6 rounded-md bg-cobalt-100 flex items-center justify-center font-mono">
                    02
                  </span>
                  <span>Google Ads Management</span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-charcoal tracking-tight leading-snug">
                  High-Intent Search & Performance Max.
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Capture customers at the exact moment they search for your solution. We eliminate wasted budget with rigorous negative keyword sculpting and structure Performance Max asset groups that feed high-value audience signals directly into Google&apos;s bidding algorithms.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-600 shrink-0" />
                    <span>Commercial Search Campaigns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-600 shrink-0" />
                    <span>Performance Max Asset Feeds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-600 shrink-0" />
                    <span>Negative Keyword Sculpting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-600 shrink-0" />
                    <span>Target CPA & ROAS Bid Rules</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 text-xs font-bold text-cobalt-700 hover:text-cobalt-800 tracking-wider uppercase group"
                  >
                    <span>Discuss Google Ads</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

          {/* SERVICE 3: Tracking & Optimization (Architectural Pipeline Showcase) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 sm:p-12 overflow-hidden"
          >
            <div className="max-w-3xl mb-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cobalt-700">
                <span className="w-6 h-6 rounded-md bg-cobalt-100 flex items-center justify-center font-mono">
                  03
                </span>
                <span>Tracking & Optimization</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-charcoal tracking-tight leading-snug">
                Server-Side CAPI & Attribution Intelligence.
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                iOS updates and browser ad-blockers routinely destroy 40% to 50% of pixel signal data. We deploy server-side Conversion API (CAPI) on dedicated gateways, ensuring Meta and Google receive 100% complete event attribution for accurate machine learning and scaling.
              </p>
            </div>

            {/* Signal Flow Visual Pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-6 rounded-2xl border border-slate-200">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                    Step 01 • User Action
                  </span>
                  <div className="font-bold text-sm text-charcoal mt-1">
                    Website Interaction
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Visitor triggers lead form, checkout, or scheduled call.
                  </p>
                </div>
                <div className="mt-4 text-[10px] font-mono text-cobalt-600 font-semibold">
                  Zero Client-Side Reliance
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                    Step 02 • Gateway
                  </span>
                  <div className="font-bold text-sm text-charcoal mt-1">
                    Server Container
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Encrypted event payload processed via Cloudflare server gateway.
                  </p>
                </div>
                <div className="mt-4 text-[10px] font-mono text-emerald-600 font-semibold">
                  100% Privacy Compliant
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                    Step 03 • API Handshake
                  </span>
                  <div className="font-bold text-sm text-charcoal mt-1">
                    Direct Server API
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Immediate server-to-server delivery to Meta CAPI &amp; Google Enhanced.
                  </p>
                </div>
                <div className="mt-4 text-[10px] font-mono text-emerald-600 font-semibold">
                  9.8/10 Event Match
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cobalt-600 text-white flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-[10px] font-mono font-bold text-cobalt-200 uppercase">
                    Outcome • Real Impact
                  </span>
                  <div className="font-bold text-sm text-white mt-1">
                    Reliable Algorithm Feedback
                  </div>
                  <p className="text-xs text-cobalt-100 mt-1">
                    Ad algorithms optimize on real revenue, not estimated assumptions.
                  </p>
                </div>
                <div className="mt-4 text-[10px] font-mono text-white font-bold">
                  Accurate Budget Decisions
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Included in all Adocial growth partnerships.
              </span>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs font-bold text-cobalt-700 hover:text-cobalt-800 tracking-wider uppercase group"
              >
                <span>Audit Your Tracking Infrastructure</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

