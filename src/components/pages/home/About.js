"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Lock, Users, Globe2, Sparkles } from "lucide-react";

export default function About() {
  const commitments = [
    {
      title: "100% Client Account Ownership",
      desc: "We connect exclusively via official Meta Business Portfolio and Google MCC partner access. You retain full administrative control and revoke privileges at any time.",
    },
    {
      title: "No 6-Month Lock-in Terms",
      desc: "We operate on rolling 30-day agreements. We believe performance marketing agencies should earn their client retention through consistent weekly results, not binding legal contracts.",
    },
    {
      title: "Senior Media Buying Attention",
      desc: "Your account is never handed off to an inexperienced intern. You work directly with a senior performance marketer who understands unit economics and media strategy.",
    },
    {
      title: "Transparent Reporting & Direct Slack",
      desc: "Direct communication via private Slack and weekly video walkthroughs. Live Looker Studio reporting dashboards accessible 24/7 without vanity metrics.",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Story & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600" />
              About Adocial
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.12]">
              A Thoughtful, Accountable Advertising Partner.
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Adocial was created to solve a persistent frustration in the digital marketing industry: ambitious businesses spending thousands on ads while receiving murky reports, generic templates, and zero strategic clarity.
              </p>
              <p>
                We do not treat paid advertising as a game of luck. We treat it as an engineering discipline—combining rigorous margin modeling, structured dynamic creative testing, and resilient server-side tracking.
              </p>
              <p>
                Whether you are an established e-commerce brand or a high-ticket service business in the USA, UK, Canada, or Australia, our commitment is straightforward: thoughtful strategy, complete transparency, and measurable commercial growth.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-cobalt-600" />
                <span>Global English Markets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-cobalt-600" />
                <span>Zero Password Sharing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Operating Commitments Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {commitments.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-cobalt-50 text-cobalt-600 flex items-center justify-center font-mono font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-charcoal tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Guaranteed Standard</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

