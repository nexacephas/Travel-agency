import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroVideo1 from "../../assets/282-135881196_medium.mp4";
import "./Hero.css";

const particlesCount = 40;

const LuxuryHero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < particlesCount; i++) {
      arr.push({
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      });
    }
    setParticles(arr);
  }, []);

  return (
    <section className="luxury-hero">
      {/* Background video */}
      <motion.video
        className="luxury-hero-video"
        autoPlay
        loop
        muted
        playsInline
        src={HeroVideo1}
        style={{ y: offsetY * 0.3 }}
      />

      <div className="luxury-hero-overlay"></div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          className="particle"
          key={i}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: p.delay }}
        />
      ))}

      {/* Animated content */}
      <motion.div
        className="luxury-hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your Personal Concierge
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Premium lifestyle management, anytime. Exceptional service,
          personalized for you.
        </motion.p>

        <motion.a
          href="#services"
          className="hero-btn"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212,175,55,0.8)", backgroundColor: "#d4af37" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Services
        </motion.a>
      </motion.div>
    </section>
  );
};

export default LuxuryHero;
