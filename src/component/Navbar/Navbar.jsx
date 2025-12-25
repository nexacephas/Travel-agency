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
      setIsScrolled(window.scrollY > 50);

      // Optimized Active Section Logic
      const scrollPos = window.scrollY + 150;
      SECTIONS.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            setActiveSection(id);
          }
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
    
    const offset = 100; // Adjust based on your floating nav height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="navbar__container">
          <div className="navbar__logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <GiCrown size={30} />
            <span>MAISON</span>
          </div>

          <button
            className={`navbar__toggle ${menuOpen ? "is-active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Full Height Left Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Dark Overlay Backdrop */}
              <motion.div 
                className="navbar__overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />

              <motion.div
                className="navbar__drawer"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <div className="drawer__header">
                   <GiCrown size={40} color="var(--gold)" />
                </div>

                <div className="drawer__links">
                  {SECTIONS.map((id) => (
                    <button
                      key={id}
                      className={`drawer-link ${activeSection === id ? "active" : ""}`}
                      onClick={() => handleScrollTo(id)}
                    >
                      <span className="link-number">0{SECTIONS.indexOf(id) + 1}</span>
                      {t(`nav.${id}`) || id}
                    </button>
                  ))}
                </div>

                <div className="drawer__footer">
                  <div className="drawer-lang">
                    <button className={lang === "EN" ? "active" : ""} onClick={() => setLang("EN")}>EN</button>
                    <span className="separator">|</span>
                    <button className={lang === "FR" ? "active" : ""} onClick={() => setLang("FR")}>FR</button>
                  </div>
                  
                  <a href="https://wa.me/2340000000000" className="drawer-cta">
                    {t("nav.cta")}
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;