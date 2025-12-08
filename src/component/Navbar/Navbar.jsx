import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GiCrown } from "react-icons/gi"; // Luxury crown icon
import { motion } from "framer-motion";
import "./Navbar.css";

const LuxuryNavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`luxury-navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="nav-container">
        {/* Logo as Icon */}
        <motion.div
          className="nav-logo-icon"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          whileHover={{ scale: 1.2, rotate: 15, color: "#d4af37", textShadow: "0 0 15px rgba(212,175,55,0.8)" }}
        >
          <GiCrown size={36} />
        </motion.div>

        <ul className="nav-links">
          <motion.li whileHover={{ scale: 1.1, color: "#d4af37" }}>About</motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#d4af37" }}>Services</motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#d4af37" }}>Steps</motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#d4af37" }}>Contact</motion.li>
        </ul>

        <motion.a
          href="https://wa.me/2340000000000"
          className="nav-btn"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212,175,55,0.8)" }}
        >
          Book Now
        </motion.a>

        <div className="nav-menu-icon" onClick={toggleMenu}>
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      <motion.div
        className={`mobile-menu ${open ? "open" : ""}`}
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <a onClick={toggleMenu} href="#about">About</a>
        <a onClick={toggleMenu} href="#services">Services</a>
        <a onClick={toggleMenu} href="#steps">Steps</a>
        <a onClick={toggleMenu} href="#contact">Contact</a>
        <a onClick={toggleMenu} href="https://wa.me/2340000000000" className="mobile-btn">Book Now</a>
      </motion.div>
    </motion.nav>
  );
};

export default LuxuryNavbar;
