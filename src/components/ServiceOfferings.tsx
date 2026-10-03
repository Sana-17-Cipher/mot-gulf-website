import styles from "./ServiceOfferings.module.css";

const programmes = [
  { name: "CBSE", grades: "Grades 1–12" },
  { name: "ICSE", grades: "Grades 1–12" },
  { name: "IGCSE", grades: "Grades 1–12" },
  { name: "IB", grades: "Grades 1–12" },
  { name: "General", grades: "KG–Plus Two" },
];

const tracks = [
  {
    id: "foundation",
    number: "01",
    label: "BUILD UNDERSTANDING",
    title: "Strong Roots",
    subtitle: "Foundation",
    description: "For students needing concept clarity.",
    items: [],
  },
  {
    id: "academic",
    number: "02",
    label: "SUPPORT EVERYDAY LEARNING",
    title: "Academic",
    subtitle: "Mastery",
    description: "",
    items: ["Daily learning", "Homework", "Assignments"],
  },
  {
    id: "exams",
    number: "03",
    label: "PREPARE WITH PURPOSE",
    title: "Exam",
    subtitle: "Success",
    description: "",
    items: ["Revision", "Mock Tests", "Performance Analysis"],
  },
];

export default function ServiceOfferings() {
  return (
    <div className={styles.offerings}>
      <section
        id="programmes"
        className={styles.programmes}
        aria-labelledby="programmes-title"
      >
        <svg
          className={styles.topCurve}
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M0 0H1440V12C1020 90 430 90 0 12Z" />
        </svg>

        <div className={styles.container}>
          <header className={styles.programmeHeading}>
            <div>
              <p className={styles.eyebrow}>CURRICULUM SUPPORT</p>

              <h2 id="programmes-title">
                Our Tutoring
                <span>Programmes</span>
              </h2>
            </div>

            <p className={styles.headingNote}>
              One-to-one online tuition,
              <br />
              from KG to Class 12.
            </p>
          </header>

          <div className={styles.programmeGrid}>
            {programmes.map((programme, index) => (
              <article
                key={programme.name}
                className={styles.programmeCard}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardLabel}>PROGRAMME</span>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{programme.name}</h3>

                <div className={styles.cardBottom}>
                  <p>{programme.grades}</p>
                  <span className={styles.paperMark} aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.paperEdge} aria-hidden="true" />
      </section>

      <section
        className={styles.learning}
        aria-labelledby="learning-title"
      >
        <div className={styles.container}>
          <header className={styles.learningHeading}>
            <p className={styles.eyebrow}>SUPPORT AT EVERY STAGE</p>

            <h2 id="learning-title">
              Our Learning <span>Tracks</span>
            </h2>

            <p className={styles.learningIntro}>
              Targeted learning tracks for every child’s needs, from
              building strong foundations to preparing for exams.
            </p>
          </header>

          <div className={styles.trackList}>
            {tracks.map((track) => (
              <article className={styles.trackPanel} key={track.id}>
                <div className={styles.trackTitle}>
                  <span className={styles.trackNumber} aria-hidden="true">
                    {track.number}
                  </span>

                  <div>
                    <p className={styles.trackLabel}>{track.label}</p>

                    <h3>
                      {track.title}
                      <span>{track.subtitle}</span>
                    </h3>
                  </div>
                </div>

                <div className={styles.trackDetails}>
                  {track.description && (
                    <p className={styles.foundationText}>
                      {track.description}
                    </p>
                  )}

                  {track.items.length > 0 && (
                    <ul>
                      {track.items.map((item, index) => (
                        <li key={item}>
                          <span className={styles.detailNumber}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}