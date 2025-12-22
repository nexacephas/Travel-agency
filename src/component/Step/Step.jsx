import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiUserCheck, FiCalendar, FiCreditCard, FiSmile } from "react-icons/fi";
import "./Steps.css";
import TimelineVideo from "../../assets/32945-395456395_medium.mp4"; // your video

const stepsData = [
  {
    icon: <FiUserCheck size={28} />,
    title: "Request your flight",
    description: "Fill the form or call our concierge to submit your flight request.",
  },
  {
    icon: <FiCalendar size={28} />,
    title: "We negotiate",
    description: "We negotiate directly with airlines — typically within a few hours to secure the best fares.",
  },
  {
    icon: <FiCreditCard size={28} />,
    title: "You fly",
    description: "Receive your ticket at the best price and enjoy your trip.",
  },
  {
    icon: <FiSmile size={28} />,
    title: "Optional: VIP service",
    description: "Add upgrades, lounge access, and special requests for a premium experience.",
  },
];

const Steps = () => {
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="steps-timeline">
      {/* Video Background */}
      <motion.video
        className="steps-video"
        autoPlay
        loop
        muted
        playsInline
        src={TimelineVideo}
        style={{ y: offsetY * 0.1 }}
      />

      <div className="steps-overlay"></div>

      <motion.div
        className="steps-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          How It Works
        </motion.h2>

        <div className="timeline">
          {stepsData.map((step, index) => (
            <motion.div
              className={`timeline-step ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">{step.icon}</div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Steps;
