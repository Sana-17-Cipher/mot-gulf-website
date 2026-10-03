import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

/*

 * Empty URLs display as text/icons without broken links.
 */
const urls = {
  facebook: "",
  instagram: "https://www.instagram.com/moms.on.teaching/",
  youtube: "https://www.youtube.com/@MomsonteachingTutions",
  linkedin: "",
  reddit: "",
  blog: "",
  privacy: "",
  terms: "",
  sitemap: "",
};

const phone = "+917012092344";
const email = "info@momsonteaching.com";

type IconName =
  | "whatsapp"
  | "email"
  | "facebook"
  | "instagram"
  | "youtube"
  | "linkedin"
  | "reddit"
  | "phone";

function Icon({ name }: { name: IconName }) {
  const shapes: Record<IconName, ReactNode> = {
    whatsapp: (
      <>
        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7a8.5 8.5 0 1 1 16.3-3.8Z" />
        <path d="M8.2 7.4c-.7.6-.8 1.6-.3 2.7 1 2.2 2.9 4.1 5.2 5 .9.4 2 .2 2.6-.5l.7-1-2.7-1.3-.8 1c-1.5-.7-2.6-1.8-3.3-3.2l.9-.8L9.3 6.8Z" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    facebook: (
      <path
        fill="currentColor"
        stroke="none"
        d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.64.77-1.64 1.56V12h2.8l-.45 2.89h-2.35v6.99A10 10 0 0 0 22 12Z"
      />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    youtube: (
      <>
        <path d="M21 7.5a3 3 0 0 0-2-2C17.3 5 12 5 12 5s-5.3 0-7 .5a3 3 0 0 0-2 2A24 24 0 0 0 2.5 12a24 24 0 0 0 .5 4.5 3 3 0 0 0 2 2c1.7.5 7 .5 7 .5s5.3 0 7-.5a3 3 0 0 0 2-2 24 24 0 0 0 .5-4.5 24 24 0 0 0-.5-4.5Z" />
        <path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none" />
      </>
    ),
    linkedin: (
      <>
        <circle cx="5" cy="5" r="2" fill="currentColor" stroke="none" />
        <path d="M3.5 9h3v12h-3Z" fill="currentColor" stroke="none" />
        <path
          d="M10 21V9h3v1.8c.8-1.3 1.9-2 3.5-2 3 0 4.5 1.8 4.5 5.2v7h-3v-6.4c0-2-.6-3-2.2-3-1.8 0-2.8 1.2-2.8 3.3V21Z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),
    reddit: (
      <>
        <ellipse cx="12" cy="14" rx="8" ry="6" />
        <path d="m12 8 1.5-5 4.5 1" />
        <circle cx="19" cy="4.5" r="1.5" />
        <path d="M4.3 10.5C1 9 1 14 4 14m15.7-3.5C23 9 23 14 20 14" />
        <circle cx="9" cy="13" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
        <path d="M8.5 16c2 1.5 5 1.5 7 0" />
      </>
    ),
    phone: (
      <path d="m7 3 3 5-2.5 2a14 14 0 0 0 6.5 6.5l2-2.5 5 3v3a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1Z" />
    ),
  };

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shapes[name]}
    </svg>
  );
}

const socialLinks: {
  name: string;
  icon: IconName;
  href: string;
}[] = [
  {
    name: "WhatsApp",
    icon: "whatsapp",
    href: `https://wa.me/${phone.replace("+", "")}`,
  },
  {
    name: "Email",
    icon: "email",
    href: `mailto:${email}`,
  },
  { name: "Facebook", icon: "facebook", href: urls.facebook },
  { name: "Instagram", icon: "instagram", href: urls.instagram },
  { name: "YouTube", icon: "youtube", href: urls.youtube },
  { name: "LinkedIn", icon: "linkedin", href: urls.linkedin },
  { name: "Reddit", icon: "reddit", href: urls.reddit },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const programmes = ["CBSE", "ICSE", "IGCSE", "IB", "KG–Class 12"];

function OptionalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return href ? <a href={href}>{children}</a> : <span>{children}</span>;
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.brandLink}>
              <Image
                src="/images/mot-logo.png"
                alt=""
                width={60}
                height={60}
                className={styles.logo}
              />

              <span className={styles.brandName}>
                Moms on
                <br />
                Teaching
              </span>
            </Link>

            <p className={styles.description}>
              From KG to Class 12, we provide 1-on-1 online tutoring across
              CBSE, ICSE, IGCSE, IB, and US School Support.
            </p>

            <ul className={styles.socials} aria-label="Social and contact links">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  {social.href ? (
                    <a href={social.href} aria-label={social.name}>
                      <Icon name={social.icon} />
                    </a>
                  ) : (
                    <span
                      className={styles.unlinkedIcon}
                      role="img"
                      aria-label={social.name}
                    >
                      <Icon name={social.icon} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <nav className={styles.column} aria-label="Footer quick links">
            <h2>Quick Links</h2>

            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.column} aria-label="Tuition programmes">
            <h2>Programmes</h2>

            <ul className={styles.linkList}>
              {programmes.map((programme) => (
                <li key={programme}>
                  <Link href="/services">{programme}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.column} aria-label="Learning resources">
            <h2>Resources</h2>

            <ul className={styles.linkList}>
              <li>
                <a href="https://momsonteaching.com">Official Website</a>
              </li>
              <li>
                <a href="https://gulf.momsonteaching.com">GCC Website</a>
              </li>
              <li>
                <OptionalLink href={urls.blog}>Blog</OptionalLink>
              </li>
            </ul>
          </nav>

          <section className={styles.contact} aria-labelledby="footer-contact">
            <h2 id="footer-contact">Contact Us</h2>

            <address className={styles.contactList}>
              <a href={`tel:${phone}`} className={styles.contactLink}>
                <span className={styles.contactIcon}>
                  <Icon name="phone" />
                </span>
                <span>{phone}</span>
              </a>

              <a href={`mailto:${email}`} className={styles.contactLink}>
                <span className={styles.contactIcon}>
                  <Icon name="email" />
                </span>
                <span>{email}</span>
              </a>
            </address>
          </section>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Moms on Teaching. All rights reserved.</p>

          <nav aria-label="Legal and site information">
            <ul className={styles.legalLinks}>
              <li>
                <OptionalLink href={urls.privacy}>Privacy Policy</OptionalLink>
              </li>
              <li>
                <OptionalLink href={urls.terms}>Terms of Use</OptionalLink>
              </li>
              <li>
                <OptionalLink href={urls.sitemap}>Site Map</OptionalLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}