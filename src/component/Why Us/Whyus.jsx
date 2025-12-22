import React from "react";
import "./Whyus.css";
import { useLanguage } from "../../context/LanguageContext";

const ICONS = [
  (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
      <path fill="currentColor" d="M12 2l3 6 6 .5-4.5 3.9L19 19l-7-4-7 4 1.5-6.6L2 8.5 8 8z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
      <path fill="currentColor" d="M12 1L3 5v6c0 5 3.7 9.5 9 11 5.3-1.5 9-6 9-11V5l-9-4zM11 8h2v6h-2V8zm0 8h2v2h-2v-2z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
      <path fill="currentColor" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6 9v-1a5 5 0 0 0-5-5H11a5 5 0 0 0-5 5v1h12z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
      <path fill="currentColor" d="M12 2l3 6h6l-4.8 3.5L19 18l-7-4-7 4 1.8-6.5L3 8h6z" />
    </svg>
  ),
];

export default function Whyus() {
  const { t } = useLanguage();
  const items = t("whyus.items") || [];

  return (
    <section className="whyus">
      <div className="whyus-inner">
        <h2 className="whyus-heading">{t("whyus.heading")}</h2>
        <p className="whyus-lead">{t("whyus.lead")}</p>

        <div className="whyus-grid">
          {items.map((it, idx) => (
            <div className="whyus-card" key={it.title || idx}>
              <div className="whyus-icon" aria-hidden>
                {ICONS[idx % ICONS.length]}
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
