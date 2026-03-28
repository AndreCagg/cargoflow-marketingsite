import React, { useRef } from "react";
import { CONTENT } from "../../lib/content";
import { useScrollReveal } from "../../lib/utils";

export function HowItWorks() {
  const { howItWorks } = CONTENT;
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id={howItWorks.id}
      ref={sectionRef}
      className="section section-surface-2 bg-stripe"
    >
      <div className="container">
        <div>
          <p className="section-eyebrow reveal">{howItWorks.eyebrow}</p>
          <h2 className="section-headline reveal">{howItWorks.headline}</h2>
        </div>

        <div className="steps-grid">
          {howItWorks.steps.map((step, i) => (
            <div key={i} className="step-card card-hover reveal">
              <span className="step-number">{step.number}</span>
              <div className="step-icon">{step.icon}</div>
              <div className="step-num-label">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
