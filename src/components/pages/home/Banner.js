"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Layers,
  Zap,
  Activity,
  MessageSquare
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Banner({ onOpenBooking }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Subtle background architectural grid & ambient lighting */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cobalt-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 left-10 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Top Hero Grid: Left Content + Right Analytics Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow, Editorial Headline, Narrative, CTAs */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Eyebrow Label with International Coverage */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-50 border border-cobalt-200/60 text-[11px] font-bold text-cobalt-700 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600 animate-pulse" />
                Performance Advertising
              </div>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline-flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                Serving USA, UK, Canada & Australia
              </span>
            </motion.div>

            {/* Large Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] text-charcoal font-extrabold tracking-tight leading-[1.06]"
            >
              Turn Ad Spend Into{" "}
              <span className="text-cobalt-600 underline decoration-cobalt-200 decoration-wavy decoration-2 underline-offset-8">
                Smarter Growth.
              </span>
            </motion.h1>

            {/* Supporting Value Proposition Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl"
            >
              We help ambitious businesses reach the right audience, generate qualified leads,
              and make better decisions through strategic, performance-focused advertising across
              Meta and Google.
            </motion.p>

            {/* CTA Buttons & WhatsApp Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA */}
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center gap-3 bg-cobalt-600 hover:bg-cobalt-700 text-white px-7 py-4 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.98]"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-charcoal px-5 py-4 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                <span>Explore Our Services</span>
                <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* WhatsApp direct chat pill */}
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-emerald-700 transition-colors ml-1"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Or chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust Checkpoints (Authentic, no fabricated claims) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cobalt-600" />
                <span>100% Client-Owned Ad Accounts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cobalt-600" />
                <span>Direct Strategic Advisory</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cobalt-600" />
                <span>Transparent Weekly Reporting</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Custom Visual Advertising Analytics Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Composition Card */}
            <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08)] p-6 overflow-hidden">
              
              {/* Header with Demo Data Disclaimer */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                    Campaign Intelligence
                  </span>
                </div>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                  Illustrative Framework
                </span>
              </div>

              {/* 3 Key Metrics Row */}
              <div className="grid grid-cols-3 gap-3 my-5">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase">
                    Testing
                  </div>
                  <div className="text-lg font-bold text-charcoal font-mono mt-0.5">
                    12 Hooks
                  </div>
                  <div className="text-[10px] text-cobalt-600 font-medium">Dynamic Sandbox</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase">
                    Attribution
                  </div>
                  <div className="text-lg font-bold text-emerald-600 font-mono mt-0.5">
                    9.8 / 10
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">Server CAPI</div>
                </div>

                <div className="p-3 rounded-2xl bg-cobalt-50/60 border border-cobalt-100">
                  <div className="text-[10px] font-semibold text-cobalt-700 uppercase">
                    Scaling Rule
                  </div>
                  <div className="text-lg font-bold text-cobalt-700 font-mono mt-0.5">
                    +20% Pace
                  </div>
                  <div className="text-[10px] text-cobalt-600 font-medium">Stable Learning</div>
                </div>
              </div>

              {/* Campaign Performance Funnel Diagram */}
              <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-cobalt-600" />
                    Structured Funnel Execution
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Real-Time Routing</span>
                </div>

                {/* Funnel Stage 1 */}
                <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-100 text-xs shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-cobalt-100 text-cobalt-700 font-mono font-bold text-[10px] flex items-center justify-center">
                      01
                    </span>
                    <span className="font-medium text-slate-800">Top-of-Funnel Discovery</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Broad Intent</span>
                </div>

                {/* Funnel Stage 2 */}
                <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-100 text-xs shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-cobalt-100 text-cobalt-700 font-mono font-bold text-[10px] flex items-center justify-center">
                      02
                    </span>
                    <span className="font-medium text-slate-800">Middle Intent Nurturing</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Proof Angles</span>
                </div>

                {/* Funnel Stage 3 */}
                <div className="flex items-center justify-between bg-cobalt-600 text-white p-2.5 rounded-xl text-xs shadow">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-white/20 text-white font-mono font-bold text-[10px] flex items-center justify-center">
                      03
                    </span>
                    <span className="font-bold">Conversion & Pipeline Capture</span>
                  </div>
                  <span className="text-[11px] font-mono text-cobalt-100">CAPI Matched</span>
                </div>
              </div>

              {/* Bottom Insight Strip */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cobalt-600" />
                  <span>Meta Advantage+ & Google PMax Alignment</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Adocial OS</span>
              </div>

            </div>

            {/* Floating Supporting Micro-Card 1 (Top Right) */}
            <div className="hidden sm:flex absolute -top-4 -right-3 bg-charcoal text-white text-[11px] font-medium py-2 px-3.5 rounded-2xl shadow-xl items-center gap-2 border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Multi-Platform Strategy</span>
            </div>

            {/* Floating Supporting Micro-Card 2 (Bottom Left) */}
            <div className="hidden sm:flex absolute -bottom-4 -left-3 bg-white text-charcoal text-[11px] font-semibold py-2 px-3.5 rounded-2xl shadow-lg items-center gap-2 border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-cobalt-600" />
              <span>Zero iOS Tracking Leakage</span>
            </div>

          </motion.div>

        </div>

        {/* Bottom Key Pillars Rail */}
        <div className="mt-16 lg:mt-24 pt-8 border-t border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: "Strategic Focus",
              desc: "Unit economics and margin thresholds mapped prior to campaign launch.",
            },
            {
              title: "International Reach",
              desc: "Engineered for buying psychology across USA, UK, Canada, and Australia.",
            },
            {
              title: "Clean Attribution",
              desc: "Server-side CAPI deployment for resilient, cookie-independent measurement.",
            },
            {
              title: "Direct Accountability",
              desc: "100% client-owned ad accounts with weekly direct video walkthroughs.",
            },
          ].map((pillar, i) => (
            <div key={i} className="group">
              <div className="text-xs font-bold text-cobalt-600 uppercase tracking-wider">
                Pillar 0{i + 1}
              </div>
              <div className="text-sm sm:text-base font-bold text-charcoal mt-1">
                {pillar.title}
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
