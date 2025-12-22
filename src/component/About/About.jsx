import React from "react";
import "./About.css";
import { useLanguage } from "../../context/LanguageContext";

const TEAM = [
  { name: "Isabelle Durand", role: "Founder & CEO" },
  { name: "Marco Rossi", role: "Head of Airline Partnerships" },
  { name: "Aisha Khan", role: "Lead Concierge" },
];

export default function About() {
  const { t } = useLanguage();
  return (
    <section className="about">
      <div className="about-inner">
        <h2 className="about-heading">{t("about.heading")}</h2>
        <p className="about-mission">{t("about.mission")}</p>

        <div className="about-grid">
          <div className="about-block">
            <h3>{t("about.whyTitle")}</h3>
            <p>{t("about.blocks.0.body")}</p>
          </div>

          <div className="about-block">
            <h3>{t("about.expertiseTitle")}</h3>
            <p>{t("about.blocks.1.body")}</p>
          </div>

          <div className="about-block">
            <h3>{t("about.promiseTitle")}</h3>
            <ul>
              <li>{t("about.promiseList.item1")}</li>
              <li>{t("about.promiseList.item2")}</li>
              <li>{t("about.promiseList.item3")}</li>
            </ul>
          </div>
        </div>

        <div className="about-team">
          <h3>{t("about.teamTitle")}</h3>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar" aria-hidden>
                  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                    <rect width="80" height="80" rx="10" fill="#222" />
                    <text x="40" y="48" fill="#fff" fontSize="28" fontFamily="Lato, sans-serif" textAnchor="middle">{m.name.split(" ")[0][0]}</text>
                  </svg>
                </div>
                <div className="team-info">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}