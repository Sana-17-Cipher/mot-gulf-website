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
                  +91 7012092344
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
  {/* YouTube */}
  <a
  href="https://www.youtube.com/@MomsonteachingTutions"
  target="_blank"
  rel="noopener noreferrer"
  className="mot-contact-social-icon"
  aria-label="YouTube (opens in a new tab)"
>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
  href="https://www.instagram.com/moms.on.teaching/"
  target="_blank"
  rel="noopener noreferrer"
  className="mot-contact-social-icon"
  aria-label="Instagram (opens in a new tab)"
>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1.1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  </a>

  {/* Twitter */}
  <a
    href="#"
    className="mot-contact-social-icon"
    aria-label="Twitter"
  >
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M23.95 4.57a10 10 0 0 1-2.82.78 4.93 4.93 0 0 0 2.16-2.72 9.99 9.99 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.48A13.98 13.98 0 0 1 1.64 3.16a4.92 4.92 0 0 0 1.52 6.56 4.9 4.9 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.95 4.82 4.94 4.94 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.52a13.94 13.94 0 0 0 7.55 2.21c9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63a10.01 10.01 0 0 0 2.46-2.55Z" />
    </svg>
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
                <select
  className="mot-contact-select"
  name="emirate"
  aria-label="Emirate"
  defaultValue=""
  required
>
  <option value="" disabled>
    Select Emirate
  </option>
  <option value="abu-dhabi">Abu Dhabi</option>
  <option value="dubai">Dubai</option>
  <option value="sharjah">Sharjah</option>
  <option value="ajman">Ajman</option>
  <option value="umm-al-quwain">Umm Al Quwain</option>
  <option value="ras-al-khaimah">Ras Al Khaimah</option>
  <option value="fujairah">Fujairah</option>
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