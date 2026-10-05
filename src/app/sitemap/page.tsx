import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Site Map | Moms on Teaching",
  description:
    "Find the main pages and learning resources on the Moms on Teaching Gulf website.",
};

const groups = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Find support",
    links: [
      { label: "Locations", href: "/locations" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Website information",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Site Map", href: "/sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Back to home
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>FIND YOUR WAY</p>
          <h1>Site Map</h1>
          <p>A simple guide to the pages on our website.</p>
        </header>

        <div className={styles.sitemapGrid}>
          {groups.map((group) => (
            <section key={group.title} className={styles.sitemapGroup}>
              <h2>{group.title}</h2>

              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}