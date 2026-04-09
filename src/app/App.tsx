import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Sections/HomeSection/Home";
import About from "../components/Sections/AboutSection/About";
import Skills from "../components/Sections/SkillsSection/Skills";
import Footer from "../components/Footer/Footer";
import Links from "../components/Linkbio/Linkbio";
import { ThemeProvider } from "../components/ThemeContext/ThemeContext";

const Projects = lazy(
  () => import("../components/Sections/ProjectsSection/Projects"),
);

function HomeWebsite() {
  return (
    <main>
      <Home />
      <About />
      <Suspense fallback={<div>Carregando projetos...</div>}>
        <Projects />
      </Suspense>
      <Skills />
    </main>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/links";

  return (
    <>
      {!hideNavAndFooter && <NavBar />}
      <Routes>
        <Route path="/" element={<HomeWebsite />} />
        <Route path="/links" element={<Links />} />
        <Route path="/cv-ptbr" />
        <Route path="/cv-en" />
      </Routes>
      {!hideNavAndFooter && <Footer />}
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
