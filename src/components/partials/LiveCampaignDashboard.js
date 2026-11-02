"use client";

import React, { useState } from "react";
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Layers, 
  BarChart3, 
  Activity, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export default function LiveCampaignDashboard() {
  const [activeTab, setActiveTab] = useState("meta");

  return (
    <div className="relative rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl overflow-hidden p-4 sm:p-7">
      {/* Top Console Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold tracking-wider uppercase text-slate-300">
            Adocial Intelligence Engine
          </span>
          <span className="hidden sm:inline-block text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700 font-mono">
            LIVE CAPI 2026
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs w-full sm:w-auto justify-between sm:justify-start">
          <button
            onClick={() => setActiveTab("meta")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === "meta"
                ? "bg-blue-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Meta Ads
          </button>
          <button
            onClick={() => setActiveTab("google")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === "google"
                ? "bg-blue-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Google Ads
          </button>
          <button
            onClick={() => setActiveTab("capi")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === "capi"
                ? "bg-blue-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            CAPI Signal
          </button>
        </div>
      </div>

      {/* 4 Core Real-Time KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 my-4 sm:my-5">
        <div className="bg-slate-950/70 p-3 sm:p-3.5 rounded-2xl border border-slate-800">
          <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">30-Day Spend</span>
          <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2 mt-1">
            <span className="text-lg sm:text-2xl font-black text-white">$48,620</span>
            <span className="text-[10px] text-emerald-400 font-bold flex items-center">
              +18.4%
            </span>
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">Scaled with margin</span>
        </div>

        <div className="bg-slate-950/70 p-3 sm:p-3.5 rounded-2xl border border-slate-800">
          <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">Revenue</span>
          <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2 mt-1">
            <span className="text-lg sm:text-2xl font-black text-emerald-400">$214,890</span>
            <span className="text-[10px] text-emerald-400 font-bold flex items-center">
              +34.2%
            </span>
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">First-party verified</span>
        </div>

        <div className="bg-slate-950/70 p-3 sm:p-3.5 rounded-2xl border border-slate-800">
          <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">Blended ROAS</span>
          <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2 mt-1">
            <span className="text-lg sm:text-2xl font-black text-blue-400">4.42x</span>
            <span className="text-[10px] text-slate-400 font-medium hidden xs:inline sm:inline">vs 3.2x</span>
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">Across full funnel</span>
        </div>

        <div className="bg-slate-950/70 p-3 sm:p-3.5 rounded-2xl border border-slate-800">
          <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">Match Quality</span>
          <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2 mt-1">
            <span className="text-lg sm:text-2xl font-black text-emerald-400">9.6 / 10</span>
            <span className="text-[10px] text-emerald-400 font-bold">Great</span>
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">Zero iOS dropoff</span>
        </div>
      </div>

      {/* Dynamic Campaign Stream based on Active Tab */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800/90 overflow-hidden">
        <div className="px-4 py-3 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
          <span>Active Campaign Structure</span>
          <span className="hidden sm:inline">Status &amp; Efficiency</span>
        </div>

        <div className="divide-y divide-slate-800/60 font-sans text-xs">
          {activeTab === "meta" && (
            <>
              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/40 transition-colors">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="font-bold text-white break-words">[Scale] Advantage+ Shopping</span>
                    <span className="text-[10px] bg-blue-900/50 text-blue-300 border border-blue-700/50 px-1.5 py-0.5 rounded shrink-0">
                      Meta CAPI
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">
                    Dynamic creative testing • 8 top video hooks
                  </span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60 text-left sm:text-right shrink-0">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Spend</span>
                    <span className="font-semibold text-white">$24,180</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">ROAS</span>
                    <span className="font-bold text-emerald-400 text-sm">4.90x</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/40 transition-colors">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="font-bold text-white break-words">[Testing] UGC Angles Sprint #12</span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded shrink-0">
                      IG Reels
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">
                    Problem-solution vs. Unboxing split test
                  </span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60 text-left sm:text-right shrink-0">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Spend</span>
                    <span className="font-semibold text-white">$6,450</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">ROAS</span>
                    <span className="font-bold text-emerald-400 text-sm">4.15x</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/40 transition-colors">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                    <span className="font-bold text-white break-words">[Retargeting] MOFU / BOFU Catalog</span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded shrink-0">
                      High Intent
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">
                    Viewed content 30d • Excluded purchasers
                  </span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60 text-left sm:text-right shrink-0">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Spend</span>
                    <span className="font-semibold text-white">$4,820</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">ROAS</span>
                    <span className="font-bold text-emerald-400 text-sm">6.24x</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "google" && (
            <>
              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/40 transition-colors">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="font-bold text-white break-words">[Search] High-Intent Terms</span>
                    <span className="text-[10px] bg-emerald-900/40 text-emerald-300 border border-emerald-700/40 px-1.5 py-0.5 rounded shrink-0">
                      Smart Bidding
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">
                    Negative keyword sculpted • 94% Impression Share
                  </span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60 text-left sm:text-right shrink-0">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Cost/Conv</span>
                    <span className="font-semibold text-white">$28.40</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Conv Rate</span>
                    <span className="font-bold text-emerald-400 text-sm">8.6%</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/40 transition-colors">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="font-bold text-white break-words">[PMax] Performance Max Feed</span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded shrink-0">
                      Omnichannel
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">
                    YouTube + Maps + Display audience signals
                  </span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60 text-left sm:text-right shrink-0">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Spend</span>
                    <span className="font-semibold text-white">$8,120</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">ROAS</span>
                    <span className="font-bold text-emerald-400 text-sm">4.35x</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "capi" && (
            <>
              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/40 transition-colors">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="font-bold text-white break-words">Cloudflare Gateway CAPI</span>
                    <span className="text-[10px] bg-emerald-900/40 text-emerald-300 border border-emerald-700/40 px-1.5 py-0.5 rounded shrink-0">
                      Active
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">
                    First-party server token • 100% delivery
                  </span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60 text-left sm:text-right shrink-0">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Latency</span>
                    <span className="font-semibold text-white">42ms</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Match Score</span>
                    <span className="font-bold text-emerald-400 text-sm">9.6/10</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/40 transition-colors">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="font-bold text-white break-words">Deduplication Engine (fbp &amp; fbc)</span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded shrink-0">
                      Zero Dupes
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">
                    Multi-touch event ID verification
                  </span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60 text-left sm:text-right shrink-0">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Loss Rate</span>
                    <span className="font-semibold text-emerald-400">0.0%</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Events</span>
                    <span className="font-bold text-white text-sm">34,180</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Proof Tagline */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Full transparency: You own 100% of your ad account data</span>
        </span>
        <span className="text-slate-400 font-medium">
          Zero markup on ad spend
        </span>
      </div>
    </div>
  );
}
