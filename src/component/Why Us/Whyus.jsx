import React from "react";
import "./Whyus.css";

const ITEMS = [
  {
    key: "exclusive",
    title: "Exclusive Deals",
    desc: "We negotiate directly with airlines to unlock fares you won't find elsewhere.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
        <path fill="currentColor" d="M12 2l3 6 6 .5-4.5 3.9L19 19l-7-4-7 4 1.5-6.6L2 8.5 8 8z" />
      </svg>
    ),
  },
  {
    key: "savings",
    title: "Huge Savings",
    desc: "Save 30–70% off regular fares — transparent pricing, real value.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
        <path fill="currentColor" d="M12 1L3 5v6c0 5 3.7 9.5 9 11 5.3-1.5 9-6 9-11V5l-9-4zM11 8h2v6h-2V8zm0 8h2v2h-2v-2z" />
      </svg>
    ),
  },
  {
    key: "service",
    title: "Personalized Service",
    desc: "A dedicated concierge manages your booking from request to boarding.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
        <path fill="currentColor" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6 9v-1a5 5 0 0 0-5-5H11a5 5 0 0 0-5 5v1h12z" />
      </svg>
    ),
  },
  {
    key: "partners",
    title: "Trusted Partner",
    desc: "Longstanding partnerships with top airlines ensure priority access.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
        <path fill="currentColor" d="M12 2l3 6h6l-4.8 3.5L19 18l-7-4-7 4 1.8-6.5L3 8h6z" />
      </svg>
    ),
  },
];

export default function Whyus() {
  return (
    <section className="whyus">
      <div className="whyus-inner">
        <h2 className="whyus-heading">Why Choose Our Concierge</h2>
        <p className="whyus-lead">Credibility, savings and white‑glove service — designed for premium travellers.</p>

        <div className="whyus-grid">
          {ITEMS.map((it) => (
            <div className="whyus-card" key={it.key}>
              <div className="whyus-icon" aria-hidden>
                {it.icon}
              </div>
              <div className="whyus-body">
                <h3 className="whyus-title">{it.title}</h3>
                <p className="whyus-desc">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
