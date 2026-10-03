"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "../app/services/services.module.css";

type Teacher = {
  id: string;
  name: string;
  experience: string;
  details: string[];
  curriculum: string;
  image: string | null;
};

type Props = {
  teachers: Teacher[];
};

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TeacherMoms({ teachers }: Props) {
  const [active, setActive] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  if (teachers.length === 0) return null;

  function select(index: number) {
    const nextIndex = Math.max(0, Math.min(index, teachers.length - 1));

    setActive(nextIndex);

    const rail = railRef.current;

    if (!rail || !window.matchMedia("(max-width: 760px)").matches) {
      return;
    }

    const card = rail.children[nextIndex] as HTMLElement | undefined;

    if (!card) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    rail.scrollTo({
      left:
        rail.scrollLeft +
        card.getBoundingClientRect().left -
        rail.getBoundingClientRect().left,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  function updateFromSwipe() {
    const rail = railRef.current;

    if (!rail || !window.matchMedia("(max-width: 760px)").matches) {
      return;
    }

    const railLeft = rail.getBoundingClientRect().left;

    let nearestIndex = 0;
    let nearestDistance = Infinity;

    Array.from(rail.children).forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().left - railLeft,
      );

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActive(nearestIndex);
  }

  return (
    <div
      className={styles.teacherCarousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Teacher profiles"
    >
      <div className={styles.carouselToolbar}>
        <p className={styles.carouselHint}>
          Get to know our educators
        </p>

        <div className={styles.carouselControls}>
          <button
            type="button"
            aria-label="Previous teacher"
            aria-controls="teacher-profiles"
            disabled={active === 0}
            onClick={() => select(active - 1)}
          >
            <Arrow direction="left" />
          </button>

          <button
            type="button"
            aria-label="Next teacher"
            aria-controls="teacher-profiles"
            disabled={active === teachers.length - 1}
            onClick={() => select(active + 1)}
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>

      <div
        id="teacher-profiles"
        ref={railRef}
        className={styles.teacherRail}
        onScroll={updateFromSwipe}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            select(active + 1);
          }

          if (event.key === "ArrowLeft") {
            event.preventDefault();
            select(active - 1);
          }
        }}
      >
        {teachers.map((teacher, index) => (
          <article
            key={teacher.id}
            className={`${styles.teacherCard} ${
              active === index ? styles.teacherActive : ""
            }`}
            onMouseEnter={() => {
              if (window.matchMedia("(hover: hover)").matches) {
                setActive(index);
              }
            }}
            onFocusCapture={() => setActive(index)}
            aria-labelledby={`teacher-${teacher.id}`}
          >
            <button
              type="button"
              className={styles.teacherPortrait}
              onClick={() => select(index)}
              aria-label={`Highlight ${teacher.name}`}
              aria-pressed={active === index}
            >
              {teacher.image ? (
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  sizes="(max-width: 760px) 85vw, 50vw"
                  className={styles.teacherImage}
                />
              ) : (
                <span className={styles.portraitPlaceholder}>
                  <span aria-hidden="true">
                    {teacher.name
                      .split(" ")
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <span>Teacher portrait</span>
                </span>
              )}
            </button>

            <div className={styles.teacherContent}>
              <p className={styles.teacherExperience}>
                {teacher.experience}
              </p>

              <h3 id={`teacher-${teacher.id}`}>{teacher.name}</h3>

              <ul>
                {teacher.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              {teacher.curriculum && (
                <span className={styles.curriculum}>
                  {teacher.curriculum}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className={styles.carouselBottom}>
        <p role="status" aria-live="polite" aria-atomic="true">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(teachers.length).padStart(2, "0")}
        </p>

        <div className={styles.carouselDots} aria-label="Choose a teacher">
          {teachers.map((teacher, index) => (
            <button
              key={teacher.id}
              type="button"
              aria-label={`Show ${teacher.name}`}
              aria-pressed={active === index}
              className={active === index ? styles.dotActive : ""}
              onClick={() => select(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}