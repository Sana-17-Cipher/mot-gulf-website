import Link from "next/link";
import styles from "./HomeContent.module.css";

const benefits = [
  {
    icon: "shield",
    title: "Background-checked tutors",
    description:
      "Every tutor completes identity verification and a background check before being matched with your child.",
  },
  {
    icon: "book",
    title: "Real teaching experience",
    description:
      "Our Teacher-Moms are qualified mothers with classroom or tutoring experience across Indian and international curricula.",
  },
  {
    icon: "person",
    title: "Always one-to-one",
    description:
      "Every session is dedicated to your child, with attention to their pace, learning gaps and individual goals.",
  },
] as const;

const programmes = [
  {
    id: "cbse",
    title: "CBSE",
    situation: "Following the CBSE national curriculum?",
    description:
      "Explore one-to-one tuition aligned with your child’s CBSE learning.",
    recommendation: "CBSE tutoring",
    tone: "mint",
  },
  {
    id: "icse",
    title: "ICSE",
    situation: "Enrolled in an ICSE-affiliated school?",
    description:
      "Find subject support that follows your child’s ICSE curriculum.",
    recommendation: "ICSE tutoring",
    tone: "lavender",
  },
  {
    id: "igcse",
    title: "IGCSE",
    situation: "Studying the Cambridge international pathway?",
    description:
      "Explore personalised tuition for your child’s IGCSE subjects.",
    recommendation: "IGCSE tutoring",
    tone: "peach",
  },
  {
    id: "ib",
    title: "IB",
    situation: "Pursuing the International Baccalaureate?",
    description:
      "Find individual learning support for your child’s IB studies.",
    recommendation: "IB tutoring",
    tone: "rose",
  },
  {
    id: "school",
    title: "KG–Class 12",
    situation: "Looking for support in specific school subjects?",
    description:
      "Explore subject-wise tuition from kindergarten through Plus Two.",
    recommendation: "School tuition",
    tone: "butter",
  },
] as const;

function BenefitIcon({
  type,
}: {
  type: "shield" | "book" | "person";
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "shield" && (
        <>
          <path d="M16 3 26 7v8c0 7-10 13-10 13S6 22 6 15V7Z" />
          <path d="m11 15 3.5 3.5L22 11" />
        </>
      )}

      {type === "book" && (
        <>
          <path d="M16 8C12 5 7 5 3 6v20c4-1 9-1 13 2 4-3 9-3 13-2V6c-4-1-9-1-13 2Z" />
          <path d="M16 8v20M7 11h5M7 16h5M20 11h5M20 16h5" />
        </>
      )}

      {type === "person" && (
        <>
          <circle cx="13" cy="10" r="5" />
          <path d="M3 27v-3a10 10 0 0 1 20 0v3" />
          <path d="m26 7 1.3 3.7L31 12l-3.7 1.3L26 17l-1.3-3.7L21 12l3.7-1.3Z" />
        </>
      )}
    </svg>
  );
}

export default function HomeContent() {
  return (
    <div className={styles.homeContent}>
      {/* WHY TEACHER-MOMS */}
      <section className={styles.trust} aria-labelledby="trust-title">
        <div className={styles.container}>
          <header className={styles.trustHeading}>
            <div>
              <p className={styles.eyebrow}>THE PEOPLE BEHIND THE LESSONS</p>
              <h2 id="trust-title">Why Teacher-Moms?</h2>
            </div>

            <p className={styles.trustIntro}>
              Professional teaching, personal attention and an
              understanding of how children learn.
            </p>
          </header>

          <div className={styles.benefits}>
            {benefits.map((benefit) => (
              <article className={styles.benefit} key={benefit.title}>
                <div className={styles.benefitIcon}>
                  <BenefitIcon type={benefit.icon} />
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>

        <svg
          className={styles.trustDivider}
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 48C200 12 350 83 560 52S890 15 1070 45 1310 81 1440 39V90H0Z"
            fill="currentColor"
          />
        </svg>
      </section>

      {/* PROGRAMME GUIDE */}
      <section
        className={styles.programmes}
        aria-labelledby="programme-title"
      >
        <div className={styles.container}>
          <header className={styles.sectionHeading}>
            <p className={styles.eyebrow}>FIND THE RIGHT FIT</p>
            <h2 id="programme-title">
              Which programme is right for your child?
            </h2>
            <p className={styles.sectionIntro}>
              Start with their curriculum or the support they need.
            </p>
          </header>

          <div className={styles.programmeGrid}>
            {programmes.map((programme, index) => (
              <article
                key={programme.id}
                className={`${styles.programmeCard} ${
                  styles[programme.tone]
                }`}
              >
                <span className={styles.paperClip} aria-hidden="true" />

                <div className={styles.cardTop}>
                  <span className={styles.cardNumber} aria-hidden="true">
                    0{index + 1}
                  </span>

                  <svg
                    className={styles.cardStar}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    aria-hidden="true"
                  >
                    <path d="m12 2 2.8 6.3 6.9.7-5.2 4.6 1.5 6.8-6-3.5-6 3.5 1.5-6.8L2.3 9l6.9-.7Z" />
                  </svg>
                </div>

                <h3>{programme.title}</h3>
                <p className={styles.situation}>{programme.situation}</p>
                <p className={styles.programmeDescription}>
                  {programme.description}
                </p>

                <Link
                  href="/services"
                  className={styles.programmeLink}
                  aria-label={`Explore ${programme.recommendation}`}
                >
                  {programme.recommendation}
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>

          <p className={styles.programmeHelp}>
            Not sure where to begin?{" "}
            <Link href="/contact">
              Tell us about your child
              <span aria-hidden="true"> ↗</span>
            </Link>
          </p>
        </div>

        <svg
          className={styles.programmeDivider}
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 60C190 85 350 15 540 35S850 88 1060 46 1310 25 1440 55V90H0Z"
            fill="currentColor"
          />
        </svg>
      </section>

      {/* PRICING PHILOSOPHY */}
      <section
        className={styles.pricing}
        aria-labelledby="pricing-philosophy-title"
      >
        <div className={`${styles.container} ${styles.pricingGrid}`}>
          <div className={styles.pricingIntro}>
            <p className={styles.eyebrow}>OUR PRICING PHILOSOPHY</p>

            <h2 id="pricing-philosophy-title">
              Individual attention.
              <br />
              Thoughtful pricing.
            </h2>

            <p>
              Every child is unique, and so is their learning journey.
              We plan teaching time around their needs, with focused
              support where they need it most.
            </p>

            <p>
              We value your child’s time and your investment in their
              education. Our hourly approach allows learning hours to
              reflect their pace, subjects and areas of difficulty.
            </p>

            <div className={styles.pricingActions}>
              <Link href="/pricing" className={styles.primaryButton}>
                View tuition fees
                <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/contact" className={styles.textLink}>
                Discuss your child’s needs
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className={styles.notebook}>
            <div className={styles.binding} aria-hidden="true">
              {Array.from({ length: 8 }, (_, index) => (
                <span key={index} />
              ))}
            </div>

            <div className={styles.notebookHeader}>
              <span>A note on your child’s learning</span>

              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="m16 3 3.8 8.2 9 1.1-6.6 6.3 1.7 9L16 23l-7.9 4.6 1.7-9-6.6-6.3 9-1.1Z" />
              </svg>
            </div>

            <ol className={styles.pricingPoints}>
              <li>
                <span className={styles.pointNumber} aria-hidden="true">
                  01
                </span>
                <div>
                  <h3>Personalised teaching time</h3>
                  <p>
                    Lessons focus on the concepts and subjects your child
                    needs help with.
                  </p>
                </div>
              </li>

              <li>
                <span className={styles.pointNumber} aria-hidden="true">
                  02
                </span>
                <div>
                  <h3>Clear hourly fees</h3>
                  <p>
                    Fees are calculated per hour, with rates based on
                    school level and subject requirements.
                  </p>
                </div>
              </li>

              <li>
                <span className={styles.pointNumber} aria-hidden="true">
                  03
                </span>
                <div>
                  <h3>Hours shaped around their needs</h3>
                  <p>
                    Learning time can be adjusted to support your child’s
                    individual pace and areas of difficulty.
                  </p>
                </div>
              </li>
            </ol>

            <p className={styles.notebookFooter}>
              Their learning needs guide the plan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}