import type { Metadata } from "next";
import Link from "next/link";
import { locations, SITE_URL } from "@/data/locations";
import theme from "../services/services.module.css";
import styles from "./locations.module.css";

const title = "Online Tuition Across the Gulf | Moms on Teaching";
const description =
  "Explore one-to-one online tuition for NRI and expat students across Dubai, Doha, Kuwait City, Manama, Riyadh, Muscat, Oman and Bahrain.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/locations`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/locations`,
    siteName: "Moms on Teaching",
    type: "website",
  },
};

export default function LocationsPage() {
  return (
    <main className={`${theme.page} ${styles.page}`}>
      <div className={theme.container}>
        <nav aria-label="Breadcrumb" className={theme.breadcrumb}>
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Locations</span>
        </nav>

        <section className={styles.hero} aria-labelledby="locations-title">
          <p className={styles.eyebrow}>A LITTLE CLOSER, WHEREVER YOU ARE</p>

          <h1 id="locations-title" className={styles.title}>
            <span className={styles.paper}>One-to-one online tuition.</span>
            <span className={styles.paper}>Across the Gulf.</span>
          </h1>

          <p className={styles.intro}>
            Personalised learning with Moms on Teaching, wherever your family
            calls home. Choose your location to explore online tuition for
            CBSE, ICSE, IGCSE and Kerala State Board students.
          </p>
        </section>

        <section aria-labelledby="choose-location">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>FIND YOUR LOCATION</p>
            <h2 id="choose-location">Learning starts close to home.</h2>
          </div>

          <ul className={styles.locationGrid}>
            {locations.map((location) => (
              <li key={location.slug}>
                <Link
                  href={`/locations/${location.slug}`}
                  className={styles.locationCard}
                >
                  <span className={styles.locationCountry}>
                    {location.country}
                  </span>

                  <span className={styles.locationName}>
                    {location.name}
                    <span aria-hidden="true">↗</span>
                  </span>

                  <span className={styles.locationCaption}>
                    Explore online tuition
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.cta} aria-labelledby="locations-cta">
          <div>
            <p className={styles.eyebrow}>LET’S FIND THE RIGHT FIT</p>
            <h2 id="locations-cta">A little support. A world of possibility.</h2>
          </div>

          <div className={styles.actions}>
            <Link href="/services" className={theme.primaryButton}>
              Explore Our Services <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/contact" className={theme.secondaryButton}>
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}