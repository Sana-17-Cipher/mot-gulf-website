"use client";

import { useEffect, useRef } from "react";
import styles from "./ContactEyes.module.css";

export default function ContactEyes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pupils =
      container.querySelectorAll<HTMLSpanElement>("[data-pupil]");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let frameId: number | null = null;
    let cursorX = 0;
    let cursorY = 0;

    function resetEyes() {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }

      pupils.forEach((pupil) => {
        pupil.style.setProperty("--look-x", "0px");
        pupil.style.setProperty("--look-y", "0px");
      });
    }

    function updateEyes() {
      frameId = null;

      if (reducedMotion.matches) return;

      pupils.forEach((pupil) => {
        const eye = pupil.parentElement;
        if (!eye) return;

        const rect = eye.getBoundingClientRect();

        const deltaX = cursorX - (rect.left + rect.width / 2);
        const deltaY = cursorY - (rect.top + rect.height / 2);

        // Keep movement subtle and inside the whites of the eyes.
        const distance = Math.max(120, Math.hypot(deltaX, deltaY));

        pupil.style.setProperty(
          "--look-x",
          `${(deltaX / distance) * 5}px`
        );

        pupil.style.setProperty(
          "--look-y",
          `${(deltaY / distance) * 4}px`
        );
      });
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType === "touch" || reducedMotion.matches) {
        return;
      }

      cursorX = event.clientX;
      cursorY = event.clientY;

      if (frameId === null) {
        frameId = requestAnimationFrame(updateEyes);
      }
    }

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    document.documentElement.addEventListener(
      "pointerleave",
      resetEyes
    );

    window.addEventListener("blur", resetEyes);
    reducedMotion.addEventListener("change", resetEyes);

    return () => {
      resetEyes();

      window.removeEventListener("pointermove", handlePointerMove);

      document.documentElement.removeEventListener(
        "pointerleave",
        resetEyes
      );

      window.removeEventListener("blur", resetEyes);
      reducedMotion.removeEventListener("change", resetEyes);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.eyes}
      aria-hidden="true"
    >
      <span className={styles.eye}>
        <span className={styles.pupil} data-pupil />
      </span>

      <span className={styles.eye}>
        <span className={styles.pupil} data-pupil />
      </span>
    </div>
  );
}