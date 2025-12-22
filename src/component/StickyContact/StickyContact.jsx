import React from "react";
import { FiMail } from "react-icons/fi";
import "./StickyContact.css";

export default function StickyContact() {
  const handleClick = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="sticky-contact"
      onClick={handleClick}
      aria-label="Contact us"
      title="Contact us"
    >
      <FiMail size={20} />
      <span className="sticky-label">Contact</span>
    </button>
  );
}
