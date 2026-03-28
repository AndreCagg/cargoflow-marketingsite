import React, { useRef, useState } from "react";
import { CONTENT } from "../../lib/content";
import { useScrollReveal } from "../../lib/utils";
import { ArrowSVG } from "../ui/Icons";

export function Contact() {
  const { contact } = CONTENT;
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  useScrollReveal(sectionRef);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.name || !values.email) return;
    setSubmitted(true);
  };

  return (
    <section id={contact.id} ref={sectionRef} className="section">
      <div className="container">
        <div className="accent-line" />

        <div className="contact-grid">
          {/* Left copy */}
          <div>
            <p className="section-eyebrow reveal">{contact.eyebrow}</p>
            <h2 className="section-headline reveal" style={{ marginBottom: "20px" }}>
              {contact.headline}
            </h2>
            <p
              className="reveal"
              style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--color-muted)", maxWidth: "32rem" }}
            >
              {contact.subheadline}
            </p>

            <div className="trust-items reveal">
              {contact.trustSignals.map((t, i) => (
                <div key={i} className="trust-item">
                  <div className="trust-icon">{t.icon}</div>
                  <span className="trust-text">{t.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="form-card reveal">
            {submitted ? (
              <div className="success-box">
                <div className="success-icon">✅</div>
                <h3 className="success-title">{contact.successTitle}</h3>
                <p className="success-text">{contact.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">{contact.form.name.label}</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder={contact.form.name.placeholder}
                      required
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">{contact.form.company.label}</label>
                    <input
                      className="form-input"
                      type="text"
                      name="company"
                      value={values.company}
                      onChange={handleChange}
                      placeholder={contact.form.company.placeholder}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{contact.form.email.label}</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder={contact.form.email.placeholder}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{contact.form.phone.label}</label>
                  <input
                    className="form-input"
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder={contact.form.phone.placeholder}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{contact.form.message.label}</label>
                  <textarea
                    className="form-input"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={contact.form.message.placeholder}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {contact.form.submit}
                  <ArrowSVG />
                </button>

                <p className="form-note">{contact.note}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
