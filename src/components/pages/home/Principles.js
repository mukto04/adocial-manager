"use client";

import { motion } from "framer-motion";
import { Compass, BarChart3, RefreshCw, Eye } from "lucide-react";

export default function Principles() {
  const principles = [
    {
      num: "01",
      icon: Compass,
      title: "Strategy Before Spending",
      description:
        "We never push ad budget into the auction without first dissecting your offer economics, customer acquisition thresholds, and competitor landscape. Media spend without deep strategic preparation is merely speculation.",
      highlight: "Unit economics mapped first",
    },
    {
      num: "02",
      icon: BarChart3,
      title: "Clear & Meaningful Measurement",
      description:
        "Browser cookies and default platform pixels now suffer severe attribution blindness. We deploy server-side event tracking so you have reliable data to understand exactly which ad sets generate genuine business revenue.",
      highlight: "Server-side CAPI signal integrity",
    },
    {
      num: "03",
      icon: RefreshCw,
      title: "Continuous Campaign Optimization",
      description:
        "Paid advertising is an iterative discipline. We isolate variables through systematic creative hook testing, audience segmentation, and algorithmic bid rule calibration rather than sporadic or emotional account changes.",
      highlight: "Structured hypothesis testing",
    },
    {
      num: "04",
      icon: Eye,
      title: "Transparent Communication",
      description:
        "You always retain 100% direct ownership of your ad accounts, pixels, and customer data. We communicate through weekly video walkthroughs and live Looker Studio dashboards with zero technical gatekeeping.",
      highlight: "100% client account ownership",
    },
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600" />
            Our Operating Principles
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.12]">
            Advertising Built on Discipline, Not Guesswork.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We operate with the conviction that advertising should be a predictable revenue engine.
            These four foundational commitments guide every campaign we manage.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-cobalt-600 bg-cobalt-50 px-2.5 py-1 rounded-full border border-cobalt-100">
                      PRINCIPLE {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-charcoal">
                      <Icon className="w-5 h-5 text-cobalt-600" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="text-slate-400">Core Standard:</span>
                  <span className="text-cobalt-700">{item.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

