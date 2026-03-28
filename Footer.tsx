import React from "react";
import { FOOTER, NAVIGATION } from "../../lib/constants";
import { Container } from "../ui";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        background: "var(--color-surface-2)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8 pb-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
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
                {FOOTER.brand}
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--color-muted)" }}>
              {FOOTER.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAVIGATION.sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="nav-link text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "var(--color-muted)" }}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(148,163,184,0.5)" }}>
            {FOOTER.copyright}
          </p>
          <div className="flex gap-5">
            {FOOTER.links.filter(l => l.href === "#").map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-xs hover:text-white transition-colors duration-200"
                style={{ color: "rgba(148,163,184,0.5)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
