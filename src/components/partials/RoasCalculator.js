"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function RoasCalculator({ onOpenBooking }) {
  const [spend, setSpend] = useState(10000);
  const [targetRoas, setTargetRoas] = useState(4.2);

  const projectedRevenue = Math.round(spend * targetRoas);
  const netProfitGain = Math.round(projectedRevenue - spend);
  const standardAgencyFee = Math.round(spend * 0.15); // Traditional 15% agency
  const adocialFee = 300; // Flat monthly
  const monthlySavings = standardAgencyFee > adocialFee ? standardAgencyFee - adocialFee : 0;

  return (
    <section className="py-24 bg-slate-50/80 border-y border-slate-200/70 relative" id="intelligence">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-12 scroll-reveal">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60">
              05 / Financial Modeling
            </span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Project your return on ad spend with zero hidden markups.
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Model your unit economics. Adjust monthly ad budget and target ROAS to see projected gross revenue,
            net profit lift, and how much you save with Adocial&apos;s flat $300/mo management structure.
          </p>
        </div>

        {/* Interactive Calculator Stage */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl p-6 sm:p-10 overflow-hidden scroll-reveal scroll-stagger-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label htmlFor="spend-range" className="text-xs sm:text-sm font-semibold text-slate-300">
                    Monthly Advertising Spend
                  </label>
                  <span className="text-lg sm:text-xl font-bold text-white font-mono bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                    ${spend.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  id="spend-range"
                  type="range"
                  min="2000"
                  max="50000"
                  step="1000"
                  value={spend}
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                  <span>$2,000</span>
                  <span>$25,000</span>
                  <span>$50,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label htmlFor="roas-range" className="text-xs sm:text-sm font-semibold text-slate-300">
                    Target Return on Ad Spend (ROAS)
                  </label>
                  <span className="text-lg sm:text-xl font-bold text-emerald-400 font-mono bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                    {targetRoas.toFixed(1)}x
                  </span>
                </div>
                <input
                  id="roas-range"
                  type="range"
                  min="2.5"
                  max="6.0"
                  step="0.1"
                  value={targetRoas}
                  onChange={(e) => setTargetRoas(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                  <span>2.5x (Breakeven)</span>
                  <span>4.2x (Adocial Avg)</span>
                  <span>6.0x (High Scale)</span>
                </div>
              </div>

              {/* Transparency Comparison */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>The Adocial Transparency Advantage:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Traditional agencies charge 15% of spend (<strong>${standardAgencyFee.toLocaleString()}/mo</strong> for this budget).
                  With Adocial, you pay a flat <strong>$300/mo</strong> retainer—saving you approximately <strong>${monthlySavings.toLocaleString()} every month</strong> to reinvest directly into winning ads.
                </p>
              </div>
            </div>

            {/* Right Output: Financial Projection Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-950 p-6 sm:p-7 rounded-2xl border border-blue-900/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs uppercase font-bold tracking-wider text-blue-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Projected Monthly Returns
              </span>

              <div className="mt-5">
                <span className="text-xs text-slate-400 block font-medium">Estimated Gross Sales</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight block mt-1">
                  ${projectedRevenue.toLocaleString()}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 block font-medium">Net Gross Margin Lift (after ad spend)</span>
                <span className="text-2xl font-bold text-emerald-400 font-mono block mt-1">
                  +${netProfitGain.toLocaleString()}
                </span>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3.5 px-5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-600/25 active:scale-95 cursor-pointer"
                >
                  <span>Build This Campaign Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[10px] text-slate-400 text-center block mt-2">
                  15-min discovery call • Zero obligation audit
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
