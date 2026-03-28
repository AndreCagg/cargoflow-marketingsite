import React, { useRef, useState } from "react";
import { CONTENT } from "../../lib/content";
import { useScrollReveal } from "../../lib/utils";

export function FAQ() {
  const { faq } = CONTENT;
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  useScrollReveal(sectionRef);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id={faq.id} ref={sectionRef} className="section section-surface-2">
      <div className="container">
        <div className="faq-wrap">
          <p className="section-eyebrow reveal">{faq.eyebrow}</p>
          <h2 className="section-headline reveal">{faq.headline}</h2>

          <div className="accordion-wrap reveal">
            {faq.items.map((item, i) => (
              <div key={i} className="accordion-item">
                <button className="accordion-btn" onClick={() => toggle(i)}>
                  <span className="accordion-q">{item.question}</span>
                  <span className={`accordion-icon${openIndex === i ? " open" : ""}`}>+</span>
                </button>
                <div className={`accordion-content${openIndex === i ? " open" : ""}`}>
                  <div>
                    <p className="accordion-a">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
