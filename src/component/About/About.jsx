import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutVideo from "../../assets/32945-395456395_medium.mp4";
import "./About.css";

const particlesCount = 30; // number of floating particles

const LuxuryAbout = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // generate random particles
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
    <section className="luxury-about">
      {/* Background Video */}
      <motion.video
        className="luxury-about-video"
        autoPlay
        loop
        muted
        playsInline
        src={AboutVideo}
        style={{ y: offsetY * 0.2 }} // gentle parallax
      />

      <div className="luxury-about-overlay"></div>

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

      {/* Content */}
      <motion.div
        className="luxury-about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          About Our Concierge
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          At Concierge, we redefine luxury by providing tailored lifestyle
          management services. From travel planning to exclusive experiences,
          we ensure your every need is met with professionalism and elegance.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Our mission is to save you time, reduce stress, and elevate your
          lifestyle with personalized assistance that exceeds expectations.
        </motion.p>

        <motion.a
          href="#contact"
          className="about-btn"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212,175,55,0.8)", backgroundColor: "#d4af37" }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default LuxuryAbout;
