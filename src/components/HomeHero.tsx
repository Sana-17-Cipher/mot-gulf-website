import Link from "next/link";
import styles from "./HomeHero.module.css";

const HERO_IMAGE = "/images/hero2.png";

function Star({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m16 3 3.9 8.3 9.1 1.2-6.7 6.4 1.7 9.1-8-4.5-8 4.5 1.7-9.1L3 12.5l9.1-1.2L16 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomeHero() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="home-hero-title">
        {/* Photograph and soft white / cream blend */}
        <div className={styles.photo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            width={1536}
            height={1024}
            alt="A woman smiling while studying with a tablet and notebook"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          <div className={styles.photoFade} aria-hidden="true" />

          <svg
            className={styles.photoCurve}
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 25C180-25 275 20 420 105S730 215 1000 180V200H0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Decorative elements never cover or block controls */}
        <div className={styles.decorations} aria-hidden="true">
          <Star className={`${styles.star} ${styles.starOne}`} />
          <Star className={`${styles.star} ${styles.starTwo}`} />
          <Star className={`${styles.star} ${styles.starThree}`} />

          <span className={`${styles.dot} ${styles.dotOne}`} />
          <span className={`${styles.dot} ${styles.dotTwo}`} />
          <span className={`${styles.dot} ${styles.dotThree}`} />

          <span className={`${styles.dotPattern} ${styles.patternOne}`} />
          <span className={`${styles.dotPattern} ${styles.patternTwo}`} />

          <svg
            className={styles.planet}
            viewBox="0 0 80 64"
            fill="none"
          >
            <circle
              cx="40"
              cy="32"
              r="18"
              fill="#E8EFEB"
              stroke="#8EAFA7"
              strokeWidth="1.5"
            />
            <ellipse
              cx="40"
              cy="32"
              rx="34"
              ry="9"
              transform="rotate(-25 40 32)"
              stroke="#8EAFA7"
              strokeWidth="1.8"
            />
            <path
              d="M36 20a13 13 0 0 1 13 7"
              stroke="#FFFDF8"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className={styles.heroInner}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              ONE CHILD. ONE TEACHER. EVERY POSSIBILITY.
            </p>

            <h1 id="home-hero-title">
              Personalised learning.
              <br />
              Caring Teacher-Moms.
              <br />
              <span className={styles.highlight}>
                Growing confidence.
              </span>
            </h1>

            <p className={styles.description}>
              One-to-one online tuition from KG to Class 12, with lessons
              shaped around your child’s curriculum, pace and learning
              needs.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryButton}>
                Book a free demo
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link href="/services" className={styles.secondaryLink}>
                Explore our classes
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <p className={styles.learningNote}>
              <span aria-hidden="true" />
              Learning from home. Connecting across countries.
            </p>
          </div>
        </div>

        {/* The divider shares its colour with the following section */}
        <svg
          className={styles.sectionWave}
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M0 48
              C180 84 310 70 490 45
              S690 23 810 53
              S1110 18 1270 36
              S1390 52 1440 43
              V110H0Z
            "
            fill="currentColor"
          />
        </svg>
      </section>

      <section
        className={styles.learningSection}
        aria-labelledby="learning-section-title"
      >
        <div className={styles.learningInner}>
          <div>
            <p className={styles.sectionEyebrow}>
              A LITTLE SUPPORT. A WORLD OF POSSIBILITY.
            </p>

            <h2 id="learning-section-title">
              Their pace. Their questions.
              <br />
              Their time to shine.
            </h2>
          </div>

          <div className={styles.learningCopy}>
            <p>
              Every child learns differently. Our one-to-one classes give
              them room to ask questions, revisit the tricky parts and
              build understanding—one lesson at a time.
            </p>

            <Link href="/services">
              Find their learning path
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}