import type { Metadata } from "next";
import Link from "next/link";
import styles from "./pricing.module.css";
import BookDomino from "@/components/BookDomino";

export const metadata: Metadata = {
  title: "Online Tuition Fees | Moms on Teaching Gulf",
  description:
    "Explore our one-to-one online tuition fees: Primary ₹150/hr, Middle ₹175/hr, Secondary ₹200/hr and Senior Secondary ₹300/hr. View single-subject rates.",
  alternates: {
    canonical: "https://gulf.momsonteaching.com/pricing",
  },
};

const plans = [
  {
    name: "Primary",
    price: 150,
    singleSubjectPrice: null,
  },
  {
    name: "Middle",
    price: 175,
    singleSubjectPrice: null,
  },
  {
    name: "Secondary",
    price: 200,
    singleSubjectPrice: 250,
  },
  {
    name: "Senior Secondary",
    price: 300,
    singleSubjectPrice: 350,
  },
];

export default function PricingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

 <div className={styles.topRow}>
  <nav className={styles.breadcrumb} aria-label="Breadcrumb">
    <Link href="/">Home</Link>
    <span aria-hidden="true">/</span>
    <span aria-current="page">Pricing</span>
  </nav>

  <BookDomino />
</div>


        <header className={styles.hero}>
          <h1>Online tuition fees</h1>
          <p>
            Personalised, one-to-one learning with Moms on Teaching. Explore our hourly rates for your child’s school level.
          </p>
        </header>

        <section aria-labelledby="rates-heading">
          <div className={styles.sectionHeader}>
            <h2 id="rates-heading">Choose your child’s learning level</h2>
            <span>All prices in Indian Rupees (INR)</span>
          </div>

          <div className={styles.grid}>
            {plans.map((plan) => (
              <article key={plan.name} className={styles.card}>
                <h3>{plan.name}</h3>

                <p className={styles.price}>
                  <span>₹{plan.price}</span>
                  <span className={styles.unit}>/ hour</span>
                </p>

                <p className={styles.description}>
                  One-to-one online tuition
                </p>

                {plan.singleSubjectPrice !== null && (
                  <div className={styles.subjectRate}>
                    <span>For one subject only</span>
                    <p>
                      <strong>₹{plan.singleSubjectPrice}</strong>
                      <span> / hour</span>
                    </p>
                  </div>
                )}

                <Link href="/contact" className={styles.enquire}>
                  <span>Enquire Now</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <aside className={styles.currencyNote} aria-label="Currency information">
          <span className={styles.infoIcon} aria-hidden="true">i</span>
          <p>
            Prices are quoted in <strong>Indian Rupees (INR)</strong>.
            The equivalent amount in AED may vary with the exchange rate.
            Please <Link href="/contact">contact us</Link> to confirm the
            AED amount before booking.
          </p>
        </aside>

        <section className={styles.cta} aria-labelledby="pricing-cta">
          <div>
            <h2 id="pricing-cta">Not sure where to start?</h2>
            <p>
              Tell us your child’s class and subjects. We’ll help you find
              the right tuition option.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/services" className={styles.secondaryButton}>
              Explore Services
            </Link>
            <Link href="/contact" className={styles.primaryButton}>
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}