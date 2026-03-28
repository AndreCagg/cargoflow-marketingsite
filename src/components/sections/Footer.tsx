import React from "react";
import { CONTENT } from "../../lib/content";
import { smoothScrollTo } from "../../lib/utils";
import { LogoSVG } from "../ui/Icons";

export function Footer() {
  const { footer, navigation } = CONTENT;

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div>
            <div className="logo" style={{ marginBottom: "8px" }}>
              <div className="logo-box">
                <LogoSVG />
              </div>
              <span className="logo-text">{footer.brand}</span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--color-muted)" }}>
              {footer.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav className="footer-nav">
            {navigation.links.map((l) => (
              <button
                key={l.id}
                className="nav-link"
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-muted)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => smoothScrollTo(l.id)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">{footer.copyright}</p>
          <div className="footer-legal">
            {footer.legalLinks.map((l, i) => (
              <a key={i} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
