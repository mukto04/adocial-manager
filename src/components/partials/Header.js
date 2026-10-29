"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Adocial Wordmark */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cobalt-600 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:bg-cobalt-700 transition-colors">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl text-charcoal tracking-tight leading-none">
              Adocial<span className="text-cobalt-600">.</span>
            </span>
            <span className="text-[10px] font-medium tracking-wider text-slate-500 uppercase mt-0.5">
              Performance Advertising
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 text-xs font-semibold text-slate-600">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full hover:text-charcoal hover:bg-white transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          {/* Quick WhatsApp Link */}
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {/* Primary Let's Talk CTA */}
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-charcoal text-white hover:bg-cobalt-600 transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-charcoal hover:bg-slate-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 space-y-4">
              <nav className="flex flex-col space-y-3">
                {siteConfig.navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-charcoal hover:text-cobalt-600 py-1 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl bg-cobalt-600 text-white font-bold text-sm text-center shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Book Free Strategy Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Message Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
