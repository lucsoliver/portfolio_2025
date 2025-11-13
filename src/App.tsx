import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Links from "./components/Links";
import { ThemeProvider } from "./components/ThemeContext";

const Projects = lazy(() => import("./components/Projects"));

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
