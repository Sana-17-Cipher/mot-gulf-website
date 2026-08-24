"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const menuItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "#", dropdown: true },
  { label: "FAQ", href: "/faq" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const locations = [
  { name: "Dubai", href: "/locations/dubai" },
  { name: "Doha", href: "/locations/doha" },
  { name: "Kuwait City", href: "/locations/kuwait-city" },
  { name: "Manama", href: "/locations/manama" },
  { name: "Riyadh", href: "/locations/riyadh" },
  { name: "Muscat", href: "/locations/muscat" },
  { name: "Oman", href: "/locations/oman" },
  { name: "Bahrain", href: "/locations/bahrain" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  // Desktop overflow
  const [visibleCount, setVisibleCount] = useState(menuItems.length);

  const navMeasureRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  /*
   * IMPORTANT:
   * This is the same basic concept as the original CodeSandbox:
   *
   * available width
   *      ↓
   * measure menu items
   *      ↓
   * determine what fits
   *      ↓
   * overflow → More menu
   */
  useEffect(() => {
    const container = navMeasureRef.current;

    if (!container) return;

    const calculateItems = () => {
      const availableWidth = container.clientWidth;

      if (!availableWidth) return;

      const widths = itemRefs.current.map(
        (item) => item?.getBoundingClientRect().width || 0
      );

      const moreWidth = 52;
      const gap = 4;

      let total = 0;
      let count = 0;

      for (let i = 0; i < widths.length; i++) {
        const required =
          total + widths[i] + (i > 0 ? gap : 0);

        /*
         * If this isn't the last possible item,
         * reserve room for the More button.
         */
        const needsMore = i < widths.length - 1;

        if (
          required + (needsMore ? moreWidth : 0) <=
          availableWidth
        ) {
          total = required;
          count++;
        } else {
          break;
        }
      }

      /*
       * Always allow at least one item.
       */
      setVisibleCount(
        Math.max(1, Math.min(count, menuItems.length))
      );
    };

    const observer = new ResizeObserver(calculateItems);

    observer.observe(container);

    // Initial calculation
    calculateItems();

    return () => observer.disconnect();
  }, []);

  const visibleItems = useMemo(
    () => menuItems.slice(0, visibleCount),
    [visibleCount]
  );

  const hiddenItems = useMemo(
    () => menuItems.slice(visibleCount),
    [visibleCount]
  );

  const hasHiddenItems = hiddenItems.length > 0;

  // Close menus when viewport becomes mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setLocationsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ==================================================
          DESKTOP / MOBILE NAVBAR
      ================================================== */}

      <header className="mot-navbar-wrapper">
        <nav className="mot-navbar">

          {/* LOGO */}
          <Link href="/" className="mot-logo">
            <div className="mot-logo-image">
              <img
                src="/images/mot-logo.png"
                alt="Moms on Teaching"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <span className="mot-logo-fallback">
                M
              </span>
            </div>

            <span className="mot-logo-name">
              Moms on Teaching
            </span>
          </Link>

          {/* ==================================================
              DESKTOP
          ================================================== */}

          <div
            className="mot-desktop-area"
            ref={navMeasureRef}
          >
            <div className="mot-desktop-links">

              {visibleItems.map((item, index) => (
                <DesktopMenuItem
                  key={item.label}
                  item={item}
                  index={index}
                  itemRef={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  locationsOpen={locationsOpen}
                  setLocationsOpen={setLocationsOpen}
                />
              ))}

              {/* MORE */}
              {hasHiddenItems && (
                <MoreMenu
                  items={hiddenItems}
                  setLocationsOpen={setLocationsOpen}
                />
              )}
            </div>

            {/* CTA IS ALWAYS OUTSIDE THE OVERFLOW AREA */}
            <Link
              href="/contact"
              className="mot-demo-button"
            >
              <span>Book Free Demo</span>

              <span className="mot-demo-arrow">
                ↗
              </span>
            </Link>
          </div>

          {/* ==================================================
              MOBILE BUTTON
          ================================================== */}

          <button
            className={`mot-mobile-toggle ${
              mobileOpen ? "open" : ""
            }`}
            onClick={() =>
              setMobileOpen((previous) => !previous)
            }
            aria-label="Open navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* ==================================================
          MOBILE OVERLAY
      ================================================== */}

      <div
        className={`mot-mobile-overlay ${
          mobileOpen ? "visible" : ""
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ==================================================
          MOBILE DRAWER
      ================================================== */}

      <aside
        className={`mot-mobile-drawer ${
          mobileOpen ? "open" : ""
        }`}
      >
        <div className="mot-mobile-header">

          <Link
            href="/"
            className="mot-logo"
            onClick={() => setMobileOpen(false)}
          >
            <div className="mot-logo-image">
              <img
                src="/images/mot-logo.png"
                alt="Moms on Teaching"
              />

              <span className="mot-logo-fallback">
                M
              </span>
            </div>

            <span className="mot-logo-name">
              Moms on Teaching
            </span>
          </Link>

          <button
            className="mot-close-button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
          >
            ×
          </button>
        </div>

        <div className="mot-mobile-menu">

          <MobileLink
            label="About"
            href="/about"
            close={() => setMobileOpen(false)}
          />

          <MobileLink
            label="Services"
            href="/services"
            close={() => setMobileOpen(false)}
          />

          <MobileLocations
            closeDrawer={() => setMobileOpen(false)}
          />

          <MobileLink
            label="FAQ"
            href="/faq"
            close={() => setMobileOpen(false)}
          />

          <MobileLink
            label="Pricing"
            href="/pricing"
            close={() => setMobileOpen(false)}
          />

          <MobileLink
            label="Contact"
            href="/contact"
            close={() => setMobileOpen(false)}
          />

          <Link
            href="/contact"
            className="mot-mobile-demo"
            onClick={() => setMobileOpen(false)}
          >
            <span>Book Free Demo</span>
            <span>↗</span>
          </Link>
        </div>
      </aside>
    </>
  );
}


/* ==========================================================
   DESKTOP MENU ITEM
========================================================== */

function DesktopMenuItem({
  item,
  index,
  itemRef,
  locationsOpen,
  setLocationsOpen,
}: {
  item: (typeof menuItems)[number];
  index: number;
  itemRef: (el: HTMLDivElement | null) => void;
  locationsOpen: boolean;
  setLocationsOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) {
  const [hovered, setHovered] = useState(false);

  if (item.dropdown) {
    return (
      <div
        className="mot-desktop-item"
        ref={itemRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          className={`mot-nav-link ${
            hovered || locationsOpen ? "active" : ""
          }`}
          onClick={() =>
            setLocationsOpen((previous) => !previous)
          }
        >
          <span>{item.label}</span>

          <svg
            className={`mot-chevron ${
              locationsOpen ? "rotate" : ""
            }`}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <LocationsDropdown open={locationsOpen} />
      </div>
    );
  }

  return (
    <div
      ref={itemRef}
      className="mot-desktop-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={item.href}
        className={`mot-nav-link ${
          hovered ? "active" : ""
        }`}
      >
        {item.label}
      </Link>
    </div>
  );
}


/* ==========================================================
   LOCATIONS DROPDOWN
========================================================== */

function LocationsDropdown({
  open,
}: {
  open: boolean;
}) {
  return (
    <div
      className={`mot-location-dropdown ${
        open ? "open" : ""
      }`}
    >
      {locations.map((location) => (
        <Link
          key={location.name}
          href={location.href}
          className="mot-location-item"
        >
          <span>{location.name}</span>

          <span className="mot-location-arrow">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}


/* ==========================================================
   MORE MENU
========================================================== */

function MoreMenu({
  items,
  setLocationsOpen,
}: {
  items: typeof menuItems;
  setLocationsOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="mot-more-wrapper"
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`mot-more-button ${
          open ? "active" : ""
        }`}
        onClick={() => setOpen((previous) => !previous)}
      >
        <span>•••</span>
      </button>

      <div
        className={`mot-more-dropdown ${
          open ? "open" : ""
        }`}
      >
        {items.map((item) => {
          if (item.dropdown) {
            return (
              <div key={item.label}>
                <button
                  className="mot-more-item"
                  onClick={() =>
                    setLocationsOpen(
                      (previous) => !previous
                    )
                  }
                >
                  Locations
                  <span>⌄</span>
                </button>
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className="mot-more-item"
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}


/* ==========================================================
   MOBILE LINK
========================================================== */

function MobileLink({
  label,
  href,
  close,
}: {
  label: string;
  href: string;
  close: () => void;
}) {
  return (
    <Link
      href={href}
      className="mot-mobile-item"
      onClick={close}
    >
      <span>{label}</span>

      <span className="mot-mobile-arrow">
        →
      </span>
    </Link>
  );
}


/* ==========================================================
   MOBILE LOCATIONS
========================================================== */

function MobileLocations({
  closeDrawer,
}: {
  closeDrawer: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mot-mobile-location-group">

      <button
        className={`mot-mobile-item ${
          open ? "expanded" : ""
        }`}
        onClick={() =>
          setOpen((previous) => !previous)
        }
      >
        <span>Locations</span>

        <svg
          className={`mot-mobile-chevron ${
            open ? "rotate" : ""
          }`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`mot-mobile-locations ${
          open ? "open" : ""
        }`}
      >
        {locations.map((location) => (
          <Link
            key={location.name}
            href={location.href}
            onClick={closeDrawer}
          >
            {location.name}
          </Link>
        ))}
      </div>
    </div>
  );
}