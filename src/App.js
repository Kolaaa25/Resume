import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import WelcomeAnimation from './components/WelcomeAnimation/WelcomeAnimation';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Footer from './components/Footer/Footer';
import FloatingElements from './components/FloatingElements/FloatingElements';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [loaderFading, setLoaderFading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    // Start fading loader before it disappears
    const fadeTimer = setTimeout(() => {
      setLoaderFading(true);
    }, 2500);

    const loaderTimer = setTimeout(() => {
      setLoading(false);
      setShowWelcome(true);
    }, 3500); // Extended to allow fade animation

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  useEffect(() => {
    if (showWelcome) {
      const welcomeTimer = setTimeout(() => {
        setShowWelcome(false);
        setShowMain(true);
      }, 5000);

      return () => clearTimeout(welcomeTimer);
    }
  }, [showWelcome]);

  return (
    <div className="App">
      {loading && <Loader fading={loaderFading} />}
      {showWelcome && <WelcomeAnimation />}
      {showMain && (
        <>
          <FloatingElements />
          <main className="main-content">
            <Hero />
            <Skills />
            <Projects />
            <Certificates />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
