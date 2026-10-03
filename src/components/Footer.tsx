import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link href="/" className="site-footer-logo">
            Moms on Teaching
          </Link>

          <p>
            Personalised one-to-one online tuition.
            <br />
            A little support for a brighter future.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="site-footer-links">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>

      <div className="site-footer-bottom">
        © Moms on Teaching. All rights reserved.
      </div>
    </footer>
  );
}