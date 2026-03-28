import React, { useEffect, useRef } from "react";
import { HERO, NAVIGATION } from "../../lib/constants";
import { Button, Container } from "../ui";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => el.classList.add("visible"), 100 + i * 120);
    });
  }, []);

  const setRef = (i: number) => (el: HTMLElement | null) => {
    refs.current[i] = el;
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
      style={{ background: "var(--color-surface-1)" }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-40" />

      {/* Orange blob */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(249, 115, 22, 0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--color-surface-1))",
        }}
      />

      <Container className="relative z-10 py-24">
        {/* Eyebrow */}
        <div
          ref={setRef(0) as React.LegacyRef<HTMLDivElement>}
          className="reveal inline-flex items-center gap-2 mb-6"
        >
          <span
            className="text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded border"
            style={{
              color: "var(--color-accent)",
              borderColor: "rgba(249, 115, 22, 0.3)",
              background: "rgba(249, 115, 22, 0.07)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {HERO.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <div
          ref={setRef(1) as React.LegacyRef<HTMLDivElement>}
          className="reveal mb-6"
        >
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {HERO.headline.map((line, i) => (
              <span
                key={i}
                className="block"
                style={{
                  color: i === HERO.headline.length - 1 ? "var(--color-accent)" : "white",
                }}
              >
                {line}
              </span>
            ))}
          </h1>
        </div>

        {/* Subheadline */}
        <p
          ref={setRef(2) as React.LegacyRef<HTMLParagraphElement>}
          className="reveal max-w-xl text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: "var(--color-muted)" }}
        >
          {HERO.subheadline}
        </p>

        {/* CTAs */}
        <div
          ref={setRef(3) as React.LegacyRef<HTMLDivElement>}
          className="reveal flex flex-wrap items-center gap-4 mb-16"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo("contact")}
          >
            {HERO.cta_primary}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => scrollTo(NAVIGATION.sections[0].id)}
          >
            {HERO.cta_secondary}
          </Button>
        </div>

        {/* Stats bar */}
        <div
          ref={setRef(4) as React.LegacyRef<HTMLDivElement>}
          className="reveal pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/7">
            {HERO.stats.map((stat, i) => (
              <div
                key={i}
                className="md:px-8 first:pl-0 last:pr-0"
              >
                <div
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-accent)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
