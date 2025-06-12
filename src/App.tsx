import React, { Suspense, lazy } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';

const Projects = lazy(() => import('./components/Projects'));

const App: React.FC = () => (
   <ThemeProvider>
    <NavBar />
    <main>
      <About />
      <Suspense fallback={<div>Carregando projetos...</div>}>
        <Projects />
      </Suspense>
    </main>
    <Footer />
  </ThemeProvider>
);

export default App;