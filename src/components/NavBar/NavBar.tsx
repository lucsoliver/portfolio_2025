import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X, ArrowUp } from "lucide-react";
import { useTheme } from "../ThemeContext/ThemeContext";
import styles from "./NavBar.module.css";
import LogoBlack from "../../assets/images/logo/logo-black.svg";
import LogoWhite from "../../assets/images/logo/logo-white.svg";
import {
  applyHighlightColor,
  initHighlightColor,
  DEFAULT_HIGHLIGHT_COLOR,
} from "../../utils/highlightColor";

const sections = [
  { id: "home", label: "nav.home" },
  { id: "about", label: "nav.about" },
  { id: "projects", label: "nav.projects" },
  { id: "skills", label: "nav.skills" },
  { id: "contact", label: "nav.contact" },
];

const highlightColors = [
  { id: "green", value: "#5dfeb6", label: "Green" },
  { id: "purple", value: "#9b5dfe", label: "Purple" },
  { id: "pink", value: "#fe5dcc", label: "Pink" },
  { id: "yellow", value: "#fed65d", label: "Yellow" },
  { id: "blue", value: "#5d9dfe", label: "Blue" },
];

function NavBar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.innerWidth <= 1024 : false,
  );
  const [activeSection, setActiveSection] = useState<string>("home");
  const [highlightColor, setHighlightColor] = useState<string>(
    DEFAULT_HIGHLIGHT_COLOR,
  );

  const activeRef = useRef(activeSection);
  activeRef.current = activeSection;
  const colorMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("language") ?? "pt";
    let mounted = true;
    (async () => {
      await i18n.changeLanguage(saved);
      if (mounted) setIsInitialized(true);
    })();
    return () => {
      mounted = false;
    };
  }, [i18n]);

  useEffect(() => {
    const saved = initHighlightColor();
    setHighlightColor(saved);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  const setHighlight = (color: string) => {
    setHighlightColor(color);
    applyHighlightColor(color);
    localStorage.setItem("highlightColor", color);
  };

  const toggleColorMenu = () => {
    setIsColorMenuOpen((current) => !current);
  };

  const closeColorMenu = () => {
    setIsColorMenuOpen(false);
  };

  const setLanguage = (lang: "en" | "pt") => {
    if (!isInitialized) return;
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        isColorMenuOpen &&
        colorMenuRef.current &&
        !colorMenuRef.current.contains(event.target as Node)
      ) {
        closeColorMenu();
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, [isColorMenuOpen]);

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

  const isWorkPage = location.pathname === "/work";
  const showSectionNav = !isWorkPage;

  useEffect(() => {
    if (!showSectionNav) {
      setActiveSection("home");
    }
  }, [showSectionNav]);

  const cvPdfHref =
    i18n.language === "pt"
      ? "/docs/CV_Lucas_Oliveira_Novembro2026.pdf"
      : "/docs/CV_Lucas_Oliveira_October2026.pdf";
  const cvDownloadName =
    i18n.language === "pt"
      ? "lucas-oliveira-cv-ptbr.pdf"
      : "lucas-oliveira-cv-en.pdf";

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const homeLabel = i18n.language === "pt" ? "Início" : "Home";
  const navClass = isSidebar ? styles.sidebarNav : styles.stickyNav;

  return (
    <>
      {isInitialized && (
        <nav className={styles.stickyNav} aria-label="Main navigation">
          {!isWorkPage && (
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className={styles.menuButton}
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <Menu
                  className={styles.iconMd}
                  aria-hidden="true"
                  focusable="false"
                />
              ) : (
                <X
                  className={styles.iconMd}
                  aria-hidden="true"
                  focusable="false"
                />
              )}
            </button>
          )}

          {/* desktop nav */}
          <div className={styles.logoContainer}>
            <button
              onClick={() => navigate("/")}
              aria-label="Home"
              draggable="false"
              className={styles.logoButton}
            >
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
            </button>
          </div>
          {showSectionNav && (
            <div className={`${navClass} ${styles.desktopNav}`}>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={`desktopNavBar ${
                    activeSection === section.id ? styles.desktopActive : ""
                  }`}
                  aria-current={
                    activeSection === section.id ? "page" : undefined
                  }
                  draggable="false"
                >
                  {t(section.label)}
                </a>
              ))}
            </div>
          )}

          <div className={styles.toggleWarapper}>
            {!isMobile && (
              <div className={styles.toggle}>
                {isWorkPage ? (
                  <>
                    <button
                      type="button"
                      onClick={() => navigate("/")}
                      className={styles.navToggle}
                    >
                      {homeLabel}
                    </button>
                    <span className={styles.divisor}>/</span>
                    <button
                      type="button"
                      onClick={() => navigate("/work")}
                      className={styles.navToggle}
                    >
                      {t("nav.work")}
                    </button>
                    <span className={styles.divisor}>/</span>
                    <a
                      href={cvPdfHref}
                      download={cvDownloadName}
                      className={styles.navToggle}
                      aria-label={t("nav.cv")}
                    >
                      {t("nav.cv")}
                    </a>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => navigate("/work")}
                      className={styles.navToggle}
                    >
                      {t("nav.work")}
                    </button>
                    <span className={styles.divisor}>/</span>
                    <a
                      href={cvPdfHref}
                      download={cvDownloadName}
                      className={styles.navToggle}
                      aria-label={t("nav.cv")}
                    >
                      {t("nav.cv")}
                    </a>
                  </>
                )}
              </div>
            )}

            {isMobile && isWorkPage && (
              <div className={styles.toggle}>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className={styles.navToggle}
                >
                  {homeLabel}
                </button>
              </div>
            )}

            {/* language toggle */}
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
              <span className={styles.divisor}>/</span>
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

            {/* color toggle  */}
            <div ref={colorMenuRef} className={styles.colorDropdown}>
              <button
                type="button"
                className={styles.colorDropdownButton}
                aria-haspopup="true"
                aria-expanded={isColorMenuOpen}
                aria-label="Abrir seletor de destaque"
                onClick={toggleColorMenu}
              >
                <span
                  className={styles.colorPreview}
                  style={{ backgroundColor: highlightColor }}
                />
              </button>
              {isColorMenuOpen && (
                <div className={styles.colorDropdownMenu} role="menu">
                  {highlightColors.map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      className={`${styles.colorOption} ${
                        highlightColor === color.value
                          ? styles.colorOptionActive
                          : ""
                      }`}
                      style={{ backgroundColor: color.value }}
                      aria-label={`Selecionar ${color.label}`}
                      onClick={() => {
                        setHighlight(color.value);
                        closeColorMenu();
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            {/* theme toggle */}
            <button
              onClick={toggleTheme}
              className={styles.themeBtn}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon
                  className={styles.iconSm}
                  aria-hidden="true"
                  focusable="false"
                />
              ) : (
                <Sun
                  className={styles.iconSm}
                  aria-hidden="true"
                  focusable="false"
                />
              )}
            </button>
          </div>
        </nav>
      )}

      {/* mobile menu */}
      {showSectionNav && isMenuOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      {showSectionNav && (
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
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                className={styles.mobileLink}
                draggable="false"
              >
                {t(section.label)}
              </a>
            ))}

            <div className={styles.mobileControls}>
              <div className={styles.mobileActions}>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/work");
                    setIsMenuOpen(false);
                  }}
                  className={styles.mobileLink}
                  draggable="false"
                >
                  {t("nav.work")}
                </button>

                <a
                  href={cvPdfHref}
                  download={cvDownloadName}
                  className={styles.mobileLink}
                  draggable="false"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.cv")}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={styles.scrollTopBtn}
          aria-label="Voltar ao topo"
        >
          <ArrowUp
            className={styles.iconSm}
            aria-hidden="true"
            focusable="false"
          />
        </button>
      )}
    </>
  );
}

export default NavBar;
