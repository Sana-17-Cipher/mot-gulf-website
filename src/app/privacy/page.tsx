import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Moms on Teaching",
  description:
    "How Moms on Teaching handles information shared through our Gulf website.",
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Back to home
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>YOUR INFORMATION</p>
          <h1>Privacy Policy</h1>
          <p>
            This page explains what happens when you browse our website or
            contact Moms on Teaching about online tuition.
          </p>
        </header>

        <div className={styles.content}>
          <section>
            <h2>Information you share with us</h2>
            <p>
              When you contact us, you may provide details such as your name,
              email address, phone number, location, and information about
              your child’s learning needs. Please share only the information
              needed for us to respond to your enquiry.
            </p>
          </section>

          <section>
            <h2>How we use that information</h2>
            <p>
              We use the details you provide to respond to your enquiry,
              discuss suitable tuition options, and communicate with you
              about the support you requested.
            </p>
          </section>

          <section>
            <h2>Website analytics</h2>
            <p>
              We use Google Analytics to understand visits to our website,
              such as which pages are viewed. Google Analytics may use
              cookies or similar technology to collect usage information.
              You can manage cookies through your browser settings.
            </p>
            <p>
              Learn more in{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google’s Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Other websites</h2>
            <p>
              Our website links to social media and other Moms on Teaching
              websites. Their privacy practices may differ, so please review
              their policies when you visit them.
            </p>
          </section>

          <section>
            <h2>Your questions and requests</h2>
            <p>
              To ask about information you have shared with us, request a
              correction, or raise a privacy concern, email{" "}
              <a href="mailto:info@momsonteaching.com">
                info@momsonteaching.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>
              We may update this page when our website or information
              practices change. The latest version will appear here.
            </p>
          </section>
        </div>

        <div className={styles.endLink}>
          <Link href="/contact">Contact us <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </main>
  );
}