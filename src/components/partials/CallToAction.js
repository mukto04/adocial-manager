"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function CallToAction() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Architectural Blue Accent Card */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-charcoal via-[#141E30] to-cobalt-950 text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Decorative Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cobalt-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] uppercase font-bold text-cyan-300 mb-6">
              <span className="w-6 h-[1px] bg-cyan-400/50"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>DIRECT STRATEGIC PARTNERSHIP</span>
              <span className="w-6 h-[1px] bg-cyan-400/50"></span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Ready to Make Your Ad Spend Work Smarter?
            </h2>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Tell us about your business and goals. Let&apos;s explore how a more strategic approach to advertising could help you reach qualified buyers and scale predictably.
            </p>

            {/* Action Buttons - 100% WhatsApp */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-xl hover:shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp Directly</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Guarantees Bar */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>15-Minute Zero Obligation Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No Long-Term Contracts (30-Day Terms)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Client-Owned Account Access</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
