import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroVideo from "../../assets/32945-395456395_medium.mp4";
import "./Hero.css";

// Particle configuration
const PARTICLE_COUNT = 40;

// Multi-language text
const TEXT = {
  EN: {
    title: "Fly Premium for 30–70% Less",
    subtitle: "We negotiate directly with airlines to give you the best fares, without compromise.",
    cta: "Get Your Flight",
  },
  FR: {
    title: "Volez Premium pour 30–70% de moins",
    subtitle: "Nous négocions directement avec les compagnies aériennes pour vous offrir les meilleurs tarifs, sans compromis.",
    cta: "Réservez Votre Vol",
  },
};

const LuxuryHero = ({ language = "EN" }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [particles, setParticles] = useState([]);

  // Ensure language key is valid and normalized
  const langKey = typeof language === "string" ? language.toUpperCase() : "EN";
  const lang = TEXT[langKey] ? langKey : "EN";

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate random particles
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
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
        src={HeroVideo}
        style={{ y: offsetY * 0.3 }}
      />

      {/* Overlay */}
      <div className="luxury-hero-overlay"></div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="particle"
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

      {/* Hero content */}
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
          {TEXT[lang].title}
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {TEXT[lang].subtitle}
        </motion.p>

        <motion.a
          href="#services"
          className="hero-btn"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212,175,55,0.8)", backgroundColor: "#d4af37" }}
          whileTap={{ scale: 0.95 }}
        >
          {TEXT[lang].cta}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default LuxuryHero;
