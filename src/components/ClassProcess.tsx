import type { CSSProperties } from "react";
import styles from "./ClassProcess.module.css";

const steps = [
  {
    title: "Book Demo",
    description:
      "Start with a demo session to explore one-to-one learning for your child.",
  },
  {
    title: "Meet Teacher",
    description:
      "Meet the best tutor and get to know them through an interactive session.",
  },
  {
    title: "Learning Assessment",
    description:
      "Understand your child’s current learning needs and the concepts that need more attention.",
  },
  {
    title: "Personalized Plan",
    description:
      "Bring those learning needs together in a plan built around your child.",
  },
  {
    title: "Weekly Classes",
    description:
      "Continue learning through regular one-to-one classes, with time to practise and ask questions.",
  },
  {
    title: "Progress Reports",
    description:
      "Follow your child’s progress and understand what they are working towards next.",
  },
];

export default function ClassProcess() {
  return (
    <section
      className={styles.process}
      aria-labelledby="class-process-title"
    >
      <div className={styles.layout}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>
            YOUR CHILD’S LEARNING JOURNEY
          </p>

          <h2 id="class-process-title">
            <span>How a Class</span>
            <span>Works</span>
          </h2>

          <p className={styles.introduction}>
            From the first conversation to ongoing progress,
            here’s how learning comes together.
          </p>

          <div className={styles.headingRule} aria-hidden="true" />
        </header>

        <ol className={styles.stack}>
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={styles.stepCard}
              style={
                {
                  "--step": index,
                } as CSSProperties
              }
            >
              <div className={styles.cardHeader}>
                <span className={styles.stepLabel}>
                  STEP {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.smallRule} aria-hidden="true" />
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>

              <span className={styles.cornerNumber} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}