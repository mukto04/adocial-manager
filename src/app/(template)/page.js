"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, MessageSquare, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

// Components
import Header from "@/components/partials/Header";
import PlatformStrip from "@/components/partials/PlatformStrip";
import ServicesShowcase from "@/components/partials/ServicesShowcase";
import LiveCampaignDashboard from "@/components/partials/LiveCampaignDashboard";
import ProcessSection from "@/components/partials/ProcessSection";
import RoasCalculator from "@/components/partials/RoasCalculator";
import CaseStudyGrid from "@/components/partials/CaseStudyGrid";
import PricingSection from "@/components/partials/PricingSection";
import CallToAction from "@/components/partials/CallToAction";
import HeroVideoShowcase from "@/components/partials/HeroVideoShowcase";
import Footer from "@/components/partials/Footer";
import BookingModal from "@/components/shared/BookingModal";
import FloatingButton from "@/components/partials/FloatingButton";

const ROTATING_WORDS = [
  { prefix: "smarter", accent: "growth." },
  { prefix: "real", accent: "revenue." },
  { prefix: "scale &", accent: "profit." },
  { prefix: "measurable", accent: "ROI." },
];

const FAQ_ITEMS = [
  {
    q: "How do we give you access to our ad accounts?",
    a: "You never give us your password. You simply invite our verified agency partner ID into your Meta Business Portfolio or Google Ads Manager with Media Buyer permissions. You retain 100% root ownership and control over your budget.",
  },
  {
    q: "How does the $300/month flat retainer work?",
    a: "You hire Adocial as your dedicated remote Ads Manager. We build, monitor, test, and optimize your ad campaigns. Ad spend is billed directly to your credit card by Meta/Google with zero agency markup. No long-term lock-in—agreements are rolling 30-day terms.",
  },
  {
    q: "What makes your server-side CAPI different from standard pixels?",
    a: "Browser pixels lose 30%–45% of customer data due to iOS 14.5+, ad blockers, and cookie timeouts. Our server-side CAPI integration delivers first-party events directly from your server to Meta and Google, restoring accurate attribution and lowering your blended CAC.",
  },
  {
    q: "How quickly will campaigns be launched?",
    a: "Following our initial discovery and account audit (Step 1), full tracking verification and new campaign architectures are live within 3 to 5 business days.",
  },
  {
    q: "How do we get started?",
    a: "Click 'Book a free strategy call' or message us on WhatsApp. We’ll review your business economics, past ad history, and show you our proposed scaling blueprint.",
  },
];

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordState, setWordState] = useState("active");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elementsToReveal = document.querySelectorAll(".scroll-reveal");

    let observer;
    if ("IntersectionObserver" in window && !reduced) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      elementsToReveal.forEach((el) => observer.observe(el));
    } else {
      elementsToReveal.forEach((el) => el.classList.add("is-in-view"));
    }

    // Pointer-based 3D tilt for service cards
    const cleanupFns = [];
    if (!reduced && window.matchMedia("(pointer:fine)").matches) {
      document.querySelectorAll(".service-card").forEach((card) => {
        const handleMove = (e) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `translateY(-6px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
        };
        const handleLeave = () => {
          card.style.transform = "";
        };

        card.addEventListener("pointermove", handleMove);
        card.addEventListener("pointerleave", handleLeave);
        cleanupFns.push(() => {
          card.removeEventListener("pointermove", handleMove);
          card.removeEventListener("pointerleave", handleLeave);
        });
      });
    }

    // Auto-running kinetic headline rotator
    const wordInterval = setInterval(() => {
      setWordState("slide-out");
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setWordState("slide-in");
        setTimeout(() => {
          setWordState("active");
        }, 50);
      }, 400);
    }, 3200);

    cleanupFns.push(() => clearInterval(wordInterval));

    return () => {
      if (observer) observer.disconnect();
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      {/* ─── Ultra-Sleek Sticky Header ─── */}
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* ─── Main Content ─── */}
      <main className="pt-20 sm:pt-24">
        {/* ─── Hero Section ─── */}
        <section className="hero" id="home">
          <div className="wrap hero-grid relative z-10">
            <div className="hero-copy-wrap">
              {/* Executive Kicker Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-900 text-xs font-semibold shadow-sm backdrop-blur mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-800">
                  Performance Media Buying &amp; CAPI
                </span>
                <span className="text-blue-300">|</span>
                <span className="text-[10px] font-mono text-emerald-700 font-bold bg-white px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                  SCALING WORLDWIDE
                </span>
              </div>
              
              <h1 className="hero-heading">
                <span className="block">Turn ad spend into</span>
                <span className="rotating-word-wrap">
                  <span className={`rotating-word ${wordState}`}>
                    <span className="rotating-word-prefix">{ROTATING_WORDS[wordIndex].prefix}</span>{" "}
                    <span className="rotating-word-accent">{ROTATING_WORDS[wordIndex].accent}</span>
                  </span>
                </span>
              </h1>

              <p className="hero-copy">
                We engineer full-funnel paid acquisition across Meta &amp; Google.
                Direct management inside your own ad accounts with 100% data transparency and predictable algorithmic scaling.
              </p>

              <div className="hero-actions">
                <button 
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Book Free Strategy Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a 
                  href="#approach" 
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-full border border-slate-200/90 shadow-sm transition-all hover:border-slate-300"
                >
                  View Live Engine
                </a>
              </div>

              {/* Executive Proof & Principles */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-3">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-800">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Meta Certified Media Buying</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Google Premier Partner</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>$3.4M+ Audited Spend</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-mono text-slate-500">
                  <span className="text-slate-600 font-medium">✓ Server-Side CAPI</span>
                  <span>•</span>
                  <span className="text-slate-600 font-medium">✓ 7-Day Hook Sprints</span>
                  <span>•</span>
                  <span className="text-slate-600 font-medium">✓ 100% Client Ownership</span>
                </div>
              </div>
            </div>

            {/* 16:9 4K Video Showcase */}
            <HeroVideoShowcase />
          </div>
        </section>

        {/* ─── Platform Ecosystem Strip ─── */}
        <PlatformStrip />

        {/* ─── Services Section ─── */}
        <ServicesShowcase onOpenBooking={() => setBookingOpen(true)} />

        {/* ─── Section 02: Cinematic Dark Architecture Studio & Live Dashboard ─── */}
        <section className="py-24 sm:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800" id="approach">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Architectural Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b22_1px,transparent_1px),linear-gradient(to_bottom,#1e293b22_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10">
            {/* Header row */}
            <div className="max-w-2xl mb-14 scroll-reveal">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/60">
                  02 / The Adocial Architecture
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.2]">
                Every click has a story. We engineer the outcome.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Advertising scales predictably when audience intent, dynamic creative testing, and first-party server attribution operate as a synchronized engine.
              </p>
            </div>

            {/* Main Grid: Left Terminal, Right Strategy Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left 7 Columns: Live Campaign Terminal */}
              <div className="lg:col-span-7 scroll-reveal">
                <LiveCampaignDashboard />
              </div>

              {/* Right 5 Columns: 3 High-Fidelity Pillar Cards */}
              <div className="lg:col-span-5 space-y-4 scroll-reveal scroll-stagger-1">
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white">
                        100% Client Account Ownership
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        You invite us as partner media buyers into your Meta and Google Ads portfolios. All ad spend is billed directly to your card with zero agency markup.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white">
                        First-Party Server-Side CAPI
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Full iOS 14.5+ attribution recovery. We deploy server tokens directly on Cloudflare so ad algorithms receive 100% verified conversion signals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white">
                        7-Day High-Velocity Creative Sprints
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        We test fresh video hooks, UGC variations, and headline angles every 7 days—cutting non-performing ads fast and scaling winners.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Action */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="w-full py-3.5 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Live Account Strategy Audit</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Process Section ─── */}
        <ProcessSection />

        {/* ─── Interactive ROAS & Profit Scale Calculator ─── */}
        <RoasCalculator onOpenBooking={() => setBookingOpen(true)} />

        {/* ─── Verified Case Studies (Proof) ─── */}
        <CaseStudyGrid onOpenBooking={() => setBookingOpen(true)} />

        {/* ─── Transparent Pricing Section ($300/mo flat retainer & 10-15% spend share) ─── */}
        <PricingSection onOpenBooking={() => setBookingOpen(true)} />

        {/* ─── FAQ Section with Silky Smooth Accordion ─── */}
        <section className="py-24 bg-slate-50/70 border-t border-slate-200/80" id="faq">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5 scroll-reveal">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60">
                    07 / Agency FAQ
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                  Clear answers to common questions.
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Everything you need to know about partnering with Adocial, root account access, and terms.
                </p>

                <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Have a specific question?</span>
                  <p className="text-sm text-slate-800 font-bold mt-1">Our team replies within 15 minutes.</p>
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 mt-3"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Message on WhatsApp ↗</span>
                  </a>
                </div>
              </div>

              {/* Animated Accordion List */}
              <div className="lg:col-span-7 space-y-3.5 scroll-reveal scroll-stagger-1">
                {FAQ_ITEMS.map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-300"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{item.q}</span>
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                          isOpen ? "bg-blue-600 text-white border-blue-600 rotate-180" : "bg-slate-50 text-slate-500 border-slate-200"
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isOpen ? "max-h-96 opacity-100 px-5 sm:px-6 pb-6 pt-0" : "max-h-0 opacity-0 px-5 sm:px-6 py-0"
                        }`}
                      >
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ─── Final Call To Action Box ─── */}
        <CallToAction onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* ─── Footer ─── */}
      <Footer />

      {/* ─── Lead Strategy Booking Modal ─── */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* ─── Floating Quick Action Controls ─── */}
      <FloatingButton onOpenBooking={() => setBookingOpen(true)} />
    </>
  );
}
