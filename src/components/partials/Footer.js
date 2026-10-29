"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageSquare, Mail, Globe, Shield } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

// Images
import logo from "@public/images/logo/logo.png";

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 text-charcoal pt-16 pb-12">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-200">
          
          {/* Column 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Adocial"
                quality={100}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-sm">
              Performance advertising agency partnering with ambitious businesses across the USA, UK, Canada, Australia, and international markets. We turn ad spend into smarter, predictable commercial growth.
            </p>

            <div className="pt-1 flex flex-col space-y-2 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-cobalt-600" />
                <span>Operating Timezones: {siteConfig.contact.officeTimezones}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cobalt-600" />
                <span>Direct Inquiries: <a href={`mailto:${siteConfig.contact.email}`} className="text-charcoal hover:underline">{siteConfig.contact.email}</a></span>
              </div>
            </div>
          </div>

          {/* Column 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">
              Core Capabilities
            </span>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <a href="#services" className="hover:text-cobalt-600 transition-colors">
                  Meta Ads Management (FB &amp; IG)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cobalt-600 transition-colors">
                  Google Search &amp; Performance Max
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cobalt-600 transition-colors">
                  Server-Side CAPI Tracking (Cloudflare)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cobalt-600 transition-colors">
                  Dynamic Creative Testing (DCT)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cobalt-600 transition-colors">
                  Attribution &amp; Looker Studio Reporting
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">
              Company
            </span>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <a href="#approach" className="hover:text-cobalt-600 transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#intelligence" className="hover:text-cobalt-600 transition-colors">
                  Intelligence
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cobalt-600 transition-colors">
                  About Adocial
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cobalt-600 transition-colors">
                  Frequently Asked
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Engagement (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">
              Connect
            </span>
            <div className="space-y-2.5">
              <button
                onClick={onOpenBooking}
                className="w-full text-left text-xs font-bold text-cobalt-600 hover:text-cobalt-700 flex items-center justify-between py-1"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center justify-between py-1"
              >
                <span>WhatsApp Chat</span>
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6 font-medium text-slate-500">
            <button
              onClick={onOpenBooking}
              className="hover:text-charcoal transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenBooking}
              className="hover:text-charcoal transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <span>adocial.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
