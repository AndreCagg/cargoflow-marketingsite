import React, { useEffect, useRef, useState } from "react";
import { CONTACT } from "../../lib/constants";
import { Container, Button } from "../ui";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id={CONTACT.id}
      ref={sectionRef}
      className="py-24"
      style={{ background: "var(--color-surface-1)" }}
    >
      <Container>
        {/* Accent line */}
        <div className="accent-line" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div>
            <p
              className="reveal text-xs font-medium tracking-widest uppercase mb-3"
              style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
            >
              {CONTACT.eyebrow}
            </p>
            <h2
              className="reveal text-3xl sm:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {CONTACT.headline}
            </h2>
            <p
              className="reveal text-base leading-relaxed mb-10"
              style={{ color: "var(--color-muted)" }}
            >
              {CONTACT.subheadline}
            </p>

            {/* Trust signals */}
            <div className="reveal space-y-4">
              {[
                { icon: "⚡", text: "Risposta entro 24 ore lavorative" },
                { icon: "🔒", text: "Dati trattati in conformità al GDPR" },
                { icon: "🚚", text: "Demo personalizzata sulla tua flotta" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 flex items-center justify-center rounded"
                    style={{ background: "rgba(249,115,22,0.1)" }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form card */}
          <div
            className="reveal rounded-xl border p-7 sm:p-8"
            style={{
              background: "var(--color-surface-2)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Richiesta inviata!
                </h3>
                <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                  Ti risponderemo entro 24 ore lavorative con una proposta personalizzata.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5 uppercase tracking-wider"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                    >
                      {CONTACT.form.name.label}
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      placeholder={CONTACT.form.name.placeholder}
                      className="form-input"
                      required
                    />
                  </div>
                  {/* Company */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5 uppercase tracking-wider"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                    >
                      {CONTACT.form.company.label}
                    </label>
                    <input
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={handleChange}
                      placeholder={CONTACT.form.company.placeholder}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5 uppercase tracking-wider"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    {CONTACT.form.email.label}
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder={CONTACT.form.email.placeholder}
                    className="form-input"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5 uppercase tracking-wider"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    {CONTACT.form.phone.label}
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder={CONTACT.form.phone.placeholder}
                    className="form-input"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5 uppercase tracking-wider"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    {CONTACT.form.message.label}
                  </label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    placeholder={CONTACT.form.message.placeholder}
                    rows={4}
                    className="form-input resize-none"
                  />
                </div>

                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  className="w-full justify-center"
                >
                  {CONTACT.form.submit}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>

                <p
                  className="text-xs text-center"
                  style={{ color: "rgba(148,163,184,0.6)" }}
                >
                  {CONTACT.note}
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
