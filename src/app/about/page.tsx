import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | Moms on Teaching",
  description:
    "Discover the story behind Moms on Teaching: personalised one-to-one online tuition, caring Teacher-Moms, and a community connecting families across the Gulf and the United States.",
  openGraph: {
    title: "A Global Community Built Around Every Child | Moms on Teaching",
    description:
      "From our beginnings in the Gulf to supporting Indian-American families, discover why we put every child at the centre of learning.",
    type: "website",
  },
};

// Place this entire folder at src/app/about/ (or app/about/).
// Uses your existing root layout, navigation and footer.
// No client component, external image, animation library or new package needed.
// Add your confirmed canonical URL through your site's metadata configuration.

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About us</span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>OUR STORY</p>
              <h1 id="about-title">
                A global community.<br />
                Built around <em>every child.</em>
              </h1>
              <p className={styles.lead}>
                Every child deserves someone who understands how they learn.
                That simple belief is where Moms on Teaching began.
              </p>
              <a href="#our-beginning" className={styles.storyLink}>
                Read our story <span aria-hidden="true">↓</span>
              </a>
            </div>

            <aside className={styles.beliefNote} aria-label="Our founding belief">
              <span className={styles.noteTab}>THE BELIEF BEHIND IT ALL</span>
              <p className={styles.noteStatement}>
                A little understanding.<br />
                The right guidance.<br />
                <em>Room to grow.</em>
              </p>
              <div className={styles.noteRule} aria-hidden="true" />
              <p className={styles.noteCaption}>
                Professional expertise, with genuine care.
              </p>
              <span className={styles.noteSignature}>Moms on Teaching</span>
            </aside>
          </div>
        </div>
      </section>

      <section id="our-beginning" className={styles.chapter} aria-labelledby="beginning-title">
        <div className={`${styles.container} ${styles.editorialGrid}`}>
          <div>
            <p className={styles.eyebrow}>01 / WHY WE BEGAN</p>
            <h2 id="beginning-title">Learning is personal.<br />The guidance should be, too.</h2>
          </div>
          <div className={styles.prose}>
            <p>
              Every child brings a different set of questions, strengths and
              ambitions to a lesson. We believe their learning should make
              space for all of them.
            </p>
            <p>
              Moms on Teaching brings together personalised one-to-one online
              tuition and educators who combine professional expertise with
              genuine care. Our purpose is simple: to help children learn in a
              way that respects their pace and supports their individual goals.
            </p>
          </div>
        </div>
      </section>

      

      <section className={styles.chapter} aria-labelledby="people-title">
        <div className={`${styles.container} ${styles.peopleGrid}`}>
          <div className={styles.peopleIntro}>
            <p className={styles.eyebrow}>02 / THE PEOPLE BEHIND THE LESSONS</p>
            <h2 id="people-title">Educators by profession.<br /><em>Teacher-Moms at heart.</em></h2>
            <p>
              We are a community of Teacher-Moms: educators who bring teaching
              expertise and an understanding of children to one-to-one learning.
            </p>
            <p>
              Alongside supporting families, our mission is to create meaningful
              work-from-home opportunities for qualified Teacher-Moms around the world.
            </p>
          </div>
          <div className={styles.values}>
            <article>
              <span className={styles.valueNumber} aria-hidden="true">01</span>
              <div><h3>Patience that makes space for questions</h3>
                <p>Children learn at their own pace. Our approach values encouragement, empathy and the time to understand.</p></div>
            </article>
            <article>
              <span className={styles.valueNumber} aria-hidden="true">02</span>
              <div><h3>Perspective across curricula</h3>
                <p>With support for Indian and international curricula, learning can stay connected to your child’s educational path.</p></div>
            </article>
            <article>
              <span className={styles.valueNumber} aria-hidden="true">03</span>
              <div><h3>Attention to the individual</h3>
                <p>One child and one teacher, with lessons shaped around the questions, concepts and goals that matter to them.</p></div>
            </article>
          </div>
        </div>
        {/* OPTIONAL FOUNDER SECTION: Insert a section here when details are ready.
            Suggested structure:
            <section className={styles.founder} aria-labelledby="founder-title">
              <div className={styles.container}>
                <p className={styles.eyebrow}>A NOTE FROM OUR FOUNDER</p>
                <h2 id="founder-title">The person behind the beginning</h2>
                <blockquote className={styles.founderQuote}>
                  Add the founder's own account of why they started Moms on Teaching.
                </blockquote>
                <p>Add the founder's name and confirmed role.</p>
              </div>
            </section>
            Add genuine teacher profiles, qualifications and your confirmed
            teacher selection process here if you want to expand this story.
        */}
      </section>

      <section className={styles.purpose} aria-labelledby="purpose-title">
        <div className={styles.container}>
          <p className={styles.eyebrow}>03 / WHAT KEEPS US MOVING</p>
          <h2 id="purpose-title">Growing a community.<br />Keeping the care.</h2>
          <div className={styles.purposeGrid}>
            <article>
              <h3>Our mission</h3>
              <p>To provide every child with personalised one-on-one learning while creating meaningful work-from-home opportunities for qualified Teacher-Moms around the world.</p>
            </article>
            <article>
              <h3>Our vision</h3>
              <p>To build a global learning community where children thrive academically and educators empower families through compassionate, personalised teaching.</p>
            </article>
          </div>
          {/* Optional: add verified impact figures here with their measurement
              period and source. No statistics or outcome guarantees are assumed. */}
        </div>
      </section>

      <section className={styles.invitation} aria-labelledby="invitation-title">
        <div className={`${styles.container} ${styles.invitationGrid}`}>
          <div>
            <p className={styles.eyebrow}>THE NEXT CHAPTER STARTS WITH A CONVERSATION</p>
            <h2 id="invitation-title">Tell us about <em>your child.</em></h2>
            <p>Their questions. Their interests. The things they find difficult.<br className={styles.desktopBreak} /> Let’s explore the support that could help them move forward.</p>
          </div>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} href="/contact">Let’s talk <span aria-hidden="true">↗</span></Link>
            <Link className={styles.secondaryLink} href="/services">Explore our classes <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
