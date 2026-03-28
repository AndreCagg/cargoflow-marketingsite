import React, { useEffect, useRef } from "react";
import { FAQ } from "../../lib/constants";
import { Container, Accordion } from "../ui";

export function FaqSection() {
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
      id={FAQ.id}
      ref={sectionRef}
      className="py-24"
      style={{ background: "var(--color-surface-2)" }}
    >
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="mb-12 text-center">
            <p
              className="reveal text-xs font-medium tracking-widest uppercase mb-3"
              style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
            >
              {FAQ.eyebrow}
            </p>
            <h2
              className="reveal text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {FAQ.headline}
            </h2>
          </div>

          {/* Accordion */}
          <div className="reveal">
            <Accordion items={FAQ.items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
