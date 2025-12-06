import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col lg={8} className="text-center">
            <div className="hero-content">
              <div className="hero-badge fade-in">
                <span className="badge-text">Frontend Developer</span>
              </div>
              <h1 className="hero-name fade-in">
                Mykola Matekha
              </h1>
              <p className="hero-email fade-in">
                <svg className="email-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                matehakola@gmail.com
              </p>
              <p className="hero-intro fade-in">
                Beginner Front-End Developer building real projects while learning modern web technologies. 
                Passionate about creating beautiful, responsive, and user-friendly interfaces.
              </p>
              <div className="hero-cta fade-in">
                <a href="#projects" className="neon-button">
                  View My Work
                </a>
                <a href="#contact" className="neon-button neon-button-outline">
                  Get In Touch
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
