import type { Metadata } from "next";
import Link from "next/link";
import TeacherMoms from "../../components/TeacherMoms";
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

const programmes = [
  { name: "CBSE", grades: "Grades 1–12" },
  { name: "ICSE", grades: "Grades 1–12" },
  { name: "IGCSE", grades: "Grades 1–12" },
  { name: "IB", grades: "Grades 1–12" },
  { name: "General", grades: "KG–Plus Two" },
];

const tracks = [
  {
    number: "01",
    title: "Strong Roots Foundation",
    description: "For students needing concept clarity.",
    items: [],
  },
  {
    number: "02",
    title: "Academic Mastery",
    description: "",
    items: ["Daily learning", "Homework", "Assignments"],
  },
  {
    number: "03",
    title: "Exam Success",
    description: "",
    items: ["Revision", "Mock Tests", "Performance Analysis"],
  },
];

const steps = [
  "Book Demo",
  "Meet Teacher",
  "Learning Assessment",
  "Personalized Plan",
  "Weekly Classes",
  "Progress Reports",
];

// Only the three readable profiles from your screenshot are included.
// Add the remaining profiles here when their content is available.
// Replace null with the original photo path, e.g. "/teachers/deepthy.webp".
const teachers = [
  {
    id: "anjusha",
    name: "Anjusha K. A",
    experience: "2 years experience",
    details: ["Motivational Mentor in Malayalam"],
    curriculum: "",
    image: null,
  },
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
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="services-title">
        <div className={styles.container}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Services</span>
          </nav>

          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>OUR SERVICES</p>

            <h1 id="services-title">
              One-to-one online tuition.
              <span>Built around your child.</span>
            </h1>

            <p className={styles.intro}>
              From KG to Class 12, explore personalised online tutoring
              across CBSE, ICSE, IGCSE, IB and general school support.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryButton}>
                Book a Demo
              </Link>

              <a href="#programmes" className={styles.secondaryButton}>
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

      <section
        id="programmes"
        className={`${styles.section} ${styles.navySection}`}
        aria-labelledby="programmes-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>CURRICULUM SUPPORT</p>
            <h2 id="programmes-title">Our Tutoring Programmes</h2>
          </div>

          <div className={styles.programmeGrid}>
            {programmes.map((programme) => (
              <article className={styles.programme} key={programme.name}>
                <h3>{programme.name}</h3>
                <p>{programme.grades}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        aria-labelledby="tracks-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>SUPPORT AT EVERY STAGE</p>
            <h2 id="tracks-title">Our Learning Tracks</h2>
            <p>
              Targeted learning tracks for every child’s needs, from
              building strong foundations to preparing for exams.
            </p>
          </div>

          <div className={styles.trackGrid}>
            {tracks.map((track) => (
              <article className={styles.track} key={track.title}>
                <span className={styles.trackNumber} aria-hidden="true">
                  {track.number}
                </span>

                <h3>{track.title}</h3>

                {track.description && <p>{track.description}</p>}

                {track.items.length > 0 && (
                  <ul>
                    {track.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.navySection}`}
        aria-labelledby="process-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>YOUR CHILD’S LEARNING JOURNEY</p>
            <h2 id="process-title">How a Class Works</h2>
          </div>

          <ol className={styles.steps}>
            {steps.map((step, index) => (
              <li key={step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{step}</h3>

                {index === 1 && (
                  <p>
                    Meet the best tutor and get to know them through an
                    interactive session.
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className={styles.section}
        aria-labelledby="teachers-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>THE PEOPLE BEHIND THE PROGRESS</p>
            <h2 id="teachers-title">Meet Our Teacher-Moms</h2>
            <p>
              Our educators bring years of experience and a mother’s
              touch to every class.
            </p>
          </div>

          <TeacherMoms teachers={teachers} />
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="demo-title">
        <div className={`${styles.container} ${styles.ctaInner}`}>
          <div>
            <p className={styles.eyebrow}>LET’S START WITH A CONVERSATION</p>
            <h2 id="demo-title">Find the right support for your child.</h2>
          </div>

          <Link href="/contact" className={styles.primaryButton}>
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}