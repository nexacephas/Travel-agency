import React from "react";
import { motion } from "framer-motion";
import { FiCoffee, FiGlobe, FiTruck, FiGift } from "react-icons/fi";
import "./Services.css";

const servicesData = [
  {
    icon: <FiGlobe size={48} />,
    title: "Travel Concierge",
    description: "Plan your trips, book flights & luxury stays, and enjoy seamless travel experiences.",
    bg: "linear-gradient(135deg, #000000, #1c1c1c)"
  },
  {
    icon: <FiCoffee size={48} />,
    title: "Lifestyle Management",
    description: "We handle your daily tasks, reservations, and exclusive experiences with elegance.",
    bg: "linear-gradient(135deg, #0d0d0d, #2a2a2a)"
  },
  {
    icon: <FiTruck size={48} />,
    title: "Event Coordination",
    description: "Luxury events perfectly managed with attention to every fine detail.",
    bg: "linear-gradient(135deg, #111, #333)"
  },
  {
    icon: <FiGift size={48} />,
    title: "Personal Shopping",
    description: "Get exclusive products, gifts, and services tailored to your taste.",
    bg: "linear-gradient(135deg, #0a0a0a, #222)"
  },
];

const LuxuryServices = () => {
  return (
    <section className="luxury-services" id="services">
      <motion.div
        className="luxury-services-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Our Ultra-Premium Services</h2>
        <p>Experience unparalleled luxury with services crafted for your lifestyle.</p>
      </motion.div>

      <div className="luxury-services-container">
        {servicesData.map((service, i) => (
          <motion.div
            className={`service-slice slice-${i}`}
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -200 : 200, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: i * 0.3 }}
            style={{ background: service.bg }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212,175,55,0.7)" }}
          >
            <motion.div
              className="service-icon"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              {service.icon}
            </motion.div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LuxuryServices;
