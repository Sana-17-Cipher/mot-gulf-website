import type { Metadata } from "next";

import ContactForm from "../../components/ContactForm";
import styles from "./contact.module.css";
import ContactEyes from "../../components/ContactEyes";

export const metadata: Metadata = {
  title: "Contact Us | Moms on Teaching Gulf",
  description:
    "Get in touch with Moms on Teaching for personalised online tuition. Ask about subjects, fees or request a free demo class.",
  alternates: {
    canonical: "https://gulf.momsonteaching.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        

        <header className={styles.contactHeader}>
  <div className={styles.contactTitleRow}>
    <h1>Contact us</h1>

    <a
      href="tel:+917012092344"
      className={styles.telephone}
      aria-label="Call Moms on Teaching on +91 70120 92344"
    >
      <svg
        viewBox="0 0 100 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Soft shadow */}
        <ellipse
          cx="53"
          cy="80"
          rx="34"
          ry="4"
          fill="#172547"
          opacity=".09"
        />

        {/* Curly telephone cord */}
        <path
          d="
            M20 35
            C8 35 8 43 15 44
            C5 45 6 52 14 53
            C5 55 7 62 15 62
            C8 66 13 72 21 70
            L29 68
          "
          stroke="#172547"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 4"
        />

        {/* Telephone base */}
        <path
          d="
            M34 43
            H68
            Q73 43 75 49
            L84 71
            Q87 79 78 79
            H24
            Q16 79 19 71
            L28 49
            Q30 43 34 43Z
          "
          fill="#E8BC59"
          stroke="#172547"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Base highlight */}
        <path
          d="M34 48H67"
          stroke="#FFF5D8"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Rotary dial */}
        <circle
          cx="51"
          cy="62"
          r="13"
          fill="#FFF9EB"
          stroke="#172547"
          strokeWidth="2.2"
        />

        <circle
          cx="51"
          cy="62"
          r="9"
          stroke="#172547"
          strokeWidth="3"
          strokeDasharray="1 6"
        />

        <circle cx="51" cy="62" r="4.5" fill="#E8BC59" />

        {/* Handset: shakes on hover */}
        <g className={styles.phoneReceiver}>
          <path
            d="
              M18 28
              Q51 13 84 28
              Q88 30 87 35
              L85 43
              Q84 47 79 46
              L67 43
              Q63 42 64 38
              L65 33
              Q51 28 37 33
              L38 38
              Q39 42 35 43
              L23 46
              Q18 47 17 43
              L15 35
              Q14 30 18 28Z
            "
            fill="#172547"
          />

          <path
            d="M29 27Q51 19 73 27"
            stroke="#526488"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* Ringing marks */}
        <g
          className={styles.phoneRings}
          stroke="#AD7E29"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M13 21L8 17M20 16L18 10" />
          <path d="M87 21L92 17M80 16L82 10" />
        </g>
      </svg>
    </a>
  </div>
</header>

        <div className={styles.contactScene}>
          <section
            className={styles.details}
            aria-labelledby="contact-details-title"
          >
            <div className={styles.detailsContent}>
              <h2 id="contact-details-title">We’re here to help.</h2>

              <p className={styles.detailsIntro}>
                Tell us what your child needs. We’ll help you find the
                right place to start.
              </p>

              <dl className={styles.contactList}>
                <div>
                  <dt>Email us</dt>
                  <dd>
                    <a href="mailto:info@momsonteaching.com">
                      info@momsonteaching.com
                    </a>
                  </dd>
                </div>

                <div>
                  <dt>Call us</dt>
                  <dd>
                    <a href="tel:+917012092344">
                      +91 70120 92344
                    </a>
                  </dd>
                </div>

                <div>
                  <dt>Response time</dt>
                  <dd>Within 2–4 business hours</dd>
                </div>
              </dl>

              <div className={styles.connectRow}>
                <a
                  href="https://wa.me/917012092344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsapp}
                >
                  Chat on WhatsApp
                  <span aria-hidden="true">↗</span>
                  <span className={styles.srOnly}>
                    {" "}(opens in a new tab)
                  </span>
                </a>

                <div
                  className={styles.socials}
                  role="group"
                  aria-label="Follow Moms on Teaching"
                >
                  <a
                    href="https://www.youtube.com/@MomsonteachingTutions"
                    target="_blank"
                    rel="noopener noreferrer"
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

                  <a
                    href="https://www.instagram.com/moms.on.teaching/"
                    target="_blank"
                    rel="noopener noreferrer"
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
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="5"
                      />
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
                </div>
              </div>

              <ContactEyes />
            </div>
          </section>

          <section
            className={styles.formPanel}
            aria-labelledby="demo-form-title"
          >
            <div className={styles.formHeading}>
  <h2 id="demo-form-title">Request a free demo</h2>
</div>

            <ContactForm />
          </section>
        </div>

        <aside className={styles.appNote}>
          <span className={styles.appDot} aria-hidden="true" />
          <p>
            A little closer to learning.
            <span> Our mobile app is coming soon.</span>
          </p>
        </aside>
      </div>
    </main>
  );
}