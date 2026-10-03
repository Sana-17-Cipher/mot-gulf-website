import type { Metadata } from "next";
import Link from "next/link";
import TeacherMoms from "../../components/TeacherMoms";
import ServiceOfferings from "../../components/ServiceOfferings";
import ClassProcess from "../../components/ClassProcess";
import styles from "./services.module.css";

const pageUrl = "https://gulf.momsonteaching.com/services";

const description =
  "Explore personalised one-to-one online tuition with Moms on Teaching. CBSE, ICSE, IGCSE, IB and general tutoring from KG to Class 12.";

export const metadata: Metadata = {
  title: "Online Tuition Services | Moms on Teaching Gulf",
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Online Tuition Services | Moms on Teaching Gulf",
    description,
    url: pageUrl,
    siteName: "Moms on Teaching",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Online Tuition Services | Moms on Teaching Gulf",
    description,
  },
};

// Replace null with the photo path when available.
// Example: image: "/teachers/deepthy.webp"
const teachers = [
  {
    id: "deepthy",
    name: "Deepthy Sarat",
    experience: "3 years experience",
    details: [
      "High school · Classes 8, 9 and 10",
      "Maths, Physics and Chemistry",
    ],
    curriculum: "CBSE",
    image: null,
  },
  {
    id: "arifa",
    name: "Arifa Roshan",
    experience: "4 years experience",
    details: ["Hindi Expert", "UP & HS"],
    curriculum: "",
    image: null,
  },
  {
    id: "ajisha",
    name: "Ajisha K. A",
    experience: "6 years experience in tutoring",
    details: ["Classes 9 and 10", "Physics, Chemistry and Maths"],
    curriculum: "CBSE & ICSE",
    image: null,
  },
  {
    id: "dilna",
    name: "Dilna Arun",
    experience: "3 years experience",
    details: ["High school", "Master Trainer in Basics"],
    curriculum: "",
    image: null,
  },
  {
    id: "sruthy",
    name: "Sruthy Emilraj",
    experience: "8 years experience",
    details: ["High school", "Social Science and Malayalam"],
    curriculum: "",
    image: null,
  },
  {
    id: "anjusha",
    name: "Anjusha K. A",
    experience: "2 years experience",
    details: ["Inspirational Mentor in Malayalam"],
    curriculum: "",
    image: null,
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <section
        className={styles.hero}
        aria-labelledby="services-title"
      >
        <div className={styles.container}>
          <nav
            aria-label="Breadcrumb"
            className={styles.breadcrumb}
          >
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Services</span>
          </nav>

          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>OUR SERVICES</p>

            <h1 id="services-title">
              <span className={styles.titleLine}>
                One-to-one online tuition.
              </span>

              <span className={styles.titleLine}>
                Built around your child.
              </span>
            </h1>

            <p className={styles.intro}>
              From KG to Class 12, explore personalised online tutoring
              across CBSE, ICSE, IGCSE, IB and general school support.
            </p>

            <div className={styles.actions}>
              <Link
                href="/contact"
                className={styles.primaryButton}
              >
                Book a Demo
              </Link>

              <a
                href="#programmes"
                className={styles.secondaryButton}
              >
                Explore Programmes
              </a>
            </div>

            <div className={styles.heroNotes}>
              <span>One-to-one learning</span>
              <span>KG to Class 12</span>
              <span>Personalised support</span>
            </div>
          </div>
        </div>
      </section>

      <ServiceOfferings />

      <ClassProcess />

      <section
        className={styles.section}
        aria-labelledby="teachers-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>
              THE PEOPLE BEHIND THE PROGRESS
            </p>

            <h2 id="teachers-title">Meet Our Teacher-Moms</h2>

            <p>
              Our educators bring years of experience and a mother’s
              touch to every class.
            </p>
          </div>

          <TeacherMoms teachers={teachers} />
        </div>
      </section>

      <section
        className={styles.cta}
        aria-labelledby="demo-title"
      >
        <div className={`${styles.container} ${styles.ctaInner}`}>
          <div>
            <p className={styles.eyebrow}>
              LET’S START WITH A CONVERSATION
            </p>

            <h2 id="demo-title">
              Find the right support for your child.
            </h2>
          </div>

          <Link
            href="/contact"
            className={styles.primaryButton}
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}