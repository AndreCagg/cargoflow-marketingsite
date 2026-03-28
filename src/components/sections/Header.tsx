import React, { useState, useEffect } from "react";
import { CONTENT } from "../../lib/content";
import { smoothScrollTo } from "../../lib/utils";
import { LogoSVG } from "../ui/Icons";

export function Header() {
  const { navigation } = CONTENT;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (id: string) => {
    smoothScrollTo(id);
    setMenuOpen(false);
  };

  return (
    <header className={`cf-header${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <div className="logo">
            <div className="logo-box">
              <LogoSVG />
            </div>
            <span className="logo-text">{navigation.brand}</span>
          </div>

          {/* Desktop nav */}
          <nav className="desktop-nav">
            {navigation.links.map((l) => (
              <button
                key={l.id}
                className="nav-link"
                style={{ fontSize: "0.875rem", color: "var(--color-muted)", transition: "color 0.2s" }}
                onClick={() => smoothScrollTo(l.id)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="desktop-cta">
            <button className="btn-primary" onClick={() => smoothScrollTo("contact")}>
              {navigation.cta}
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <div className="container">
          <div className="mobile-menu-inner">
            {navigation.links.map((l) => (
              <button key={l.id} className="mobile-nav-btn" onClick={() => handleNav(l.id)}>
                {l.label}
              </button>
            ))}
            <div style={{ paddingTop: "12px" }}>
              <button
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => handleNav("contact")}
              >
                {navigation.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
