"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowUpRight } from "lucide-react";

export default function Faq({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What advertising platforms do you manage?",
      a: "We specialize primarily in Meta Ads (Facebook & Instagram) and Google Ads (Search & Performance Max). For select e-commerce and lead-generation clients, we also deploy retargeting and tracking infrastructure across both ecosystems to ensure seamless omnichannel attribution.",
    },
    {
      q: "Which businesses do you work with?",
      a: "We partner with small and medium-sized businesses, direct-to-consumer (DTC) e-commerce brands, and high-ticket service businesses primarily based in the USA, UK, Canada, Australia, and other English-speaking international markets who have a proven offer and are ready to scale with predictable paid traffic.",
    },
    {
      q: "What budget should I start with?",
      a: "While there is no rigid minimum, we generally recommend starting with an ad spend budget of at least $2,000 to $5,000 per month. This provides sufficient conversion data for the Meta and Google machine-learning algorithms to exit the learning phase and optimize bidding effectively.",
    },
    {
      q: "How does the onboarding process work?",
      a: "Our onboarding is seamless and completed within 48 hours. You grant official Partner Access to your Meta Business Portfolio and Google Ads MCC ID. We never ask for or store your personal passwords. Once access is active, we immediately audit tracking, install server-side CAPI if needed, and draft the initial testing roadmap.",
    },
    {
      q: "When can I expect initial campaign insights?",
      a: "Initial creative testing signals (such as 3-second hook thumbstop rates, outbound click-through rates, and initial lead costs) typically emerge within the first 7 to 10 days of active spend. From there, we prune underperforming variants and reallocate capital into validated creative angles.",
    },
    {
      q: "How do you report campaign performance?",
      a: "We believe in direct, transparent communication. You receive a live, 24/7 Looker Studio dashboard connected directly to your ad accounts, along with weekly Loom video walkthroughs explaining what we tested, what scaled, and what decisions are planned for the upcoming week.",
    },
    {
      q: "How do we get started?",
      a: "The first step is a 15-minute introductory strategy conversation. We discuss your current ad account performance, unit margins, and growth objectives. If there is mutual alignment, we deliver a concrete proposal and can begin onboarding within 48 hours.",
    },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-50 border border-cobalt-200/60 text-xs font-semibold text-cobalt-700 tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600" />
            Frequently Asked Questions
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.12]">
            Straightforward Answers to Common Questions.
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal leading-relaxed">
            Honest clarity on our management process, budget recommendations, and working relationship.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "bg-slate-50/70 border-slate-300 shadow-sm"
                    : "bg-white border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-charcoal tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-cobalt-600 text-white"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs sm:text-sm text-slate-600">
            <span className="font-bold text-charcoal block">Have a specific question not listed here?</span>
            <span>We are always available to review your unit economics and ad account structure.</span>
          </div>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-charcoal text-white text-xs font-bold hover:bg-cobalt-600 transition-colors shrink-0"
          >
            <span>Ask Us Directly</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
