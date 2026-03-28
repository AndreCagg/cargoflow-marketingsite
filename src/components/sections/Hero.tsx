import React, { useEffect, useRef } from "react";
import { CONTENT } from "../../lib/content";
import { smoothScrollTo } from "../../lib/utils";
import { ArrowSVG } from "../ui/Icons";

export function Hero() {
  const { hero } = CONTENT;
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    revealRefs.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => el.classList.add("visible"), 100 + i * 120);
    });
  }, []);

  const setRef = (i: number) => (el: HTMLElement | null) => {
    revealRefs.current[i] = el;
  };

  return (
    <section className="hero">
      {/* Dot grid */}
      <div className="bg-dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
      {/* Orange blob */}
      <div className="hero-blob" />
      {/* Bottom fade */}
      <div className="hero-fade" />

      <div className="container hero-content">
        {/* Eyebrow */}
        <div
          ref={setRef(0) as React.LegacyRef<HTMLDivElement>}
          className="eyebrow-badge reveal"
        >
          {hero.eyebrow}
        </div>

        {/* Headline */}
        <div ref={setRef(1) as React.LegacyRef<HTMLDivElement>} className="reveal">
          <h1 className="headline">
            {hero.headline.map((line, i) => (
              <span key={i} className={line.accent ? "accent" : ""}>
                {line.text}
              </span>
            ))}
          </h1>
        </div>

        {/* Subheadline */}
        <p
          ref={setRef(2) as React.LegacyRef<HTMLParagraphElement>}
          className="subheadline reveal"
        >
          {hero.subheadline}
        </p>

        {/* CTAs */}
        <div ref={setRef(3) as React.LegacyRef<HTMLDivElement>} className="cta-group reveal">
          <button className="btn-primary lg" onClick={() => smoothScrollTo("contact")}>
            {hero.cta_primary}
            <ArrowSVG />
          </button>
          <button className="btn-ghost" onClick={() => smoothScrollTo(hero.cta_secondary_id)}>
            {hero.cta_secondary}
          </button>
        </div>

        {/* Stats bar */}
        <div ref={setRef(4) as React.LegacyRef<HTMLDivElement>} className="stats-bar reveal">
          {hero.stats.map((s, i) => (
            <div key={i} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
