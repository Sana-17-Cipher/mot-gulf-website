import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Moms on Teaching Gulf",
  description:
    "Ask about one-to-one online tuition or request a free demo with Moms on Teaching. Contact our team for help with subjects, classes and fees.",
  alternates: {
    canonical: "https://gulf.momsonteaching.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Contact</span>
        </nav>

        <header className={styles.header}>
          <h1>Let’s talk about your child’s learning.</h1>
          <p>
            Have a question or ready to try a class? We’re here to help.
          </p>
        </header>

        <div className={styles.grid}>
          <section
            className={styles.details}
            aria-labelledby="contact-details-title"
          >
            <h2 id="contact-details-title">Get in touch</h2>
            <p className={styles.sectionIntro}>
              Ask us about subjects, tuition fees or finding the right
              support for your child.
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
                  <a href="tel:+917012092344">+91 70120 92344</a>
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

              <div className={styles.socials}>
                <a
                  href="https://www.youtube.com/@MomsonteachingTutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube (opens in a new tab)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="4" />
                    <path
                      d="m10 9 5 3-5 3Z"
                      fill="currentColor"
                      stroke="none"
                    />
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
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          <section
            className={styles.formPanel}
            aria-labelledby="demo-form-title"
          >
            <div className={styles.formHeading}>
              <h2 id="demo-form-title">Request a free demo</h2>
              <p>Share a few details so we can guide you.</p>
            </div>

            <ContactForm />
          </section>
        </div>

        <aside className={styles.appStrip} aria-labelledby="app-title">
          <span className={styles.appIcon} aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <rect x="6" y="2" width="12" height="20" rx="3" />
              <path d="M10 5h4M10 19h4" />
            </svg>
          </span>

          <div>
            <h2 id="app-title">Learning, a little closer.</h2>
            <p>The Moms on Teaching mobile app is on its way.</p>
          </div>

          <span className={styles.comingSoon}>Coming soon</span>
        </aside>
      </div>
    </main>
  );
}