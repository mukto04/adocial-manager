"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-luxury">
      {/* Subtle ambient light glows */}
      <div className="footer-ambient-glow glow-1" aria-hidden="true"></div>
      <div className="footer-ambient-glow glow-2" aria-hidden="true"></div>

      <div className="wrap footer-wrap">
        {/* Top Utility Bar */}
        <div className="footer-utility-bar">
          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* Clean, Spacious 4-Column Layout */}
        <div className="footer-main-grid">
          {/* Column 1: Brand & Direct Line */}
          <div className="footer-col-brand">
            <Link href="#home" className="footer-brand-logo" aria-label="Adocial home">
              <Image
                src={logo}
                alt="Adocial"
                priority
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="footer-brand-bio">
              Thoughtful performance advertising engineered to scale ambitious brands with clarity,
              rigorous testing, and predictable revenue.
            </p>

            <div className="footer-connect-row">
              <a
                href="https://wa.me/YOUR_PHONE_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-connect-pill"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.67-1.39 1.28-1.92 1.34-.51.06-1.17.09-3.76-.98-3.15-1.3-5.18-4.52-5.34-4.73-.16-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.29 1.1-2.6.29-.31.64-.39.85-.39.21 0 .43 0 .61.01.2.01.46-.07.72.55.26.62.9 2.19.98 2.35.08.16.13.35.03.56-.1.21-.15.34-.3.51-.15.17-.32.38-.45.51-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.37 2.49 1.52.31.15.49.13.67-.08.18-.21.77-.9 1-.1.21.23.41.28.69.15.28-.13 1.77-.83 2.07-.98.3-.15.51-.23.59-.36.08-.13.08-.77-.16-1.44z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:YOUR_EMAIL@example.com?subject=Adocial%20Strategy%20Inquiry"
                className="footer-connect-pill"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Email Team</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#services">Services <span>↗</span></a></li>
              <li><a href="#approach">Our Approach <span>↗</span></a></li>
              <li><a href="#insights">Our Thinking <span>↗</span></a></li>
              <li><a href="#faq">FAQ <span>↗</span></a></li>
            </ul>
          </div>

          {/* Column 3: Advertising Channels */}
          <div className="footer-col">
            <h4 className="footer-col-title">Channels</h4>
            <ul className="footer-nav-list">
              <li><a href="#services">Meta Ads (Facebook & IG)</a></li>
              <li><a href="#services">Google Search & PMax</a></li>
              <li><a href="#services">YouTube Action Ads</a></li>
              <li><a href="#services">Conversion Tracking & CAPI</a></li>
            </ul>
          </div>

          {/* Column 4: Engagement */}
          <div className="footer-col">
            <h4 className="footer-col-title">Get In Touch</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#contact" className="footer-highlight-link">
                  Book Strategy Call <span>↗</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer">
                  Quick WhatsApp Chat
                </a>
              </li>
              <li>
                <a href="mailto:YOUR_EMAIL@example.com">
                  Direct Partnership Mail
                </a>
              </li>
            </ul>
            <div className="footer-response-tag">
              <span className="response-dot"></span>
              <span>Avg. response under 2 hours</span>
            </div>
          </div>
        </div>

        {/* Big Subtle Architectural Watermark */}
        <div className="footer-giant-watermark" aria-hidden="true">
          <span>ADOCIAL</span>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            <span suppressHydrationWarning>© {currentYear} Adocial. All rights reserved.</span>
            <span className="footer-sep">·</span>
            <span>Performance Advertising Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
