import React from "react";
import "./About.css";

const TEAM = [
  { name: "Isabelle Durand", role: "Founder & CEO" },
  { name: "Marco Rossi", role: "Head of Airline Partnerships" },
  { name: "Aisha Khan", role: "Lead Concierge" },
];

export default function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <h2 className="about-heading">About Us</h2>
        <p className="about-mission">Our mission is to make premium air travel accessible — negotiating exclusive fares and delivering white‑glove service so you travel better for less.</p>

        <div className="about-grid">
          <div className="about-block">
            <h3>Why we exist</h3>
            <p>Traditional premium fares are often overpriced or opaque. We partner directly with airlines to open exclusive inventory and deliver transparent savings to discerning travellers.</p>
          </div>

          <div className="about-block">
            <h3>Expertise & Relationships</h3>
            <p>Our team has decades of experience across airline revenue, inventory and corporate sales. Those relationships let us secure privileged fares, upgrades and special access on behalf of our clients.</p>
          </div>

          <div className="about-block">
            <h3>What we promise</h3>
            <ul>
              <li>Transparent pricing and clear savings</li>
              <li>Dedicated concierge for every booking</li>
              <li>Fast response times and priority handling</li>
            </ul>
          </div>
        </div>

        <div className="about-team">
          <h3>Team</h3>
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