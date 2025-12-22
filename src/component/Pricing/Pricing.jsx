import React from "react";
import "./Pricing.css";

const EXAMPLES = [
  { from: "Paris (CDG)", to: "New York (JFK)", standard: 1200, our: 540, currency: "€" },
  { from: "London (LHR)", to: "Singapore (SIN)", standard: 1500, our: 750, currency: "€" },
  { from: "Madrid (MAD)", to: "Dubai (DXB)", standard: 900, our: 360, currency: "€" },
];

const TIERS = [
  { key: "basic", title: "Basic", price: "Free", desc: "One-off bookings, best-effort service." },
  { key: "club", title: "Club", price: "€49/mo", desc: "Priority handling, small booking fees waived." },
  { key: "elite", title: "Elite", price: "€199/mo", desc: "Dedicated concierge, VIP upgrades and lounge access." },
];

function computeSavings(item) {
  const amount = item.standard - item.our;
  const pct = Math.round((amount / item.standard) * 100);
  return { amount, pct };
}

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing-inner">
        <h2 className="pricing-heading">Pricing & Example Savings</h2>
        <p className="pricing-lead">See immediate savings on example routes — transparent and guaranteed.</p>

        <div className="pricing-grid">
          {EXAMPLES.map((ex, i) => {
            const s = computeSavings(ex);
            return (
              <div className="pricing-card" key={i}>
                <div className="route">{ex.from} → {ex.to}</div>
                <div className="prices">
                  <div className="standard">{ex.currency}{ex.standard.toLocaleString()}</div>
                  <div className="our">{ex.currency}{ex.our.toLocaleString()}</div>
                </div>
                <div className="savings">-{s.pct}% • -{ex.currency}{s.amount.toLocaleString()}</div>
              </div>
            );
          })}
        </div>

        <div className="tiers">
          <h3>Membership & Packages</h3>
          <div className="tiers-grid">
            {TIERS.map((t) => (
              <div className="tier" key={t.key}>
                <div className="tier-title">{t.title}</div>
                <div className="tier-price">{t.price}</div>
                <p className="tier-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
