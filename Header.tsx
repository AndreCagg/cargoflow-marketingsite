import React, { useState, useEffect } from "react";
import { NAVIGATION } from "../../lib/constants";
import { Button, Container } from "../ui";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 40, 64, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded flex items-center justify-center"
              style={{ background: "var(--color-accent)" }}
            >
              <svg viewBox="0 0 20 20" fill="white" className="w-4 h-4">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <span
              className="font-bold text-white text-lg tracking-tight"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {NAVIGATION.brand}
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAVIGATION.sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="nav-link text-sm text-[var(--color-muted)] hover:text-white transition-colors duration-200"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {s.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollTo("contact")}
            >
              {NAVIGATION.cta}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden hamburger flex flex-col gap-1.5 p-2 ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "320px" : "0",
          background: "rgba(10, 40, 64, 0.97)",
          borderBottom: menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <Container>
          <div className="py-4 flex flex-col gap-1">
            {NAVIGATION.sections.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  scrollTo(s.id);
                  setMenuOpen(false);
                }}
                className="text-left py-3 px-2 text-[var(--color-muted)] hover:text-white transition-colors duration-200 text-sm border-b border-white/5 last:border-0"
              >
                {s.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                className="w-full justify-center"
                onClick={() => {
                  scrollTo("contact");
                  setMenuOpen(false);
                }}
              >
                {NAVIGATION.cta}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
