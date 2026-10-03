"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./ScrollSequence.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  direction?: "alternate" | "up";
  as?: "div" | "ol";
};

function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

export default function ScrollSequence({
  children,
  className = "",
  direction = "up",
  as: Tag = "div",
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const container = stage?.firstElementChild;

    if (!root || !stage || !container) return;

    const cards = Array.from(container.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement,
    );

    if (cards.length < 2) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let enabled = false;
    let distance = 600;
    let stickyTop = 110;
    let frame = 0;

    function clearCardStyles() {
      cards.forEach((card) => {
        card.style.removeProperty("--sequence-opacity");
        card.style.removeProperty("--sequence-x");
        card.style.removeProperty("--sequence-y");
      });
    }

    function draw() {
      frame = 0;

      if (!enabled) return;

      const progress = Math.max(
        0,
        Math.min(
          cards.length - 1,
          (stickyTop - root!.getBoundingClientRect().top) / distance,
        ),
      );

      cards.forEach((card, index) => {
        // Each card remains still for most of its scroll interval.
        const entry =
          index === 0
            ? 1
            : clamp((progress - index + 0.35) / 0.35);

        const exit =
          index === cards.length - 1
            ? 0
            : clamp((progress - index - 0.65) / 0.35);

        const opacity = entry * (1 - exit);

        let x = 0;
        let y = 0;

        if (direction === "alternate") {
          const side = index % 2 === 0 ? -1 : 1;
          x = side * (1 - entry) * 64;
          y = -exit * 12;
        } else {
          y = (1 - entry) * 40 - exit * 24;
        }

        card.style.setProperty("--sequence-opacity", String(opacity));
        card.style.setProperty("--sequence-x", `${x}px`);
        card.style.setProperty("--sequence-y", `${y}px`);
      });
    }

    function scheduleDraw() {
      if (!frame) {
        frame = window.requestAnimationFrame(draw);
      }
    }

    function measure() {
      if (motionPreference.matches) {
        enabled = false;
        delete root!.dataset.enhanced;
        root!.style.removeProperty("--sequence-height");
        clearCardStyles();
        return;
      }

      root!.dataset.enhanced = "true";

      stickyTop =
        Number.parseFloat(getComputedStyle(stage!).top) || 110;

      const stageHeight = stage!.offsetHeight;

      // On short screens or at high text zoom, use the readable list.
      if (stageHeight + stickyTop + 40 > window.innerHeight) {
        enabled = false;
        delete root!.dataset.enhanced;
        root!.style.removeProperty("--sequence-height");
        clearCardStyles();
        return;
      }

      enabled = true;

      // Increase 0.95 to 1.2 for an even slower sequence.
      distance = Math.max(520, window.innerHeight * 0.95);

      root!.style.setProperty(
        "--sequence-height",
        `${stageHeight + distance * (cards.length - 1 + 0.4)}px`,
      );

      draw();
    }

    measure();

    window.addEventListener("scroll", scheduleDraw, { passive: true });
    window.addEventListener("resize", measure);
    motionPreference.addEventListener("change", measure);

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(container);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleDraw);
      window.removeEventListener("resize", measure);
      motionPreference.removeEventListener("change", measure);
      resizeObserver.disconnect();

      delete root.dataset.enhanced;
      root.style.removeProperty("--sequence-height");
      clearCardStyles();
    };
  }, [direction]);

  return (
    <div ref={rootRef} className={styles.sequence}>
      <div ref={stageRef} className={styles.stage}>
        <Tag className={`${styles.cards} ${className}`}>
          {children}
        </Tag>
      </div>
    </div>
  );
}