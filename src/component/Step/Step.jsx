import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiUserCheck, FiCalendar, FiCreditCard, FiSmile } from "react-icons/fi";
import "./Steps.css";
import TimelineVideo from "../../assets/32945-395456395_medium.mp4"; // your video

import { useLanguage } from "../../context/LanguageContext";

const ICONS = [FiUserCheck, FiCalendar, FiCreditCard, FiSmile];

const makeSteps = (t) => {
  const s = t("steps.steps") || [];
  return s.map((item, i) => ({ icon: ICONS[i % ICONS.length], title: item.title, description: item.desc }));
};

const Steps = () => {
  const [offsetY, setOffsetY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY || 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stepsData = makeSteps(t);

  return (
    <section className="steps-timeline" id="steps">
      {/* Video Background */}
      <motion.video
        className="steps-video"
        autoPlay
        loop
        muted
        playsInline
        src={TimelineVideo}
        style={{ transform: `translateY(${offsetY * 0.08}px)` }}
      />

      <div className="steps-overlay"></div>

      <motion.div
        className="steps-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          {t("steps.heading")}
        </motion.h2>

        <div className="timeline">
          {stepsData.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                className={`timeline-step ${index % 2 === 0 ? "left" : "right"}`}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="timeline-icon">
                  {/* render icon component if provided */}
                  {typeof Icon === "function" ? <Icon size={28} /> : Icon}
                </div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            );
          })}

          <div className="timeline-line"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Steps;
