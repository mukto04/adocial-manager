"use client";

import { motion } from "framer-motion";
import { Search, Compass, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      name: "Discover",
      duration: "Days 1–3",
      icon: Search,
      title: "Business, Offer & Economics Audit",
      description:
        "We analyze your unit margins, target customer profile, previous ad account data, and historical acquisition costs. We clarify break-even ROAS thresholds before planning media spend.",
      deliverables: [
        "Historical ad account audit",
        "Target CAC & margin modeling",
        "Competitor creative landscape",
      ],
    },
    {
      num: "02",
      name: "Strategize",
      duration: "Days 4–7",
      icon: Compass,
      title: "Channel & Testing Architecture",
      description:
        "We build a concrete media plan mapping budget allocation between Meta testing sandboxes, Google search capture, and retargeting feeds. We establish weekly testing schedules.",
      deliverables: [
        "Full-funnel campaign architecture",
        "Creative testing framework (DCT)",
        "Negative keyword & audience blueprints",
      ],
    },
    {
      num: "03",
      name: "Launch",
      duration: "Week 2",
      icon: Rocket,
      title: "Tracking Infrastructure & Testing Launch",
      description:
        "We deploy server-side CAPI tracking, configure conversion events, and launch controlled creative tests with dedicated budget pacing rules. Zero personal passwords shared.",
      deliverables: [
        "Server-Side CAPI installation",
        "Meta Business Portfolio access",
        "Controlled initial test ad sets",
      ],
    },
    {
      num: "04",
      name: "Optimize",
      duration: "Ongoing",
      icon: TrendingUp,
      title: "Systematic Iteration & Safe Scaling",
      description:
        "We review performance data weekly, prune fatigued creative variations, and scale winning ad sets safely via 20% budget pacing rules. Delivered via direct video walkthroughs.",
      deliverables: [
        "Weekly Loom video audits",
        "20% vertical scaling rules",
        "Live Looker Studio reporting",
      ],
    },
  ];

  return (
    <section id="approach" className="py-24 lg:py-32 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600" />
            Execution Methodology
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.12]">
            A Transparent, 4-Stage Pathway to Predictable Scale.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            From initial economic analysis to weekly creative testing and automated bid rules, every stage of our engagement is structured for clarity and accountability.
          </p>
        </div>

        {/* 4 Connected Cards Rail */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                    <span className="font-mono text-2xl font-extrabold text-slate-300">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {step.duration}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-cobalt-50 text-cobalt-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-xs font-bold text-cobalt-600 uppercase tracking-wider block mb-1">
                    Stage {step.num} — {step.name}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-charcoal tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Outputs:
                  </span>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cobalt-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

