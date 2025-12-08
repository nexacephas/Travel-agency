import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker, useMap } from "react-leaflet";
import L from "leaflet";
import luxuryMarker from "../../assets/—Pngtree—luxury gold location icon for_21126796.png";
import "./Contact.css";
import ContactVideo from "../../assets/32945-395456395_medium.mp4";

// Custom icon
const luxuryIcon = new L.Icon({
  iconUrl: luxuryMarker,
  iconSize: [35, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0, -40],
});

// Animated map fly
const AnimatedMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 13, { duration: 2 });
  }, [position, map]);
  return null;
};

const locations = [
  { name: "Lagos HQ", coords: [6.5244, 3.3792] },
  { name: "Abuja Office", coords: [9.0579, 7.4951] },
  { name: "Port Harcourt Branch", coords: [4.8156, 7.0498] },
];

const Contact = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll contact you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  // Route line coordinates
  const route = locations.map((loc) => loc.coords);

  // Pulsing animation for markers
  const pulseVariants = {
    animate: { scale: [1, 1.5, 1], opacity: [0.7, 0.3, 0.7], transition: { repeat: Infinity, duration: 2 } },
  };

  return (
    <section className="contact-section">
      <motion.video
        className="contact-video"
        autoPlay
        loop
        muted
        playsInline
        src={ContactVideo}
        style={{ y: offsetY * 0.1 }}
      />
      <div className="contact-overlay"></div>

      <div className="contact-container">
        <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Get in Touch
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
          Experience the pinnacle of luxury. Contact our concierge team for bespoke services.
        </motion.p>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(212,175,55,0.7)" }}
            required
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(212,175,55,0.7)" }}
            required
          />
          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(212,175,55,0.7)" }}
            required
          />
          <motion.button type="submit" whileHover={{ scale: 1.05, backgroundColor: "#e5c58d" }} whileTap={{ scale: 0.95 }}>
            Send Message
          </motion.button>
        </motion.form>

        {/* Animated Luxury Map */}
        <motion.div
          className="contact-map"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <MapContainer center={locations[0].coords} zoom={6} scrollWheelZoom={false} style={{ height: "400px", borderRadius: "15px" }}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <AnimatedMap position={locations[0].coords} />

            {/* Animated Pulsing Markers */}
            {locations.map((loc, i) => (
              <CircleMarker
                key={i}
                center={loc.coords}
                radius={10}
                pathOptions={{ color: "#d4af37", fillColor: "#d4af37", fillOpacity: 0.5 }}
              >
                <Popup>{loc.name}</Popup>
              </CircleMarker>
            ))}

            {/* Gold route line */}
            <Polyline positions={route} color="#d4af37" weight={4} dashArray="10,10" />
          </MapContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
