"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Dynamic import of official logo from project files
import logo from "@public/images/logo/logo.png";
import PlatformStrip from "@/components/partials/PlatformStrip";
import ProcessSection from "@/components/partials/ProcessSection";
import HeroAdPortal from "@/components/partials/HeroAdPortal";
import PricingSection from "@/components/partials/PricingSection";
import Footer from "@/components/partials/Footer";

const ROTATING_WORDS = [
  { prefix: "smarter", accent: "growth." },
  { prefix: "real", accent: "revenue." },
  { prefix: "scale &", accent: "profit." },
  { prefix: "measurable", accent: "ROI." },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordState, setWordState] = useState("active");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .depth-in"
    );

    let observer;
    if ("IntersectionObserver" in window && !reduced) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.13, rootMargin: "0px 0px -35px 0px" }
      );
      revealEls.forEach((el) => observer.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("in-view"));
    }

    // Interactive process progression as the user scrolls through each step
    const steps = [...document.querySelectorAll(".step")];
    let stepObserver;
    if ("IntersectionObserver" in window && !reduced) {
      stepObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              steps.forEach((step) => step.classList.remove("active"));
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.65 }
      );
      steps.forEach((step) => stepObserver.observe(step));
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

      // Pointer-responsive 3D sculpture parallax
      const scene = document.querySelector(".scene");
      const sculpture = document.getElementById("sculpture");
      if (scene && sculpture) {
        const handleSceneMove = (e) => {
          const r = scene.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          sculpture.style.animationPlayState = "paused";
          sculpture.style.transform = `translate3d(${x * 12}px,${y * -12}px,0) rotateY(${-6 + x * 8}deg) rotateX(${4 - y * 6}deg)`;
        };
        const handleSceneLeave = () => {
          sculpture.style.transform = "";
          sculpture.style.animationPlayState = "running";
        };

        scene.addEventListener("pointermove", handleSceneMove);
        scene.addEventListener("pointerleave", handleSceneLeave);
        cleanupFns.push(() => {
          scene.removeEventListener("pointermove", handleSceneMove);
          scene.removeEventListener("pointerleave", handleSceneLeave);
        });
      }
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
      if (stepObserver) stepObserver.disconnect();
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ─── Navigation ─── */}
      <header className="nav">
        <span className="nav-energy-line" aria-hidden="true"></span>
        <div className="nav-inner">
          <Link href="#home" className="nav-brand-lockup" aria-label="Adocial home">
            <Image
              src={logo}
              alt="Adocial"
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          <nav
            className={`navlinks ${menuOpen ? "open" : ""}`}
            id="navlinks"
            aria-label="Main navigation"
          >
            <a href="#services" onClick={handleLinkClick}>
              Services
            </a>
            <a href="#approach" onClick={handleLinkClick}>
              Our approach
            </a>
            <a href="#insights" onClick={handleLinkClick}>
              Our thinking
            </a>
            <a href="#pricing" onClick={handleLinkClick}>
              Pricing
            </a>
            <a href="#faq" onClick={handleLinkClick}>
              FAQ
            </a>
            <a className="nav-cta" href="#contact" onClick={handleLinkClick}>
              Let’s talk{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </nav>

          <a className="nav-cta" href="#contact">
            Let’s talk{" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <button
            className="menu-btn"
            id="menuBtn"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* ─── Main Content ─── */}
      <main>
        {/* ─── Hero Section ─── */}
        <section className="hero" id="home">
          <div className="wrap hero-grid">
            <div className="hero-copy-wrap reveal-left">
              <div className="hero-live-pill">
                <span className="live-radar-dot">
                  <span className="ping-ring"></span>
                  <span className="solid-dot"></span>
                </span>
                <span className="live-pill-text">Performance Advertising</span>
                <span className="live-pill-divider"></span>
                <span className="live-pill-highlight">ACTIVE 2026</span>
              </div>
              <h1>
                Turn ad spend into
                <br />
                <span className="rotating-word-wrap">
                  <span className={`rotating-word ${wordState}`}>
                    <span className="rotating-word-prefix">{ROTATING_WORDS[wordIndex].prefix}</span>{" "}
                    <span className="rotating-word-accent">{ROTATING_WORDS[wordIndex].accent}</span>
                  </span>
                </span>
              </h1>
              <p className="hero-copy">
                We help ambitious businesses reach the right people, generate qualified leads,
                and make clearer decisions through strategic, performance-focused advertising.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#contact">
                  Book a free strategy call{" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a className="btn light" href="#services">
                  Explore our services
                </a>
              </div>
              <div className="hero-note">
                <div className="avatars">
                  <span>A</span>
                  <span>G</span>
                  <span>+</span>
                </div>
                <span>Clear strategy. Thoughtful testing. Transparent reporting.</span>
              </div>
              <div className="hero-proof-strip" aria-label="Our operating principles">
                <span><i></i> Signal-led</span>
                <span><i></i> Test-driven</span>
                <span><i></i> Human clarity</span>
              </div>
            </div>

            <div
              className="scene reveal-right"
              aria-label="Interactive live advertising showcase displaying Meta, Instagram, and Google Ads"
            >
              <div className="scene-grid"></div>
              <div className="scene-ring"></div>
              <div className="scene-ring r2"></div>
              <div className="scene-ring r3"></div>
              <div className="orbital-dot"></div>
              <div className="orbital-dot d2"></div>
              <div className="sculpture" id="sculpture">
                <div className="shadow"></div>
                <div className="orb">
                  <HeroAdPortal />
                </div>
                <div className="orb-ring"></div>
                <div className="orb-ring ring2"></div>
                <div className="orb-ring ring3"></div>
              </div>
              <div className="scene-label label-a">
                <b>Live Ad Delivery</b>
                <small>Meta Advantage+ & Google PMax</small>
              </div>
              <div className="scene-label label-b">
                <b>ROAS 4.8X Target</b>
                <small>1st-party signal verification</small>
              </div>
              <div className="scene-label label-c">OMNICHANNEL MEDIA DESK</div>
            </div>
          </div>
        </section>

        {/* ─── Platform Ecosystem Strip ─── */}
        <PlatformStrip />

        {/* ─── Services Section ─── */}
        <section className="section services services-cinematic reveal" id="services">
          <div className="services-spotlight" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div className="wrap">
            <div className="section-head reveal">
              <div className="section-badge">
                <span className="section-badge-dot"></span>
                <span>What we do</span>
              </div>
              <h2>
                Good ads aren’t luck.
                <br />
                <span className="text-gradient">They’re built with intent.</span>
              </h2>
              <p>
                From the first click to the meaningful action, we bring strategy, creative testing,
                and measurement together to make every decision more considered.
              </p>
            </div>
            <div className="service-grid">
              <article className="service-card depth-in">
                <span className="card-sheen" aria-hidden="true"></span>
                <span className="service-number">01 / META</span>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 16.5C4 11 7 5 10.5 5c4.5 0 6 14 9 14 1.8 0 2.5-2.1 2.5-4.5C22 9 18.5 5 15 5c-4.5 0-7.5 14-11 14-1.5 0-2-1.1-2-2.5" />
                  </svg>
                </div>
                <h3>Meta Ads Management</h3>
                <p>
                  Reach the right people on Facebook and Instagram with thoughtful targeting,
                  creative experimentation, and campaigns built around your business goals.
                </p>
                <a className="text-link" href="#contact">
                  Explore Meta Ads <span>↗</span>
                </a>
                <div className="card-watermark"></div>
              </article>

              <article className="service-card depth-in delay-1">
                <span className="card-sheen" aria-hidden="true"></span>
                <span className="service-number">02 / SEARCH</span>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="10.8" cy="10.8" r="6.8" />
                    <path d="m16 16 5 5M8 10.8h5.6M10.8 8v5.6" />
                  </svg>
                </div>
                <h3>Google Ads Management</h3>
                <p>
                  Meet customers when intent is high with focused search campaigns, smarter keyword
                  decisions, and continual bid and landing-page optimization.
                </p>
                <a className="text-link" href="#contact">
                  Explore Google Ads <span>↗</span>
                </a>
                <div className="card-watermark"></div>
              </article>

              <article className="service-card depth-in delay-2">
                <span className="card-sheen" aria-hidden="true"></span>
                <span className="service-number">03 / INTELLIGENCE</span>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 19V5M4 19h17" />
                    <path d="m7 15 4-4 3 2 6-7" />
                    <circle cx="20" cy="6" r="1.3" />
                  </svg>
                </div>
                <h3>Tracking & Optimization</h3>
                <p>
                  Understand what’s working through clear measurement, useful reporting, structured
                  tests, and practical next steps grounded in data.
                </p>
                <a className="text-link" href="#contact">
                  Explore optimization <span>↗</span>
                </a>
                <div className="card-watermark"></div>
              </article>
            </div>
          </div>
        </section>

        {/* ─── Strategy / Approach Section ─── */}
        <section className="section strategy" id="approach">
          <div className="wrap strategy-grid">
            <div className="strategy-visual depth-in" aria-label="Illustration of an integrated advertising strategy">
              <div className="strategy-core">
                adocial.<small>GROWTH SYSTEM</small>
              </div>
              <div className="node one">
                <div className="node-icon">◎</div>
                <strong>Audience</strong>
                <span>Reach with purpose</span>
              </div>
              <div className="node two">
                <div className="node-icon">↗</div>
                <strong>Campaigns</strong>
                <span>Test & learn</span>
              </div>
              <div className="node three">
                <div className="node-icon">⌁</div>
                <strong>Measurement</strong>
                <span>Track what matters</span>
              </div>
              <div className="node four">
                <div className="node-icon">✳</div>
                <strong>Optimization</strong>
                <span>Improve with insight</span>
              </div>
            </div>

            <div className="strategy-copy reveal-right">
              <div className="section-badge">
                <span className="section-badge-dot"></span>
                <span>The Adocial difference</span>
              </div>
              <h2>
                Every click has a story.
                <br />
                <span className="text-gradient">Let’s understand it.</span>
              </h2>
              <p className="section-intro">
                Advertising works best when each part connects: a clear offer, the right audience,
                a useful landing experience, and measurement that helps you learn.
              </p>
              <div className="feature-list">
                <div className="feature">
                  <div className="feature-check">✓</div>
                  <div>
                    <h3>Strategy before spend</h3>
                    <p>Start with business goals and customer intent—not a one-size-fits-all campaign.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-check">✓</div>
                  <div>
                    <h3>Measure what matters</h3>
                    <p>Focus on meaningful actions and clear reporting instead of vanity metrics alone.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-check">✓</div>
                  <div>
                    <h3>Keep learning, keep improving</h3>
                    <p>Use structured testing and regular reviews to make better-informed decisions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Process Section (Light Theme + Rich Value Pillars) ─── */}
        <ProcessSection />

        {/* ─── Insights Section ─── */}
        <section className="section insights" id="insights">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="section-badge">
                <span className="section-badge-dot"></span>
                <span>How we think</span>
              </div>
              <h2>
                Beyond the click.
                <br />
                <span className="text-gradient">Closer to what counts.</span>
              </h2>
              <p>
                We connect the details of a campaign to the bigger picture: customer intent, useful
                creative, and decisions that move the business forward.
              </p>
            </div>
            <div className="insight-grid insights-premium-grid">
              <article className="insight-card blue-card depth-in">
                <div className="insight-aurora" aria-hidden="true"></div>
                <span className="pill-label">MEASURE WITH MEANING</span>
                <h3>Make the numbers tell a clearer story.</h3>
                <p>
                  Good reporting should help you understand what happened, what it might mean, and
                  what to test next.
                </p>
                <div className="insight-metrics" aria-hidden="true">
                  <span><b>+38%</b> quality leads</span>
                  <span><i></i> live signal</span>
                </div>
                <svg className="chart-art" viewBox="0 0 520 160" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    className="area"
                    d="M0 142 C45 130 64 98 105 115 S173 70 218 89 S278 40 324 61 S398 32 438 43 S482 13 520 8 V160 H0Z"
                  />
                  <path d="M0 142 C45 130 64 98 105 115 S173 70 218 89 S278 40 324 61 S398 32 438 43 S482 13 520 8" />
                </svg>
              </article>

              <article className="insight-card soft-card depth-in delay-1">
                <div className="insight-noise" aria-hidden="true"></div>
                <span className="pill-label" style={{ background: "#e7edff", color: "#345fe1" }}>
                  TEST WITH PURPOSE
                </span>
                <h3>Creative is a conversation, not a guess.</h3>
                <p>
                  Test clear hypotheses, learn how people respond, and use those insights to make the
                  next iteration stronger.
                </p>
                <div className="creative-stack" aria-hidden="true">
                  <span>THE MESSAGE</span>
                  <span>THE AUDIENCE</span>
                  <span>THE LEARNING</span>
                </div>
                <div className="creative-orbit" aria-hidden="true"></div>
              </article>
            </div>
          </div>
        </section>

        {/* ─── Transparent Pricing Section ─── */}
        <PricingSection />

        {/* ─── FAQ Section ─── */}
        <section className="section faq-section" id="faq">
          <div className="wrap faq-layout">
            <div className="section-head reveal-left">
              <div className="section-badge">
                <span className="section-badge-dot"></span>
                <span>Questions & answers</span>
              </div>
              <h2>
                A few things you might
                <br />
                <span className="text-gradient">be wondering.</span>
              </h2>
              <p>Every business is different. Here’s a little more about how working together can begin.</p>
            </div>
            <div className="faq-list reveal-right">
              <details open>
                <summary>
                  Which advertising platforms do you manage?<span>+</span>
                </summary>
                <p>
                  Adocial focuses on Meta Ads (Facebook and Instagram) and Google Ads, with campaign
                  tracking and optimization as part of a considered performance approach.
                </p>
              </details>
              <details>
                <summary>
                  What kind of businesses do you work with?<span>+</span>
                </summary>
                <p>
                  We’re interested in ambitious small and medium-sized businesses, e-commerce
                  brands, and service businesses. A first conversation helps us understand whether the
                  fit is right.
                </p>
              </details>
              <details>
                <summary>
                  How much should I spend on ads?<span>+</span>
                </summary>
                <p>
                  It depends on your market, goals, offer, and economics. We’ll discuss a realistic
                  starting budget based on your situation instead of suggesting a universal number.
                </p>
              </details>
              <details>
                <summary>
                  How soon will I see results?<span>+</span>
                </summary>
                <p>
                  Timing varies by platform, offer, audience, budget, and tracking quality. We focus
                  on establishing a useful baseline, learning from early signals, and communicating
                  progress honestly.
                </p>
              </details>
              <details>
                <summary>
                  How do we get started?<span>+</span>
                </summary>
                <p>
                  Send us a message or book an introductory call. We’ll learn about your business,
                  discuss your goals, and outline sensible next steps.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ─── CTA Box (#contact) ─── */}
        <section className="cta-section" id="contact">
          <div className="wrap">
            <div className="cta-box reveal depth-in">
              <div className="cta-copy">
                <div className="section-badge cta-badge">
                  <span className="section-badge-dot"></span>
                  <span>Start your next chapter</span>
                </div>
                <h2>
                  Ready to make your ad spend
                  <br />
                  <span className="text-gradient">work smarter?</span>
                </h2>
                <p>
                  Tell us about your business and what you’re working toward. Let’s explore whether a
                  more thoughtful approach to advertising could help.
                </p>
              </div>
              <div className="cta-actions">
                <a
                  className="btn primary"
                  href="https://wa.me/YOUR_PHONE_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a conversation <span>↗</span>
                </a>
                <a
                  className="btn light"
                  href="mailto:YOUR_EMAIL@example.com?subject=Adocial%20Strategy%20Call"
                >
                  Email Adocial <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Premium Luxury Footer ─── */}
      <Footer />
    </>
  );
}
