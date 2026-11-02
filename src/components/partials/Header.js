"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

// Images
import logo from "@public/images/logo/logo.png";

export default function Header() {
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
        {/* Adocial Official Logo */}
        <Link href="/" className="inline-block group">
          <Image
            src={logo}
            alt="Adocial - Performance Advertising Agency"
            priority
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation Links (Visible on Large Screens & Laptops >= 1024px) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 text-xs font-semibold text-slate-600">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 xl:px-4 py-1.5 xl:py-2 text-[11px] xl:text-xs rounded-full hover:text-charcoal hover:bg-white transition-all whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs - 100% WhatsApp Exclusive (>= 1024px) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile & Tablet Quick Controls (< 1024px) */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-2.5">
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm active:scale-95"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden xs:inline sm:inline">WhatsApp</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-charcoal hover:bg-slate-100 transition-colors border border-slate-200/80 bg-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (< 1024px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
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
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Message on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
