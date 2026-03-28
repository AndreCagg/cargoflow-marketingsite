import React, { useRef } from "react";
import { CONTENT } from "../../lib/content";
import { useScrollReveal } from "../../lib/utils";

export function Benefits() {
  const { benefits } = CONTENT;
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id={benefits.id} ref={sectionRef} className="section">
      <div className="container">
        <div className="accent-line" />

        <div>
          <p className="section-eyebrow reveal">{benefits.eyebrow}</p>
          <h2 className="section-headline reveal">{benefits.headline}</h2>
        </div>

        <div className="benefits-grid">
          {benefits.items.map((item, i) => (
            <div key={i} className="benefit-card card-hover reveal">
              <div className="benefit-icon">{item.icon}</div>
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
