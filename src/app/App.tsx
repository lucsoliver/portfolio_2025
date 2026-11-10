import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Sections/HomeSection/Home";
import About from "../components/Sections/AboutSection/About";
import Skills from "../components/Sections/SkillsSection/Skills";
import Contact from "../components/Sections/ContactSection/Contact";
import Footer from "../components/Footer/Footer";
import Links from "../pages/Linkbio/Linkbio";
import Work from "../pages/Work/Work";
import { ThemeProvider } from "../components/ThemeContext/ThemeContext";

const Projects = lazy(
  () => import("../components/Sections/ProjectsSection/Projects"),
);

function ProjectsFallback() {
  const { t } = useTranslation();
  return (
    <section id="projects" aria-busy="true" aria-live="polite">
      <p className="sr-only">{t("projects.loading")}</p>
    </section>
  );
}

function HomeWebsite() {
  return (
    <>
      <main id="main-content">
        <Home />
        <About />
        <Suspense fallback={<ProjectsFallback />}>
          <Projects />
        </Suspense>
        <Skills />
        <Contact />
      </main>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const hideNav = location.pathname === "/links";
  const hideFooter = ["/links", "/work"].includes(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const nextTitle =
      location.pathname === "/links"
        ? "Links | Lucas Oliveira"
        : location.pathname === "/work"
          ? i18n.language === "pt"
            ? "Trabalho | Lucas Oliveira"
            : "Work | Lucas Oliveira"
          : "Lucas Oliveira | Desenvolvedor Front-end";

    document.title = nextTitle;
  }, [location.pathname, i18n.language]);

  return (
    <>
      {!hideNav && <NavBar />}
      <Routes>
        <Route path="/" element={<HomeWebsite />} />
        <Route path="/links" element={<Links />} />
        <Route path="/work" element={<Work />} />
        <Route path="/cv-ptbr" />
        <Route path="/cv-en" />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
