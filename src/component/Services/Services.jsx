import React from "react";
import { motion } from "framer-motion";
import { FiCoffee, FiGlobe, FiTruck, FiGift } from "react-icons/fi";
import "./Services.css";

const servicesData = [
  {
    icon: <FiGlobe />,
    title: "Travel Concierge",
    description: "Bespoke itineraries, private aviation, and curated stays at the world's most exclusive destinations.",
  },
  {
    icon: <FiCoffee />,
    title: "Lifestyle Management",
    description: "Our dedicated specialists handle your daily essentials with absolute discretion and elegance.",
  },
  {
    icon: <FiTruck />,
    title: "Event Coordination",
    description: "From private galas to intimate celebrations, we orchestrate every detail to perfection.",
  },
  {
    icon: <FiGift />,
    title: "Personal Shopping",
    description: "Access to rare collections, limited editions, and private viewing sessions worldwide.",
  },
];

// Animation Variants for a professional feel
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const LuxuryServices = () => {
  return (
    <section className="luxury-services" id="services">
      <div className="luxury-services-inner">
        <motion.div
          className="luxury-services-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="gold-subtitle">Our Expertise</span>
          <h2>Ultra-Premium Services</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div
          className="luxury-services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((service, i) => (
            <motion.div
              className="service-card"
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-border-gradient"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryServices;