import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GiCrown } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import { useLanguage } from "../../context/LanguageContext";

const SECTIONS = ["about", "services", "steps", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { lang, setLang, t } = useLanguage();

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleScrollTo = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    window.scrollTo({
      top: element.offsetTop - navbarHeight - 20,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="navbar__container">
          {/* Logo */}
          <div className="navbar__logo">
            <GiCrown size={34} />
            <span>Maison</span>
          </div>

          {/* Hamburger */}
          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="navbar__dropdown"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {SECTIONS.map((id) => (
                <button
                  key={id}
                  className={`dropdown-link ${
                    activeSection === id ? "active" : ""
                  }`}
                  onClick={() => handleScrollTo(id)}
                >
                  {t(`nav.${id}`) || id}
                </button>
              ))}

              <div className="dropdown-lang">
                <button
                  className={lang === "EN" ? "active" : ""}
                  onClick={() => setLang("EN")}
                >
                  EN
                </button>
                <button
                  className={lang === "FR" ? "active" : ""}
                  onClick={() => setLang("FR")}
                >
                  FR
                </button>
              </div>

              <a
                href="https://wa.me/2340000000000"
                className="dropdown-cta"
              >
                {t("nav.cta")}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
