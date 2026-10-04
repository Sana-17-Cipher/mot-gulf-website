"use client";

import { useState, type CSSProperties } from "react";
import styles from "./BookDomino.module.css";

const books = [
  { label: "MATHS", color: "#d7a447", height: 59, width: 17 },
  { label: " ", color: "#b9c4aa", height: 49, width: 19 },
  { label: "SCIENCE", color: "#203650", height: 65, width: 18 },
  { label: "READ", color: "#d39a9c", height: 55, width: 16 },
  { label: " ", color: "#6d9194", height: 62, width: 20 },
  { label: "ART", color: "#d9be88", height: 47, width: 16 },
  { label: " ", color: "#967e9b", height: 58, width: 18 },
  { label: "ABC", color: "#b86e4f", height: 53, width: 17 },
];

export default function BookDomino() {
  const [fallen, setFallen] = useState(false);

  return (
    <button
      type="button"
      className={styles.trigger}
      data-fallen={fallen}
      aria-label="Book domino animation"
      aria-pressed={fallen}
      title="Hover or tap to tip the books"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          setFallen(true);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          setFallen(false);
        }
      }}
      onClick={() => setFallen((previous) => !previous)}
      onBlur={() => setFallen(false)}
    >
      <span className={styles.scene} aria-hidden="true">
        <span className={styles.books}>
          {books.map((book, index) => (
            <span
              key={`book-${index}`}
              className={styles.book}
              style={
                {
                  "--cover": book.color,
                  "--height": `${book.height}px`,
                  "--width": `${book.width}px`,
                  "--fall-delay": `${index * 85}ms`,
                  "--reset-delay": `${(books.length - 1 - index) * 35}ms`,
                  "--angle": `${index === books.length - 1 ? 78 : 62}deg`,
                } as CSSProperties
              }
            >
              <span className={styles.topBand} />
              <span className={styles.label}>{book.label}</span>
              <span className={styles.bottomBand} />
            </span>
          ))}
        </span>

        <span className={styles.shelf} />
      </span>
    </button>
  );
}