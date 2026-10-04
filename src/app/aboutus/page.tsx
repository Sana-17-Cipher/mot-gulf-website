import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* ================= HERO / INTRO ================= */}
      <section className="mot-about-section mot-about-hero">
        <div className="mot-about-hero-inner">
          <span className="mot-about-eyebrow">Where Education Meets Motherly Care</span>
          <h1 className="mot-about-heading">
            Where Education Meets{" "}
            <span className="mot-hero-highlight">Motherly Care</span>
          </h1>
          <p className="mot-about-text">
            Moms on Teaching USA is a personalized one-on-one online tutoring
            platform connecting Indian-American families with experienced,
            verified Teacher-Moms who nurture confidence, curiosity, and
            academic success.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="mot-about-section mot-about-story">
        <div className="mot-about-inner mot-about-story-grid">
          <div className="mot-about-placeholder">Image</div>
          <div>
            <span className="mot-about-eyebrow">Our Story</span>
            <h2 className="mot-about-heading">
              A Global Community Built Around Every Child
            </h2>
            <p className="mot-about-text">
              Moms on Teaching began with a simple belief: every child
              deserves personalized guidance from educators who combine
              professional expertise with genuine care.
            </p>
            <p className="mot-about-text">
              What started as a successful tutoring initiative serving
              families across the Gulf has now expanded to the United
              States, supporting Indian-American families who seek the best
              of both educational worlds. Whether your child is following
              CBSE, ICSE, IGCSE, IB, or a US curriculum, we provide learning
              that adapts to their unique goals.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="mot-about-section" style={{ background: "#fbf4e6" }}>
        <div className="mot-about-inner mot-about-mv-grid">
          <div className="mot-about-card">
            <h3>Our Mission</h3>
            <p>
              To provide every child with personalized one-on-one learning
              while creating meaningful work-from-home opportunities for
              qualified Teacher-Moms around the world.
            </p>
          </div>
          <div className="mot-about-card">
            <h3>Our Vision</h3>
            <p>
              To build a global learning community where children thrive
              academically and educators empower families through
              compassionate, personalized teaching.
            </p>
          </div>
        </div>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section className="mot-about-section mot-about-stats-section">
        <div className="mot-about-inner">
          <div className="mot-about-stats-grid">
            <div>
              <div className="mot-about-stat-number">5000</div>
              <div className="mot-about-stat-label">tutoring hours delivered</div>
            </div>
            <div>
              <div className="mot-about-stat-number">95%</div>
              <div className="mot-about-stat-label">
                students showed measurable improvement
              </div>
            </div>
            <div>
              <div className="mot-about-stat-number">30</div>
              <div className="mot-about-stat-label">qualified Teacher-Moms</div>
            </div>
            <div>
              <div className="mot-about-stat-number">8</div>
              <div className="mot-about-stat-label">Gulf &amp; US cities served</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY PARENTS CHOOSE ================= */}
      <section className="mot-about-section">
        <div className="mot-about-inner">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            <span className="mot-about-eyebrow">Why Families Trust Us</span>
            <h2 className="mot-about-heading">Why Parents Choose Teacher-Moms</h2>
          </div>

          <div className="mot-about-features-grid">
            <div className="mot-about-feature">
              <h3>Patience That Builds Confidence</h3>
              <p>
                Teacher-Moms understand that every child learns at their own
                pace. They guide with encouragement, empathy, and
                consistency.
              </p>
            </div>
            <div className="mot-about-feature">
              <h3>Experience Across Curricula</h3>
              <p>
                Many of our educators have experience teaching both Indian
                and international curricula, making transitions between
                education systems seamless.
              </p>
            </div>
            <div className="mot-about-feature">
              <h3>Safe &amp; Trusted</h3>
              <p>
                Every Teacher-Mom undergoes identity verification, background
                checks, and academic screening before joining our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VETTING PROCESS ================= */}
      <section className="mot-about-section mot-about-steps">
        <div className="mot-about-inner">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 32px" }}>
            <span className="mot-about-eyebrow">Our Vetting Process</span>
            <h2 className="mot-about-heading">
              We maintain the highest standards
            </h2>
            <p className="mot-about-text">
              Every educator on our platform passes through a rigorous,
              multi-step review before ever meeting your child.
            </p>
          </div>

          <div className="mot-about-steps-list">
            <div className="mot-about-step">
              <div className="mot-about-step-number">1</div>
              <div className="mot-about-step-content">
                <h3>Teaching Experience</h3>
                <p>Minimum three years of verified teaching or tutoring experience.</p>
              </div>
            </div>
            <div className="mot-about-step">
              <div className="mot-about-step-number">2</div>
              <div className="mot-about-step-content">
                <h3>Subject Assessment</h3>
                <p>Academic interview based on curriculum and specialization.</p>
              </div>
            </div>
            <div className="mot-about-step">
              <div className="mot-about-step-number">3</div>
              <div className="mot-about-step-content">
                <h3>Background Verification</h3>
                <p>Identity verification and safety screening.</p>
              </div>
            </div>
            <div className="mot-about-step">
              <div className="mot-about-step-number">4</div>
              <div className="mot-about-step-content">
                <h3>Teaching Evaluation</h3>
                <p>Trial class reviewed by our academic team.</p>
              </div>
            </div>
            <div className="mot-about-step">
              <div className="mot-about-step-number">5</div>
              <div className="mot-about-step-content">
                <h3>Continuous Quality Monitoring</h3>
                <p>Regular parent feedback and ongoing performance reviews.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}
      <section className="mot-about-section">
        <div className="mot-about-inner">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
            <span className="mot-about-eyebrow">What Guides Us</span>
            <h2 className="mot-about-heading">Our Values</h2>
          </div>

          <div className="mot-about-values-grid">
            <div className="mot-about-value">
              <h3>Personalized Learning</h3>
              <p>Every lesson is tailored to each child&apos;s pace and goals.</p>
            </div>
            <div className="mot-about-value">
              <h3>Trust</h3>
              <p>Verified educators and transparent communication.</p>
            </div>
            <div className="mot-about-value">
              <h3>Compassion</h3>
              <p>Learning built around encouragement and confidence.</p>
            </div>
            <div className="mot-about-value">
              <h3>Excellence</h3>
              <p>Strong academic outcomes through structured one-on-one teaching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mot-about-section mot-about-cta">
        <div className="mot-about-cta-inner">
          <h2 className="mot-about-heading">
            Ready to Meet Your Child&apos;s Teacher-Mom?
          </h2>
          <p className="mot-about-text">
            Let us help you find the right educator, learning plan, and
            schedule tailored to your child&apos;s academic journey.
          </p>
          <Link href="/contact" className="mot-about-cta-button">
            <span>Meet Our Teacher-Moms</span>
            <span className="mot-hero-cta-arrow">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}