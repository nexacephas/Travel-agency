import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}!`);
    setEmail("");
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Brand / Logo */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Luxury Concierge</h2>
          <p>Elevate your lifestyle with bespoke services.</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#steps">How It Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          className="footer-newsletter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4>Subscribe</h4>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FiFacebook size={20} /></a>
            <a href="#"><FiInstagram size={20} /></a>
            <a href="#"><FiTwitter size={20} /></a>
            <a href="#"><FiLinkedin size={20} /></a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>© {new Date().getFullYear()} Luxury Concierge. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
