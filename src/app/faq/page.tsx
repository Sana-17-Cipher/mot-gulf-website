"use client";

import { useState } from "react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

type FaqCategory = {
  label: string;
  items: FaqItem[];
};

const faqData: FaqCategory[] = [
  {
    label: "About Our Tutors",
    items: [
      {
        id: 1,
        question: "Are your tutors background-checked?",
        answer:
          "Yes, every tutor completes identity verification and a background check before being matched with a family.",
      },
    ],
  },
  {
    label: "Services",
    items: [
      {
        id: 2,
        question: "What curricula and tuitions do you offer?",
        answer:
          "We support a range of curricula, including state standards, CBSE, and ICSE, across core subjects such as Mathematics, Science, English, and Social Studies, along with test preparation and enrichment tuitions tailored to each child's needs.",
      },
      {
        id: 3,
        question:
          "Can classes be conducted in Malayalam or Hindi alongside English?",
        answer:
          "Yes, many of our Teacher-Moms are fluent in Malayalam and Hindi and can conduct sessions bilingually, helping children stay connected to their language and culture while learning.",
      },
    ],
  },
  {
    label: "Scheduling & Logistics",
    items: [
      {
        id: 4,
        question: "What happens if we relocate to a different state?",
        answer:
          "Your sessions continue without interruption. All tutoring takes place online, so your family retains the same tutor and schedule regardless of relocation within the United States.",
      },
      {
        id: 5,
        question: "How do you track and report a child's academic progress?",
        answer:
          "Parents receive regular progress reports summarizing topics covered, assessment results, and tutor observations, along with periodic check-in calls to discuss milestones and next steps.",
      },
    ],
  },
  {
    label: "Pricing & Payments",
    items: [
      {
        id: 6,
        question: "What is the fee structure?",
        answer:
          "Fees are based on session frequency and subject level, with transparent monthly plans and no hidden charges. Complete pricing details are available on our Pricing page or through a consultation with our team.",
      },
    ],
  },
];

export default function FaqPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <main className="mot-faq-page">
      <section className="mot-faq-hero">
        <span className="mot-faq-hero-kicker">Support Center</span>
        <h1 className="mot-faq-title">Frequently Asked Questions</h1>
        <p className="mot-faq-subtitle">
          Find answers to the most common questions about our tutors,
          programmes, pricing, and learning process.
        </p>
      </section>

      <div className="mot-faq-hero-divider" aria-hidden="true">
        <span className="mot-faq-hero-divider-line" />
        <span className="mot-faq-hero-divider-mark" />
        <span className="mot-faq-hero-divider-line" />
      </div>

      <section className="mot-faq-content">
        {faqData.map((category) => (
          <div className="mot-faq-category" key={category.label}>
            <div className="mot-faq-category-header">
              <span className="mot-faq-category-rule" aria-hidden="true" />
              <span className="mot-faq-category-badge">{category.label}</span>
            </div>

            <div className="mot-faq-list">
              {category.items.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    className={`mot-faq-item${isOpen ? " mot-faq-item-open" : ""}`}
                    key={item.id}
                    onMouseEnter={() => setOpenId(item.id)}
                    onMouseLeave={() =>
                      setOpenId((prev) => (prev === item.id ? null : prev))
                    }
                  >
                    <button
                      className="mot-faq-question"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`mot-faq-answer-${item.id}`}
                    >
                      <span className="mot-faq-number">{item.id}</span>
                      <span className="mot-faq-question-text">
                        {item.question}
                      </span>
                      <span className="mot-faq-toggle" aria-hidden="true">
                        +
                      </span>
                    </button>

                    <div
                      className={`mot-faq-answer${isOpen ? " mot-faq-answer-visible" : ""}`}
                      id={`mot-faq-answer-${item.id}`}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="mot-faq-cta">
        <div className="mot-faq-cta-inner">
          <div className="mot-faq-cta-text-block">
            <h2 className="mot-faq-cta-title">Still have questions?</h2>
            <p className="mot-faq-cta-text">
              Our team is ready to help you find the perfect tutor for your
              child.
            </p>
          </div>
          <a href="/contact" className="mot-faq-cta-button">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}