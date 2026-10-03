"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./ScrollRevealList.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function ScrollRevealList({
  children,
  className = "",
}: Props) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;

    if (!list || !("IntersectionObserver" in window)) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (motionPreference.matches) return;

    const cards = Array.from(list.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement,
    );

    // Content is visible before JavaScript loads.
    // Only cards below the viewport are prepared for animation.
    cards.forEach((card) => {
      card.dataset.reveal =
        card.getBoundingClientRect().top >= window.innerHeight * 0.92
          ? "pending"
          : "visible";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          (entry.target as HTMLElement).dataset.reveal = "visible";
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    cards.forEach((card) => {
      if (card.dataset.reveal === "pending") {
        observer.observe(card);
      }
    });

    function showAllCards() {
      if (!motionPreference.matches) return;

      observer.disconnect();

      cards.forEach((card) => {
        card.dataset.reveal = "visible";
      });
    }

    motionPreference.addEventListener("change", showAllCards);

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", showAllCards);

      cards.forEach((card) => {
        delete card.dataset.reveal;
      });
    };
  }, []);

  return (
    <div
      ref={listRef}
      className={`${styles.list} ${className}`}
    >
      {children}
    </div>
  );
}