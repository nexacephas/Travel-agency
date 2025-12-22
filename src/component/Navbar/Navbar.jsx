import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GiCrown } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

// Sections of the page
const SECTIONS = ["about", "services", "steps", "contact"];

// Multi-language text
const TEXT = {
  EN: {
    about: "About",
    services: "Services",
    steps: "Process",
    contact: "Contact",
    cta: "Book Appointment",
  },
  FR: {
    about: "À propos",
    services: "Services",
    steps: "Processus",
    contact: "Contact",
    cta: "Réserver",
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "EN");

  /* Persist language to localStorage */
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  /* Scroll detection + active section */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);

      SECTIONS.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* Smooth scroll with sticky offset */
  const handleScrollTo = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const offsetTop = element.offsetTop - navbarHeight - 20; // 20px padding
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="navbar__container">
          {/* Logo */}
          <div className="navbar__logo">
            <GiCrown size={34} />
            <span>Maison</span>
          </div>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {SECTIONS.map((id) => (
              <li key={id}>
                <button
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                  onClick={() => handleScrollTo(id)}
                >
                  {TEXT[language][id]}
                </button>
              </li>
            ))}
          </ul>

          {/* Language Switch */}
          <div className="navbar__lang">
            <button
              className={language === "EN" ? "active" : ""}
              onClick={() => changeLanguage("EN")}
            >
              EN
            </button>
            <span>|</span>
            <button
              className={language === "FR" ? "active" : ""}
              onClick={() => changeLanguage("FR")}
            >
              FR
            </button>
          </div>

          {/* CTA */}
          <a href="https://wa.me/2340000000000" className="navbar__cta">
            {TEXT[language].cta}
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            {SECTIONS.map((id) => (
              <button
                key={id}
                className={`mobile-link ${activeSection === id ? "active" : ""}`}
                onClick={() => handleScrollTo(id)}
              >
                {TEXT[language][id]}
              </button>
            ))}

            <a
              href="https://wa.me/2340000000000"
              className="mobile-menu__cta"
              onClick={() => setMenuOpen(false)}
            >
              {TEXT[language].cta}
            </a>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
