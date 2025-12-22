import React from "react";
import "./Testimonials.css";
import { useLanguage } from "../../context/LanguageContext";

// testimonial items are provided via translations

function formatAmount(saved) {
  return `${saved.currency}${saved.amount.toLocaleString()}`;
}

export default function Testimonials() {
  const { t } = useLanguage();
  const items = t("testimonials.items") || [];

  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <h2 className="testimonials-heading">{t("testimonials.heading")}</h2>
        <p className="testimonials-lead">{t("testimonials.lead")}</p>

        <div className="testimonials-grid">
          {items.map((tItem, i) => (
            <article className="testimonial-card" key={i}>
              <div className="testimonial-top">
                <div className="avatar" style={{ backgroundColor: tItem.color }} aria-hidden>
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="currentColor" />
                    <text x="50" y="58" fontFamily="Lato, sans-serif" fontSize="36" fill="#fff" textAnchor="middle">
                      {tItem.name.split(" ")[0][0]}
                    </text>
                  </svg>
                </div>
                <div className="testimonial-meta">
                  <div className="testimonial-name">{tItem.name}</div>
                  <div className="testimonial-role">{tItem.role}</div>
                </div>
              </div>

              <blockquote className="testimonial-quote">“{tItem.quote}”</blockquote>

              <div className="testimonial-foot">
                <div className="example-trip">Example trip: <strong>{tItem.role}</strong></div>
                <div className="example-saved">Saved: <strong>{formatAmount(tItem.saved)}</strong></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
