import React, { useEffect, useRef } from "react";
import { HOW_IT_WORKS } from "../../lib/constants";
import { Container } from "../ui";

export function HowItWorks() {
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
      id={HOW_IT_WORKS.id}
      ref={sectionRef}
      className="py-24 bg-stripe"
      style={{ background: "var(--color-surface-2)" }}
    >
      <Container>
        {/* Section header */}
        <div className="mb-16">
          <p
            className="reveal text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
          >
            {HOW_IT_WORKS.eyebrow}
          </p>
          <h2
            className="reveal text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {HOW_IT_WORKS.headline}
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <div
              key={i}
              className="reveal step-card relative overflow-hidden rounded-lg p-7 card-hover border"
              style={{
                background: "var(--color-surface-1)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              {/* Watermark number */}
              <span className="step-number">{step.number}</span>

              {/* Icon */}
              <div
                className="text-2xl mb-4 w-11 h-11 flex items-center justify-center rounded-lg"
                style={{ background: "rgba(249,115,22,0.1)" }}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div
                className="text-xs font-medium tracking-widest uppercase mb-2"
                style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
              >
                {step.number}
              </div>
              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
