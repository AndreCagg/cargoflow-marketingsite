import React, { useEffect, useRef } from "react";
import { BENEFITS } from "../../lib/constants";
import { Container } from "../ui";

export function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = section.querySelectorAll(".reveal");
            reveals.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={BENEFITS.id}
      ref={sectionRef}
      className="py-24"
      style={{ background: "var(--color-surface-1)" }}
    >
      <Container>
        {/* Accent line */}
        <div className="accent-line" />

        {/* Section header */}
        <div className="mb-16">
          <p
            className="reveal text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
          >
            {BENEFITS.eyebrow}
          </p>
          <h2
            className="reveal text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {BENEFITS.headline}
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.items.map((item, i) => (
            <div
              key={i}
              className="reveal card-hover border rounded-lg p-6"
              style={{
                background: "var(--color-surface-2)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              {/* Icon box */}
              <div
                className="text-xl mb-4 w-10 h-10 flex items-center justify-center rounded-lg"
                style={{ background: "rgba(249,115,22,0.1)" }}
              >
                {item.icon}
              </div>

              <h3
                className="text-base font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
