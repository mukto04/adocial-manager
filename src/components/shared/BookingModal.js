"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, MessageSquare, ShieldCheck, Sparkles, Send } from "lucide-react";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/siteConfig";

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    platform: "Both (Meta & Google)",
    spend: "$5,000 - $15,000/mo",
    timezone: "US (EST/PST)",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please provide your name and work email.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {}
      toast.success("Strategy request received! We'll reply within 24 hours.");
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleReset}
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="relative bg-white w-full max-w-xl rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-8 z-10 my-8"
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-charcoal transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          /* Confirmation Success State */
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-charcoal">
              Strategy Request Received
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-charcoal">{form.name}</strong>. A senior media buyer from Adocial will review your business economics and contact you at <strong className="text-charcoal">{form.email}</strong> within 24 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Chat on WhatsApp</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 text-charcoal font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cobalt-50 text-cobalt-700 text-[10px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Free 15-Minute Strategy Review</span>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-charcoal tracking-tight">
                Let&apos;s Discuss Your Ad Strategy
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Zero sales pressure. We evaluate unit margins and determine if paid advertising can scale your offer.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-charcoal focus:outline-none focus:border-cobalt-600 focus:ring-1 focus:ring-cobalt-600 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-charcoal focus:outline-none focus:border-cobalt-600 focus:ring-1 focus:ring-cobalt-600 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Business Website
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. yourbrand.com"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-charcoal focus:outline-none focus:border-cobalt-600 focus:ring-1 focus:ring-cobalt-600 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Timezone
                  </label>
                  <select
                    value={form.timezone}
                    onChange={(e) => setForm({ ...form, timezone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-charcoal focus:outline-none focus:border-cobalt-600 focus:ring-1 focus:ring-cobalt-600 transition-all bg-white"
                  >
                    <option value="US (EST/PST)">USA &amp; Canada (EST / PST)</option>
                    <option value="UK (GMT)">United Kingdom (GMT / BST)</option>
                    <option value="AU (AEST)">Australia (AEST / AWST)</option>
                    <option value="Europe / Other">Europe / Other International</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Primary Channel
                  </label>
                  <select
                    value={form.platform}
                    onChange={(e) => setForm({ ...form, platform: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-charcoal focus:outline-none focus:border-cobalt-600 focus:ring-1 focus:ring-cobalt-600 transition-all bg-white"
                  >
                    <option value="Meta Ads (FB/IG)">Meta Ads (Facebook &amp; Instagram)</option>
                    <option value="Google Ads (Search/PMax)">Google Ads (Search &amp; PMax)</option>
                    <option value="Both (Meta & Google)">Both Meta &amp; Google Omnichannel</option>
                    <option value="Tracking & CAPI Only">Tracking &amp; CAPI Optimization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Monthly Ad Budget
                  </label>
                  <select
                    value={form.spend}
                    onChange={(e) => setForm({ ...form, spend: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-charcoal focus:outline-none focus:border-cobalt-600 focus:ring-1 focus:ring-cobalt-600 transition-all bg-white"
                  >
                    <option value="$2,000 - $5,000/mo">$2,000 – $5,000 / month</option>
                    <option value="$5,000 - $15,000/mo">$5,000 – $15,000 / month</option>
                    <option value="$15,000 - $50,000/mo">$15,000 – $50,000 / month</option>
                    <option value="$50,000+/mo">$50,000+ / month (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Brief Goal or Current Hurdle (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Scaling Meta CPA, setting up server-side CAPI, or capturing high-intent Google search traffic..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-charcoal focus:outline-none focus:border-cobalt-600 focus:ring-1 focus:ring-cobalt-600 transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-cobalt-600 hover:bg-cobalt-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] disabled:opacity-60"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Strategy Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              {/* Trust Footer */}
              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cobalt-600" />
                  Zero Passwords Shared
                </span>
                <span>•</span>
                <span>100% Client-Owned Accounts</span>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
