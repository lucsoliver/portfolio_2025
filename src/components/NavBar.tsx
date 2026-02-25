import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Sun, Moon, Menu, X, ArrowUp } from "lucide-react";
import styles from "../styles/NavBar.module.css";
import { useTheme } from "../components/ThemeContext";
import LogoBlack from "../assets/logo-black.svg";
import LogoWhite from "../assets/logo-white.svg";

const sections = [
  { id: "home", label: "nav.home" },
  { id: "about", label: "nav.about" },
  { id: "projects", label: "nav.projects" },
  { id: "skills", label: "nav.skills" },
];

function NavBar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const activeRef = useRef(activeSection);
  activeRef.current = activeSection;

  useEffect(() => {
    const saved = localStorage.getItem("language") ?? "en";
    let mounted = true;
    (async () => {
      await i18n.changeLanguage(saved);
      if (mounted) setIsInitialized(true);
    })();
    return () => {
      mounted = false;
    };
  }, [i18n]);

  const setLanguage = (lang: "en" | "pt") => {
    if (!isInitialized) return;
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const ticking = { v: false };

    const computeActive = () => {
      let bestId = activeRef.current;
      let bestRatio = 0;

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const visibleTop = Math.max(r.top, 0);
        const visibleBottom = Math.min(r.bottom, window.innerHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const ratio = r.height > 0 ? visibleHeight / r.height : 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = s.id;
        }
      }

      if (bestRatio >= 0.45 && bestId !== activeRef.current) {
        setActiveSection(bestId);
      }
    };

    const onScroll = () => {
      if (!ticking.v) {
        ticking.v = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setShowScrollTop(y > 500);
          setIsSidebar(y > 100);
          computeActive();
          ticking.v = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
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
          <div className={styles.logoContainer}>
            <a href="/" aria-label="Home" draggable="false">
              {theme === "dark" ? (
                <img
                  src={LogoWhite}
                  className={styles.logo}
                  alt="Logo"
                  draggable="false"
                />
              ) : (
                <img
                  src={LogoBlack}
                  className={styles.logo}
                  alt="Logo"
                  draggable="false"
                />
              )}
            </a>
          </div>
          <div className={`${navClass} ${styles.desktopNav}`}>
            {sections.map((section) => (
              <a
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`${styles.desktopLink} ${
                  activeSection === section.id ? styles.desktopActive : ""
                }`}
                aria-current={activeSection === section.id ? "true" : undefined}
                draggable="false"
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
          <div className={styles.logoContainerMobile}>
            {theme === "dark" ? (
              <img
                src={LogoWhite}
                className={styles.logo}
                alt="Logo"
                draggable="false"
              />
            ) : (
              <img
                src={LogoBlack}
                className={styles.logo}
                alt="Logo"
                draggable="false"
              />
            )}
          </div>
          {sections.map((section) => (
            <a
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={styles.mobileLink}
              draggable="false"
            >
              {t(section.label)}
            </a>
          ))}
        </div>
      </div>

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
}

export default NavBar;
