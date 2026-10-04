"use client";

import { useState } from "react";
import styles from "./HomeTestimonials.module.css";

const testimonials = [
  {
    id: "parent-confidence",
    quote:
      "My daughter feels more comfortable asking questions and explaining what she has learnt.",
    author: "Parent ",
  },
  {
    id: "student-pace",
    quote:
      "I can ask my teacher to explain something again and work through it at my own pace.",
    author: "Student ",
  },
  {
    id: "parent-attention",
    quote:
      "We appreciate the individual attention and the time spent on topics our child finds difficult.",
    author: "Parent ",
  },
  {
    id: "student-understanding",
    quote:
      "Working through each step with my teacher makes difficult questions feel more manageable.",
    author: "Student",
  },
  {
    id: "parent-support",
    quote:
      "The patient explanations and regular conversations help us stay involved in our child’s learning.",
    author: "Parent ",
  },
];

export default function HomeTestimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className={styles.section}
      aria-labelledby="testimonials-title"
      data-paused={paused}
    >
      <div className={styles.heading}>
        <h2 id="testimonials-title">Small moments. Meaningful progress.</h2>

        <button
          type="button"
          className={styles.motionButton}
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
          aria-label="Pause testimonial animation"
        >
          {paused ? (
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="m7 4 9 6-9 6V4Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <rect x="5" y="4" width="3" height="12" rx="1" />
              <rect x="12" y="4" width="3" height="12" rx="1" />
            </svg>
          )}

          <span>{paused ? "Resume" : "Pause"}</span>
        </button>
      </div>

      <div
        className={styles.viewport}
        tabIndex={0}
        role="region"
        aria-label="Illustrative parent and student feedback. Focus here to pause scrolling."
      >
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className={styles.group}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {testimonials.map((testimonial) => (
                <figure className={styles.card} key={testimonial.id}>
                  <span className={styles.quoteMark} aria-hidden="true">
                    “
                  </span>

                  <blockquote>
                    <p>{testimonial.quote}</p>
                  </blockquote>

                  <figcaption>
                    <span className={styles.authorDot} aria-hidden="true" />
                    {testimonial.author}
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}