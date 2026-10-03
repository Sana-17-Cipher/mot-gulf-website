import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  boards,
  getLocation,
  locations,
  SITE_URL,
} from "@/data/locations";
import theme from "../../services/services.module.css";
import styles from "../locations.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) notFound();

  const title = `Online Tuition in ${location.name} | Moms on Teaching`;
  const description =
    `Personalised one-to-one online tuition in ${location.name} for NRI ` +
    "and expat students. Explore CBSE, ICSE, IGCSE and Kerala Board support.";
  const url = `${SITE_URL}/locations/${location.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Moms on Teaching",
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) notFound();

  const url = `${SITE_URL}/locations/${location.slug}`;

  const facts = [
    {
      label: "Boards available",
      value: boards.join(", "),
    },
    {
      label: "Time zone",
      value: location.timeZone,
    },
    {
      label: "Currency",
      value: location.currency,
    },
    {
      label: "Languages",
      value: "English, Malayalam",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${SITE_URL}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: url,
      },
    ],
  };

  return (
    <main className={`${theme.page} ${styles.page}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className={theme.container}>
        <nav aria-label="Breadcrumb" className={theme.breadcrumb}>
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/locations">Locations</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{location.name}</span>
        </nav>

        <section className={styles.hero} aria-labelledby="location-title">
          <p className={styles.eyebrow}>
            LITTLE STEPS. BRIGHTER FUTURES.
          </p>

          <h1 id="location-title" className={styles.title}>
            <span className={styles.paper}>
              Online Tuition in {location.name}
            </span>
            <span className={styles.paper}>
              for NRI &amp; Expat Students
            </span>
          </h1>

          <p className={styles.intro}>
            Moms on Teaching provides personalised one-to-one online tuition
            in {location.name} for CBSE, ICSE, IGCSE and Kerala State Board
            students, delivered by verified mother-teachers familiar with{" "}
            {location.name}’s school calendar and time zone.
          </p>
        </section>

        <section className={styles.facts} aria-labelledby="facts-title">
          <div className={styles.factsHeading}>
            <span className={styles.sparkle} aria-hidden="true">✦</span>
            <h2 id="facts-title">Quick Facts — {location.name}</h2>
          </div>

          <dl className={styles.factsGrid}>
            {facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <span className={styles.check} aria-hidden="true">✓</span>
                <div>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.boards} aria-labelledby="boards-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>FAMILIAR CURRICULUM. PERSONAL SUPPORT.</p>
            <h2 id="boards-title">Boards Available in {location.name}</h2>
          </div>

          <ul className={styles.boardGrid}>
            {boards.map((board, index) => (
              <li key={board} className={styles.boardCard}>
                <span className={styles.boardNumber} aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{board}</h3>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.cta} aria-labelledby="location-cta">
          <div>
            <p className={styles.eyebrow}>THE NEXT CHAPTER STARTS HERE</p>
            <h2 id="location-cta">
              Find the right support for your child.
            </h2>
            <p className={styles.ctaText}>
              Explore our tuition services or talk to us about your child’s
              learning needs in {location.name}.
            </p>
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