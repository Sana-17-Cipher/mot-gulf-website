import type { Metadata } from "next";
import Link from "next/link";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Moms on Teaching Gulf",
  description:
    "Find answers about our online tutors, curricula, class scheduling, tuition fees and learning support for families in the UAE and Gulf.",
  alternates: {
    canonical: "https://gulf.momsonteaching.com/faq",
  },
};

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  link?: {
    href: string;
    label: string;
  };
};

type FaqCategory = {
  id: string;
  title: string;
  description: string;
  items: FaqItem[];
};

const faqData: FaqCategory[] = [
  {
    id: "tutors",
    title: "Our tutors",
    description: "Getting to know your Teacher-Mom.",
    items: [
      {
        id: "tutor-checks",
        question: "Are your tutors background-checked?",
        answer:
          "Yes. Every tutor completes identity verification and a background check before being matched with a family.",
      },
    ],
  },
  {
    id: "learning",
    title: "Classes & learning",
    description: "Subjects, curricula and language support.",
    items: [
      {
        id: "curricula",
        question: "Which curricula and subjects do you support?",
        answer:
          "We offer personalised, one-to-one online tuition in core subjects including Mathematics, Science, English and Social Studies. Support includes CBSE, ICSE and state curricula. Contact our team to confirm availability for your child’s curriculum, grade and subjects.",
        link: {
          href: "/services",
          label: "Explore our services",
        },
      },
      {
        id: "languages",
        question: "Can my child learn in Malayalam or Hindi?",
        answer:
          "Yes. Many of our Teacher-Moms can explain concepts in Malayalam or Hindi alongside English. Let us know your child’s preferred language when enquiring so we can check tutor availability.",
      },
    ],
  },
  {
    id: "scheduling",
    title: "Scheduling & progress",
    description: "Learning that fits around your family.",
    items: [
      {
        id: "relocation",
        question: "Can classes continue if we move to another country?",
        answer:
          "Because classes take place online, your child can continue learning when your family relocates. Let us know about your move so we can review time-zone differences and agree on a suitable schedule, subject to tutor availability.",
      },
      {
        id: "progress",
        question: "How will I know how my child is progressing?",
        answer:
          "Parents receive regular updates on topics covered, assessment results and tutor observations. Check-in conversations help you understand your child’s progress and discuss what to focus on next.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Fees & getting started",
    description: "Planning your child’s tuition.",
    items: [
      {
        id: "fees",
        question: "How much does online tuition cost?",
        answer:
          "Hourly fees depend on your child’s school level and subject requirements. Our Pricing page lists rates in Indian Rupees (INR), including applicable single-subject rates. Contact us to confirm the equivalent AED amount before booking.",
        link: {
          href: "/pricing",
          label: "View tuition fees",
        },
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>A little clarity, a lot of confidence.</h1>
          <p>
            Frequently asked questions about learning with Moms on Teaching.
          </p>
        </header>

        <div className={styles.categories}>
          {faqData.map((category) => (
            <section
              key={category.id}
              className={styles.category}
              aria-labelledby={`category-${category.id}`}
            >
              <div className={styles.categoryHeading}>
                <h2 id={`category-${category.id}`}>
                  {category.title}
                </h2>
                <p>{category.description}</p>
              </div>

              <div className={styles.questions}>
                {category.items.map((item) => (
                  <details
                    key={item.id}
                    className={styles.item}
                    name="mot-faq"
                  >
                    <summary className={styles.question}>
                      <span>{item.question}</span>
                      <span
                        className={styles.toggle}
                        aria-hidden="true"
                      />
                    </summary>

                    <div className={styles.answer}>
                      <p>{item.answer}</p>

                      {item.link && (
                        <Link
                          href={item.link.href}
                          className={styles.answerLink}
                        >
                          {item.link.label}
                          <span aria-hidden="true">↗</span>
                        </Link>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section
          className={styles.cta}
          aria-labelledby="faq-contact-title"
        >
          <div>
            <h2 id="faq-contact-title">Have another question?</h2>
            <p>
              Tell us what’s on your mind. We’re happy to help.
            </p>
          </div>

          <Link href="/contact" className={styles.contactButton}>
            Let’s talk
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>
    </main>
  );
}