"use client";

import { useState, type FormEvent } from "react";
import styles from "@/app/contact/contact.module.css";

export default function ContactForm() {
  const [draftOpened, setDraftOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const getValue = (name: string) =>
      String(formData.get(name) ?? "").trim();

    const subject = "Free demo enquiry — Moms on Teaching";

    const message = [
      "Hello Moms on Teaching,",
      "",
      "I would like to enquire about a free demo class.",
      "",
      `Parent's name: ${getValue("parentName")}`,
      `Phone number: ${getValue("phoneNumber")}`,
      `Curriculum: ${getValue("service")}`,
      `Emirate / location: ${getValue("emirate")}`,
      "",
      "Child's class and learning needs:",
      getValue("message") || "To be discussed.",
    ].join("\n");

    window.location.href =
      `mailto:info@momsonteaching.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(message)}`;

    setDraftOpened(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="parent-name">Parent’s name</label>
          <input
            id="parent-name"
            name="parentName"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            maxLength={100}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="phone-number">Phone number</label>
          <input
            id="phone-number"
            name="phoneNumber"
            type="tel"
            placeholder="Include country code"
            autoComplete="tel"
            maxLength={30}
            required
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="curriculum">Curriculum</label>
          <select id="curriculum" name="service" defaultValue="" required>
            <option value="" disabled>
              Select curriculum
            </option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="IGCSE">IGCSE</option>
            <option value="IB">IB</option>
            <option value="US Curriculum">US Curriculum</option>
            <option value="Kerala State Board">Kerala State Board</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="emirate">Emirate</label>
          <select id="emirate" name="emirate" defaultValue="" required>
            <option value="" disabled>
              Select emirate
            </option>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="Dubai">Dubai</option>
            <option value="Sharjah">Sharjah</option>
            <option value="Ajman">Ajman</option>
            <option value="Umm Al Quwain">Umm Al Quwain</option>
            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
            <option value="Fujairah">Fujairah</option>
            <option value="Outside the UAE">Outside the UAE</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">
          How can we help? <span>(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          maxLength={1200}
          placeholder="Your child’s class, subjects and any learning needs"
        />
      </div>

      <div className={styles.submitRow}>
        <button type="submit" className={styles.submit}>
          Request a free demo
          <span aria-hidden="true">↗</span>
        </button>
        <p>Opens your email app to send the request.</p>
      </div>

      {draftOpened && (
        <p className={styles.status} role="status">
          Your request has not been sent yet. Send the draft in your email
          app, or contact{" "}
          <a href="mailto:info@momsonteaching.com">
            info@momsonteaching.com
          </a>{" "}
          if it didn’t open.
        </p>
      )}
    </form>
  );
}