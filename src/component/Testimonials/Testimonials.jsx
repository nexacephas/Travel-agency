import React from "react";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    name: "Emma R.",
    role: "Paris → New York",
    quote: "They found me a business-class fare for a third of the usual price — seamless from start to finish.",
    saved: { currency: "€", amount: 650 },
    color: "#e07a5f",
  },
  {
    name: "Liam K.",
    role: "London → Singapore",
    quote: "Fast negotiation and excellent support — I saved hundreds and got a free upgrade.",
    saved: { currency: "€", amount: 750 },
    color: "#2a9d8f",
  },
  {
    name: "Sofia M.",
    role: "Madrid → Dubai",
    quote: "Concierge handled everything — lounge access and better seats at a fraction of the price.",
    saved: { currency: "€", amount: 540 },
    color: "#f4d35e",
  },
];

function formatAmount(saved) {
  return `${saved.currency}${saved.amount.toLocaleString()}`;
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <h2 className="testimonials-heading">What Our Clients Say</h2>
        <p className="testimonials-lead">Short, impactful client stories — trips, savings, and real results.</p>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <article className="testimonial-card" key={i}>
              <div className="testimonial-top">
                <div className="avatar" style={{ backgroundColor: t.color }} aria-hidden>
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="currentColor" />
                    <text x="50" y="58" fontFamily="Lato, sans-serif" fontSize="36" fill="#fff" textAnchor="middle">
                      {t.name.split(" ")[0][0]}
                    </text>
                  </svg>
                </div>
                <div className="testimonial-meta">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>

              <blockquote className="testimonial-quote">“{t.quote}”</blockquote>

              <div className="testimonial-foot">
                <div className="example-trip">Example trip: <strong>{t.role}</strong></div>
                <div className="example-saved">Saved: <strong>{formatAmount(t.saved)}</strong></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
