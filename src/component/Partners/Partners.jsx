import React from "react";
import "./Partners.css";
import { useLanguage } from "../../context/LanguageContext";

const PARTNERS = [
  { key: "airlineA", name: "SkyLine Airlines", logo: (
    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="100" height="40" rx="6" fill="#0b3d91" />
      <text x="50" y="25" fill="#fff" fontSize="12" fontFamily="Lato, sans-serif" textAnchor="middle">SkyLine</text>
    </svg>
  ) },
  { key: "airlineB", name: "Aurora Air", logo: (
    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="100" height="40" rx="6" fill="#1f8a70" />
      <text x="50" y="25" fill="#fff" fontSize="12" fontFamily="Lato, sans-serif" textAnchor="middle">Aurora</text>
    </svg>
  ) },
  { key: "airlineC", name: "Atlas Airways", logo: (
    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="100" height="40" rx="6" fill="#7a1f5a" />
      <text x="50" y="25" fill="#fff" fontSize="12" fontFamily="Lato, sans-serif" textAnchor="middle">Atlas</text>
    </svg>
  ) },
  { key: "airlineD", name: "Orion Flights", logo: (
    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="100" height="40" rx="6" fill="#d4af37" />
      <text x="50" y="25" fill="#000" fontSize="12" fontFamily="Lato, sans-serif" textAnchor="middle">Orion</text>
    </svg>
  ) },
];

export default function Partners() {
  const { t } = useLanguage();
  return (
    <section className="partners">
      <div className="partners-inner">
        <h2 className="partners-heading">{t("partners.heading")}</h2>
        <p className="partners-lead">{t("partners.lead")}</p>

        <div className="partners-grid">
          {PARTNERS.map((p) => (
            <div className="partner-card" key={p.key} title={p.name}>
              <div className="partner-logo">{p.logo}</div>
              <div className="partner-name">{p.name}</div>
            </div>
          ))}
        </div>

        <div className="partners-cta">
          <a href="/partners" className="partners-link">{t("partners.cta")}</a>
        </div>
      </div>
    </section>
  );
}
