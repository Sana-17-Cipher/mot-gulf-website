import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of Use | Moms on Teaching",
  description:
    "Terms for using the Moms on Teaching Gulf website.",
};

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Back to home
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>WEBSITE INFORMATION</p>
          <h1>Terms of Use</h1>
          <p>
            These terms describe how you may use the Moms on Teaching
            website and the information provided here.
          </p>
        </header>

        <div className={styles.content}>
          <section>
            <h2>About this website</h2>
            <p>
              This website provides information about Moms on Teaching,
              our online tuition services, learning programmes, and ways
              to contact us.
            </p>
          </section>

          <section>
            <h2>Tuition enquiries</h2>
            <p>
              Sending an enquiry does not create a booking. Before arranging
              lessons, please confirm the applicable subjects, availability,
              fees, schedule, and any cancellation arrangements directly
              with our team.
            </p>
          </section>

          <section>
            <h2>Using our content</h2>
            <p>
              The text, images, branding, and other materials on this site
              are provided for your personal information. Please contact us
              before copying or using them for another purpose.
            </p>
          </section>

          <section>
            <h2>Information on the site</h2>
            <p>
              We aim to keep our information accurate and current. Programme
              availability, descriptions, and other details may change.
              Contact us if you need to confirm a specific detail before
              making a decision.
            </p>
          </section>

          <section>
            <h2>External links</h2>
            <p>
              Links to other websites are provided for convenience. Those
              websites have their own content and policies.
            </p>
          </section>

          <section>
            <h2>Questions</h2>
            <p>
              If you have a question about this website or our tuition
              services, email{" "}
              <a href="mailto:info@momsonteaching.com">
                info@momsonteaching.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className={styles.endLink}>
          <Link href="/contact">Ask us a question <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </main>
  );
}