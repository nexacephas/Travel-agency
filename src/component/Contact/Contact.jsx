import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", request: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.request.trim()) {
      setStatus({ type: "error", message: "Please fill all fields." });
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus({ type: "error", message: "Please provide a valid email." });
      return;
    }

    // Simulate submission (no backend). In production, POST to your API here.
    setStatus({ type: "loading", message: "Sending..." });
    setTimeout(() => {
      setStatus({ type: "success", message: "Thanks — we’ll respond within 24 hours." });
      setForm({ name: "", email: "", request: "" });
    }, 800);
  }

  return (
    <section className="contact">
      <div className="contact-inner">
        <h2 className="contact-heading">Contact / Get Started</h2>
        <p className="contact-lead">Name, email and a short flight request — we’ll take it from there. Expect a response within 24 hours.</p>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
            </label>

            <label>
              Email
              <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </label>

            <label>
              Flight request
              <textarea name="request" value={form.request} onChange={handleChange} placeholder="Route, dates, preferences..." rows={4} />
            </label>

            <div className="contact-actions">
              <button type="submit" className="btn-primary">Send Request</button>
              <a className="btn-ghost" href="https://calendly.com/" target="_blank" rel="noreferrer">Book a Call</a>
            </div>

            {status && (
              <div className={`contact-status ${status.type}`}>{status.message}</div>
            )}
          </form>

          <div className="contact-aside">
            <h3>Why choose us</h3>
            <ul>
              <li>Exclusive negotiated fares</li>
              <li>Personal concierge handling</li>
              <li>Fast turnaround — typically within hours</li>
            </ul>
            <p className="contact-small">We never share your data. By contacting us you agree to our privacy policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}