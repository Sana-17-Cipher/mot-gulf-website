"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="mot-hero">
      <div className="mot-hero-inner">
        <div className="mot-hero-content">
          <span className="mot-hero-eyebrow">
            Home-based learning support across the Gulf
          </span>

          <h1 className="mot-hero-heading">
            Confident teaching
            <br />
            starts at{" "}
            <span className="mot-hero-highlight">home</span>.
          </h1>

          <p className="mot-hero-subtext">
            Moms on Teaching connects you with warm, expert-led
            programs for homeschooling, tutoring and after-school
            support — trusted by families in Dubai, Doha, Riyadh
            and beyond.
          </p>

          <div className="mot-hero-actions">
            <Link href="/contact" className="mot-hero-cta-primary">
              <span>Book Free Demo</span>
              <span className="mot-hero-cta-arrow">↗</span>
            </Link>

            <Link href="/services" className="mot-hero-cta-secondary">
              Explore Services
            </Link>
          </div>

          <div className="mot-hero-badges">
            <span className="mot-hero-badge">8 Gulf cities</span>
            <span className="mot-hero-badge">1:1 mentoring</span>
            <span className="mot-hero-badge">Flexible scheduling</span>
          </div>
        </div>

        <div className="mot-hero-visual" aria-hidden="true">
          <div className="mot-hero-orb mot-hero-orb-1" />
          <div className="mot-hero-orb mot-hero-orb-2" />

          <div className="mot-hero-card">
            <img
              src="/images/hero-photo.jpg"
              alt=""
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="mot-hero-card-fallback">📚</span>
          </div>
        </div>
      </div>
    </section>
  );
}