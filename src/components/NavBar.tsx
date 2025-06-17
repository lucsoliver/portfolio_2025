import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Sun, Moon, Menu, X, ArrowUp } from "lucide-react";
import styles from "../styles/NavBar.module.css";
import { useTheme } from "../components/ThemeContext";

const sections = [
  { id: "home", label: "nav.home" },
  { id: "about", label: "nav.about" },
  { id: "projects", label: "nav.projects" },
];

const NavBar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  // Language initialization
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    i18n.changeLanguage(savedLanguage ? savedLanguage : "en");
    setIsInitialized(true);
  }, [i18n]);

  // Scroll top
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      setIsSidebar(window.scrollY > 100); // Troca para sidebar após 100px de scroll
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setLanguage = (lang: "en" | "pt") => {
    if (!isInitialized) return;
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navClass = isSidebar ? styles.sidebarNav : styles.stickyNav;

  return (
    <>
      {isInitialized && (
        <nav className={styles.stickyNav}>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className={styles.menuButton}
            aria-label="Toggle menu"
          >
            {!isMenuOpen ? (
              <Menu className={styles.iconMd} aria-hidden="true" />
            ) : (
              <X className={styles.iconMd} aria-hidden="true" />
            )}
          </button>

          {/* Desktop nav */}
          <div className={`${navClass} ${styles.desktopNav}`}>
            {sections.map((section) => (
              <a
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={styles.desktopLink}
              >
                {t(section.label)}
              </a>
            ))}
          </div>

          {/* Language/theme toggles */}
          <div className={styles.toggles}>
            <div className={styles.langToggle}>
              <button
                onClick={() => setLanguage("pt")}
                className={`${styles.langBtn} ${
                  i18n.language === "pt"
                    ? styles.langActive
                    : styles.langInactive
                }`}
              >
                PT
              </button>
              <span className={styles.langInactive}>/</span>
              <button
                onClick={() => setLanguage("en")}
                className={`${styles.langBtn} ${
                  i18n.language === "en"
                    ? styles.langActive
                    : styles.langInactive
                }`}
              >
                EN
              </button>
            </div>
            <button
              onClick={toggleTheme}
              className={styles.themeBtn}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className={styles.iconSm} aria-hidden="true" />
              ) : (
                <Sun className={styles.iconSm} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div
        className={[
          styles.mobileMenu,
          isMenuOpen ? styles.mobileMenuOpen : "",
        ].join(" ")}
      >
        <div className={styles.mobileMenuContent}>
          {sections.map((section) => (
            <a
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={styles.mobileLink}
            >
              {t(section.label)}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll top  */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={styles.scrollTopBtn}
          aria-label="Voltar ao topo"
        >
          <ArrowUp className={styles.iconSm} />
        </button>
      )}
    </>
  );
};

export default NavBar;
