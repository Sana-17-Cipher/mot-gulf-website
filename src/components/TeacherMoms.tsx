"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import styles from "./TeacherMoms.module.css";

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
        d={direction === "left" ? "M14 5l-7 7 7 7" : "M10 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TeacherMoms({ teachers }: Props) {
  const viewportId = useId();
  const viewportRef = useRef<HTMLDivElement>(null);
  const gestureRef = useRef<{
    id: number;
    x: number;
    y: number;
    horizontal: boolean;
  } | null>(null);

  const firstId = teachers[0]?.id ?? "";

  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const [activeId, setActiveId] = useState(firstId);
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 640px)");
    const tablet = window.matchMedia("(max-width: 960px)");

    function updateLayout() {
      setPerPage(mobile.matches ? 1 : tablet.matches ? 2 : 3);
      setPage(0);
      setActiveId(firstId);
      setDrag(0);
      setDragging(false);
      gestureRef.current = null;
    }

    updateLayout();

    mobile.addEventListener("change", updateLayout);
    tablet.addEventListener("change", updateLayout);

    return () => {
      mobile.removeEventListener("change", updateLayout);
      tablet.removeEventListener("change", updateLayout);
    };
  }, [firstId]);

  const groups: Teacher[][] = [];

  for (let index = 0; index < teachers.length; index += perPage) {
    groups.push(teachers.slice(index, index + perPage));
  }

  const currentPage = Math.min(page, Math.max(0, groups.length - 1));
  const currentGroup = groups[currentPage] ?? [];

  const selectedId = currentGroup.some((teacher) => teacher.id === activeId)
    ? activeId
    : currentGroup[0]?.id;

  const firstVisible = currentPage * perPage + 1;
  const lastVisible = Math.min(
    (currentPage + 1) * perPage,
    teachers.length,
  );

  function goToPage(nextPage: number) {
    const next = Math.max(0, Math.min(nextPage, groups.length - 1));

    setPage(next);
    setActiveId(groups[next]?.[0]?.id ?? "");
    setDrag(0);
    setDragging(false);
  }

  function startGesture(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;

    gestureRef.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      horizontal: false,
    };
  }

  function moveGesture(event: PointerEvent<HTMLDivElement>) {
    const gesture = gestureRef.current;

    if (!gesture || gesture.id !== event.pointerId) return;

    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;

    if (!gesture.horizontal) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
        gestureRef.current = null;
        return;
      }

      if (Math.abs(dx) < 10) return;

      gesture.horizontal = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
    }

    const atStart = currentPage === 0 && dx > 0;
    const atEnd = currentPage === groups.length - 1 && dx < 0;

    const width = event.currentTarget.clientWidth;
    const distance = atStart || atEnd ? dx * 0.18 : dx;

    setDrag(Math.max(-width, Math.min(width, distance)));
  }

  function endGesture(event: PointerEvent<HTMLDivElement>) {
    const gesture = gestureRef.current;

    if (!gesture || gesture.id !== event.pointerId) return;

    const dx = event.clientX - gesture.x;
    const threshold = Math.min(
      90,
      event.currentTarget.clientWidth * 0.15,
    );

    gestureRef.current = null;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (gesture.horizontal && Math.abs(dx) > threshold) {
      // Keep keyboard focus within the visible part of the carousel.
      event.currentTarget.focus({ preventScroll: true });
      goToPage(currentPage + (dx < 0 ? 1 : -1));
    } else {
      setDrag(0);
      setDragging(false);
    }
  }

  function cancelGesture() {
    gestureRef.current = null;
    setDrag(0);
    setDragging(false);
  }

  if (teachers.length === 0) return null;

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Meet our teacher-moms"
    >
      <div className={styles.toolbar}>
        <p>Get to know our educators</p>

        <div className={styles.controls}>
          <button
            type="button"
            aria-label="Previous teachers"
            aria-controls={viewportId}
            disabled={currentPage === 0}
            onClick={() => goToPage(currentPage - 1)}
          >
            <Arrow direction="left" />
          </button>

          <button
            type="button"
            aria-label="Next teachers"
            aria-controls={viewportId}
            disabled={currentPage === groups.length - 1}
            onClick={() => goToPage(currentPage + 1)}
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>

      <div
        id={viewportId}
        ref={viewportRef}
        className={styles.viewport}
        tabIndex={0}
        aria-label="Teacher cards. Use left and right arrow keys to browse."
        onPointerDown={startGesture}
        onPointerMove={moveGesture}
        onPointerUp={endGesture}
        onPointerCancel={cancelGesture}
        onKeyDown={(event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
            return;
          }

          event.preventDefault();
          event.currentTarget.focus({ preventScroll: true });

          goToPage(
            currentPage + (event.key === "ArrowRight" ? 1 : -1),
          );
        }}
      >
        <div
          className={`${styles.track} ${dragging ? styles.dragging : ""}`}
          style={{
            transform: `translate3d(calc(${
              -currentPage * 100
            }% + ${drag}px), 0, 0)`,
          }}
        >
          {groups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${groupIndex + 1} of ${groups.length}`}
              aria-hidden={groupIndex !== currentPage}
              inert={groupIndex !== currentPage}
            >
              {group.map((teacher, teacherIndex) => {
                const expanded =
                  groupIndex === currentPage
                    ? teacher.id === selectedId
                    : teacherIndex === 0;

                return (
                  <article
                    key={teacher.id}
                    className={`${styles.card} ${
                      expanded ? styles.expanded : ""
                    }`}
                    tabIndex={0}
                    aria-label={teacher.name}
                    onPointerEnter={(event) => {
                      if (
                        event.pointerType === "mouse" &&
                        !gestureRef.current
                      ) {
                        setActiveId(teacher.id);
                      }
                    }}
                    onFocus={() => setActiveId(teacher.id)}
                    onClick={() => setActiveId(teacher.id)}
                  >
                    <div className={styles.portrait}>
                      {teacher.image ? (
                        <Image
                          src={teacher.image}
                          alt={teacher.name}
                          fill
                          draggable={false}
                          sizes="(max-width: 640px) 100vw, (max-width: 960px) 60vw, 45vw"
                          className={styles.photo}
                        />
                      ) : (
                        <div
                          className={styles.placeholder}
                          aria-hidden="true"
                        >
                          {teacher.name
                            .split(" ")
                            .slice(0, 2)
                            .map((part) => part[0])
                            .join("")}
                        </div>
                      )}
                    </div>

                    <div className={styles.content}>
                      <p className={styles.experience}>
                        {teacher.experience}
                      </p>

                      <h3>{teacher.name}</h3>

                      <ul>
                        {teacher.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>

                      {teacher.curriculum && (
                        <span className={styles.badge}>
                          {teacher.curriculum}
                        </span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <p role="status" aria-live="polite" aria-atomic="true">
          Teachers {firstVisible}–{lastVisible} of {teachers.length}
        </p>

        <div className={styles.pagination} aria-label="Choose teacher slide">
          {groups.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show teachers ${index * perPage + 1} to ${Math.min(
                (index + 1) * perPage,
                teachers.length,
              )}`}
              aria-current={index === currentPage ? "true" : undefined}
              onClick={() => goToPage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}