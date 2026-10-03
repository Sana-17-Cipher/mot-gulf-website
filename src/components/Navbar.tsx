"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locations } from "@/data/locations";
import styles from "./Navbar.module.css";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "FAQ", href: "/faq" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const locationButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenus() {
    setMobileOpen(false);
    setLocationsOpen(false);
  }

  useEffect(() => {
    function handleOutsideClick(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setMobileOpen(false);
        setLocationsOpen(false);
      }
    }

    const desktop = window.matchMedia("(min-width: 1101px)");

    function handleBreakpointChange() {
      setMobileOpen(false);
      setLocationsOpen(false);
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    desktop.addEventListener("change", handleBreakpointChange);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      desktop.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={styles.header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenus();
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;

        if (locationsOpen) {
          setLocationsOpen(false);
          locationButtonRef.current?.focus();
        } else if (mobileOpen) {
          setMobileOpen(false);
          mobileButtonRef.current?.focus();
        }
      }}
    >
      <nav className={styles.bar} aria-label="Main navigation">
        <Link href="/" className={styles.logo} onClick={closeMenus}>
          <Image
            src="/images/mot-logo.png"
            alt=""
            width={42}
            height={42}
            className={styles.logoImage}
          />
          <span>Moms on Teaching</span>
        </Link>

        <button
          ref={mobileButtonRef}
          type="button"
          className={styles.toggle}
          aria-expanded={mobileOpen}
          aria-controls="main-navigation-links"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => {
            setMobileOpen((open) => !open);
            setLocationsOpen(false);
          }}
        >
          <span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
        </button>

        <div
          id="main-navigation-links"
          className={styles.links}
          data-open={mobileOpen}
        >
          {links.map((link) => {
            const active =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

            if (link.href === "/locations") {
              return (
                <div
                  key={link.href}
                  className={styles.locationGroup}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") {
                      setLocationsOpen(true);
                    }
                  }}
                  onPointerLeave={(event) => {
                    if (
                      event.pointerType === "mouse" &&
                      !event.currentTarget.contains(document.activeElement)
                    ) {
                      setLocationsOpen(false);
                    }
                  }}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setLocationsOpen(false);
                    }
                  }}
                >
                  <button
                    ref={locationButtonRef}
                    type="button"
                    className={styles.navLink}
                    data-active={active}
                    aria-expanded={locationsOpen}
                    aria-controls="location-navigation"
                    onClick={() => setLocationsOpen((open) => !open)}
                  >
                    Locations
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className={styles.chevron}
                      data-open={locationsOpen}
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    id="location-navigation"
                    className={styles.dropdown}
                    hidden={!locationsOpen}
                  >
                    <ul className={styles.dropdownList}>
                      {locations.map((location) => {
                        const href = `/locations/${location.slug}`;

                        return (
                          <li key={location.slug}>
                            <Link
                              href={href}
                              aria-current={
                                pathname === href ? "page" : undefined
                              }
                              onClick={closeMenus}
                            >
                              {location.name}
                              <span aria-hidden="true">↗</span>
                            </Link>
                          </li>
                        );
                      })}
                      <li className={styles.allLocations}>
                        <Link href="/locations" onClick={closeMenus}>
                          View all locations
                          <span aria-hidden="true">→</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
                data-active={active}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={closeMenus}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={styles.demo}
            onClick={closeMenus}
          >
            Book Free Demo <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}