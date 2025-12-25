import React from "react";
import "./Partners.css";
import { useLanguage } from "../../context/LanguageContext";

// Your imported assets
import Airlogo1 from "../../assets/download (1).png";
import Airlogo2 from "../../assets/download (2).png";
import Airlogo3 from "../../assets/download (3).png";
import Airlogo4 from "../../assets/download.png";
import Airlogo5 from "../../assets/Hong_Kong_Airlines-Logo.wine.png";
import Airlogo6 from "../../assets/Centralwings-Logo.wine.png";

const PARTNERS = [
  { key: "logo1", src: Airlogo1, alt: "Airline 1" },
  { key: "logo2", src: Airlogo2, alt: "Airline 2" },
  { key: "logo3", src: Airlogo3, alt: "Airline 3" },
  { key: "logo4", src: Airlogo4, alt: "Airline 4" },
  { key: "logo5", src: Airlogo5, alt: "Hong Kong Airlines" },
  { key: "logo6", src: Airlogo6, alt: "Centralwings" },
];

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section className="partners">
      <div className="partners-inner">
        <h2 className="partners-heading">{t("partners.heading")}</h2>
        <p className="partners-lead">{t("partners.lead")}</p>

        <div className="marquee-container">
          <div className="marquee-track">
            {/* First set of logos */}
            {PARTNERS.map((p) => (
              <div className="partner-logo-item" key={`set1-${p.key}`}>
                <img src={p.src} alt={p.alt} className="partner-img" />
              </div>
            ))}
            {/* Duplicated set for seamless looping */}
            {PARTNERS.map((p) => (
              <div className="partner-logo-item" key={`set2-${p.key}`}>
                <img src={p.src} alt={p.alt} className="partner-img" />
              </div>
            ))}
          </div>
        </div>

        <div className="partners-cta">
          <a href="/partners" className="partners-link">{t("partners.cta")}</a>
        </div>
      </div>
    </section>
  );
}