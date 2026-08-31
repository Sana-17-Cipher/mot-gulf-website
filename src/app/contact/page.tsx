export default function ContactPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="mot-contact-hero">
        <div className="mot-contact-hero-inner">
          <h1 className="mot-contact-heading">
            Contact <em>Us</em>
          </h1>
          <p className="mot-contact-subtext">
            We&apos;re here to help. Whether you have questions, feedback, or
            need support, our team is ready to assist you.
          </p>
        </div>

        <svg
          className="mot-contact-hero-wave"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,40 C240,110 480,0 720,45 C960,90 1200,10 1440,60 L1440,120 L0,120 Z"
            fill="#fffdf8"
          />
        </svg>
      </section>

      {/* ================= GET IN TOUCH + FORM ================= */}
      <section className="mot-contact-section">
        <div className="mot-contact-grid">
          {/* ---- Get in touch ---- */}
          <div>
            <h2 className="mot-contact-subheading">
              Get in <em>touch</em>
            </h2>

            <div className="mot-contact-info-list">
              <div className="mot-contact-info-card">
                <span className="mot-contact-info-label">Email</span>
                <span className="mot-contact-info-value">
                  info@momsonteaching.com
                </span>
              </div>

              <div className="mot-contact-info-card">
                <span className="mot-contact-info-label">Phone</span>
                <span className="mot-contact-info-value">
                  +1 (800) 123-4567
                </span>
              </div>

              <div className="mot-contact-info-card">
                <span className="mot-contact-info-label">Response Time</span>
                <span className="mot-contact-info-value">
                  Within 2&ndash;4 business hours
                </span>
              </div>

              <div className="mot-contact-info-card">
                <span className="mot-contact-info-label">Follow Us</span>
                <div className="mot-contact-social-row">
                  <a
                    href="#"
                    className="mot-contact-social-icon"
                    aria-label="YouTube"
                  >
                    YT
                  </a>
                  <a
                    href="#"
                    className="mot-contact-social-icon"
                    aria-label="Instagram"
                  >
                    IG
                  </a>
                  <a
                    href="#"
                    className="mot-contact-social-icon"
                    aria-label="TikTok"
                  >
                    TT
                  </a>
                  <a
                    href="#"
                    className="mot-contact-social-icon"
                    aria-label="Twitter"
                  >
                    TW
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ---- Send us a message ---- */}
          <div>
            <h2 className="mot-contact-subheading">Send Us a Message</h2>

            <form className="mot-contact-form">
              <div className="mot-contact-form-row">
                <input
                  type="text"
                  className="mot-contact-input"
                  placeholder="Parent's Name"
                  name="parentName"
                />
                <input
                  type="tel"
                  className="mot-contact-input"
                  placeholder="Phone Number"
                  name="phoneNumber"
                />
              </div>

              <div className="mot-contact-form-row">
                <select className="mot-contact-select" name="service" defaultValue="">
                  <option value="" disabled>
                    Service
                  </option>
                  <option value="cbse">CBSE</option>
                  <option value="icse">ICSE</option>
                  <option value="igcse">IGCSE</option>
                  <option value="ib">IB</option>
                  <option value="us-curriculum">US Curriculum</option>
                </select>
                <select className="mot-contact-select" name="state" defaultValue="">
                  <option value="" disabled>
                    State
                  </option>
                  <option value="new-jersey">New Jersey</option>
                  <option value="new-york">New York</option>
                  <option value="california">California</option>
                  <option value="texas">Texas</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <textarea
                className="mot-contact-textarea"
                placeholder="Tell us about your child's grade and any specific needs"
                name="message"
              />

              <button type="submit" className="mot-contact-submit">
                Request a Free Demo Class
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= APP PROMO CARD ================= */}
      <section className="mot-contact-app-section">
        <div className="mot-contact-app-card">
          <div className="mot-contact-app-wave" />

          <div className="mot-contact-app-inner">
            <h2 className="mot-contact-app-heading">
              Ready to <em>Transform</em> Your
              <br />
              <span className="mot-contact-app-highlight">
                Child&apos;s Learning?
              </span>
            </h2>
            <p className="mot-contact-app-text">
              Experience the future of education with our upcoming mobile
              app. Track your child&apos;s progress, schedule classes
              effortlessly, and stay in touch with Teacher-Moms directly
              from your phone.
            </p>

            <div className="mot-contact-app-actions">
              <a href="#" className="mot-contact-app-download">
                Download App <span>&rarr;</span>
              </a>
              <span className="mot-contact-app-badge">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}