"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Activity,
  ArrowRight,
  Filter,
  CheckCircle2,
  AlertCircle,
  Zap
} from "lucide-react";

export default function Intelligence() {
  const [activeTab, setActiveTab] = useState("funnel"); // "funnel" | "creative" | "attribution"

  return (
    <section id="intelligence" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-50 border border-cobalt-200/60 text-xs font-semibold text-cobalt-700 tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600" />
            Campaign Intelligence
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.12]">
            How We Engineer Advertising Performance.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            High performance is never an accident. Explore how our strategic frameworks route budget, isolate winning ad creatives, and protect attribution signal integrity.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-xl mb-8 border border-slate-200/80">
          <button
            onClick={() => setActiveTab("funnel")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all text-center ${
              activeTab === "funnel"
                ? "bg-white text-charcoal shadow-sm"
                : "text-slate-600 hover:text-charcoal"
            }`}
          >
            01. Funnel Architecture
          </button>
          <button
            onClick={() => setActiveTab("creative")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all text-center ${
              activeTab === "creative"
                ? "bg-white text-charcoal shadow-sm"
                : "text-slate-600 hover:text-charcoal"
            }`}
          >
            02. Creative Testing (DCT)
          </button>
          <button
            onClick={() => setActiveTab("attribution")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all text-center ${
              activeTab === "attribution"
                ? "bg-white text-charcoal shadow-sm"
                : "text-slate-600 hover:text-charcoal"
            }`}
          >
            03. Signal Attribution
          </button>
        </div>

        {/* Interactive Showcase Frame */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {/* Top Banner Notice */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200/80 mb-8 text-xs text-slate-500">
            <div className="flex items-center gap-2 font-semibold text-slate-700">
              <Activity className="w-4 h-4 text-cobalt-600" />
              <span>Adocial Tactical Strategy Framework</span>
            </div>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-200/80 text-slate-600">
              Illustrative Framework Showcase
            </span>
          </div>

          <AnimatePresence mode="wait">
            
            {/* VIEW 1: Funnel Architecture */}
            {activeTab === "funnel" && (
              <motion.div
                key="funnel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {/* Stage 1 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 uppercase">
                      Top of Funnel (TOF)
                    </span>
                    <h3 className="text-lg font-bold text-charcoal mt-3">
                      High-Intent Broad Discovery
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Instead of narrow overlapping interests, we deploy algorithmic broad targeting powered by rich pixel feeds and dynamic creative hooks.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>Budget Allocation:</span>
                      <strong className="text-charcoal font-mono">60% - 70%</strong>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Core Metric:</span>
                      <strong className="text-cobalt-600 font-mono">Low Cost Per Hook View</strong>
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-100 uppercase">
                      Middle of Funnel (MOF)
                    </span>
                    <h3 className="text-lg font-bold text-charcoal mt-3">
                      Objection Handling &amp; Proof
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Re-engaging video viewers and high-intent website visitors with customer unboxing, third-party comparisons, and guarantee angles.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>Budget Allocation:</span>
                      <strong className="text-charcoal font-mono">15% - 20%</strong>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Core Metric:</span>
                      <strong className="text-amber-700 font-mono">Qualified Click-Through</strong>
                    </div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase">
                      Bottom of Funnel (BOF)
                    </span>
                    <h3 className="text-lg font-bold text-charcoal mt-3">
                      Conversion &amp; Cart Recovery
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      High-intent 7-day cart abandoners and booking drop-offs captured via dynamic product catalog (DPA) and direct urgency incentives.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>Budget Allocation:</span>
                      <strong className="text-charcoal font-mono">15% - 20%</strong>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Core Metric:</span>
                      <strong className="text-emerald-700 font-mono">Target CPA / ROAS</strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 2: Creative Testing Framework */}
            {activeTab === "creative" && (
              <motion.div
                key="creative"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
                  <div className="max-w-2xl mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-charcoal">
                      The Dynamic Creative Testing (DCT) Sandbox Protocol
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Instead of testing entire ad videos randomly, we test isolated variables (3 hooks × 2 body angles × 2 CTAs) in a controlled ad set before budget scaling.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-mono text-[10px] font-bold text-cobalt-600 uppercase">
                        Variable 01 • The Hook (0–3s)
                      </span>
                      <div className="font-bold text-charcoal text-sm mt-1">First 3 Seconds</div>
                      <p className="text-slate-500 mt-1">
                        Determines Thumbstop Rate. Test direct pain point vs counter-intuitive statement.
                      </p>
                      <div className="mt-3 font-mono text-[11px] text-slate-700 font-semibold">
                        Benchmark: &gt; 35% Thumbstop
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-mono text-[10px] font-bold text-cobalt-600 uppercase">
                        Variable 02 • Body Proposition
                      </span>
                      <div className="font-bold text-charcoal text-sm mt-1">Problem-Solution</div>
                      <p className="text-slate-500 mt-1">
                        Demonstrates unique mechanism and authentic social proof to sustain watch time.
                      </p>
                      <div className="mt-3 font-mono text-[11px] text-slate-700 font-semibold">
                        Benchmark: &gt; 2.5% Outbound CTR
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-mono text-[10px] font-bold text-cobalt-600 uppercase">
                        Variable 03 • The Offer CTA
                      </span>
                      <div className="font-bold text-charcoal text-sm mt-1">Conversion Driver</div>
                      <p className="text-slate-500 mt-1">
                        Clear risk-reversal guarantee or irresistible trial offer triggering immediate clicks.
                      </p>
                      <div className="mt-3 font-mono text-[11px] text-emerald-700 font-semibold">
                        Winner extracted for vertical scale
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 3: Signal Attribution */}
            {activeTab === "attribution" && (
              <motion.div
                key="attribution"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Old Broken Way */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-red-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-red-700 mb-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>Standard Client-Side Browser Pixel</span>
                    </div>
                    <h3 className="text-lg font-bold text-charcoal">
                      40% to 50% Attribution Blindspot
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Relying solely on Safari and Chrome client-side cookies causes Meta and Google to lose half of all purchase signals. Ad algorithms optimize blindly with incomplete data.
                    </p>
                  </div>

                  <div className="mt-6 p-3.5 rounded-xl bg-red-50/70 border border-red-100 space-y-1.5 text-xs text-red-900">
                    <div className="flex justify-between">
                      <span>Event Match Quality:</span>
                      <strong className="font-mono">4.2 / 10 (Poor)</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>AdBlock / Safari Drop:</span>
                      <strong className="font-mono">52% Signal Lost</strong>
                    </div>
                  </div>
                </div>

                {/* Adocial Way */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-emerald-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Adocial Server-Side CAPI Gateway</span>
                    </div>
                    <h3 className="text-lg font-bold text-charcoal">
                      99.4% Complete Verified Signal Capture
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      By delivering events directly from your server to Meta&apos;s and Google&apos;s API, every conversion is deduplicated and matched, feeding accurate ROAS data to bidding algorithms.
                    </p>
                  </div>

                  <div className="mt-6 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-1.5 text-xs text-emerald-900">
                    <div className="flex justify-between">
                      <span>Event Match Quality:</span>
                      <strong className="font-mono text-emerald-700">9.8 / 10 (Excellent)</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Signal Capture Rate:</span>
                      <strong className="font-mono text-emerald-700">100% Attributed</strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

