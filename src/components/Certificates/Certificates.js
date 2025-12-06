import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Certificates.css';

// Issuer icons
const IssuerIcons = {
  meta: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="issuer-icon">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  ),
  coursera: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="issuer-icon">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  ),
  freecodecamp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="issuer-icon">
      <path d="M4 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm14-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6-6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V6c0-1.1-.9-2-2-2zm0 10c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1-.9-2-2-2z"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="issuer-icon">
      <path d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2 2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 8.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 4.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.78-2.03.78-2.82 0L2.6 14.41c-.79-.79-.79-2.05 0-2.83"/>
    </svg>
  ),
};

const certificatesData = [
  {
    id: 1,
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    platform: 'Coursera',
    issuerIcon: 'meta',
    date: '2024',
    description: 'Fundamentals of web development including HTML5, CSS3, and responsive design principles.',
    link: 'https://coursera.org/verify/91ZMXHQWCENL',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4"/>
        <rect x="3" y="3" width="18" height="18" rx="2"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    platform: 'Coursera',
    issuerIcon: 'meta',
    date: '2024',
    description: 'Core JavaScript concepts including ES6+, DOM manipulation, and functional programming.',
    link: 'https://coursera.org/verify/A23N3ADC42T3',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M10 17V9m0 8c0 1-1 2-2.5 2"/>
        <path d="M14 13c0-1.5 1-2 2-2s2 .5 2 1.5c0 2-4 1.5-4 3.5 0 1 1 2 2 2s2-.5 2-1.5"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'HTML and CSS in Depth',
    issuer: 'Meta',
    platform: 'Coursera',
    issuerIcon: 'meta',
    date: '2024',
    description: 'Advanced HTML5 and CSS3 techniques including Flexbox, Grid, animations, and responsive design.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 3h16l-1.5 15L12 21l-6.5-3L4 3z"/>
        <path d="M16 7H8l.5 4h7l-.5 5-3 1-3-1"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Version Control',
    issuer: 'Meta',
    platform: 'Coursera',
    issuerIcon: 'git',
    date: '2024',
    description: 'Git and GitHub fundamentals including branching, merging, and collaborative workflows.',
    link: 'https://coursera.org/verify/FN9DP92U9XKQ',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="18" cy="18" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <path d="M6 9v6"/>
        <path d="M18 15V9a3 3 0 00-3-3h-3"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    issuerIcon: 'freecodecamp',
    date: 'August 2024',
    description: 'Comprehensive certification covering responsive design, CSS Flexbox, Grid, and accessibility.',
    link: 'https://freecodecamp.org/certification/MykolaMatekha/responsive-web-design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="14" rx="2"/>
        <path d="M8 20h8"/>
        <path d="M12 18v2"/>
        <path d="M7 10l3 3-3 3"/>
        <path d="M14 14h3"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'React Basics',
    issuer: 'Meta',
    platform: 'Coursera',
    issuerIcon: 'meta',
    date: 'In Progress',
    description: 'React fundamentals including components, props, state, and hooks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2"/>
        <ellipse cx="12" cy="12" rx="9" ry="4"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
];

const Certificates = () => {
  const certificatesRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Додаємо клас animated після завершення анімації
            const delay = parseFloat(entry.target.style.transitionDelay) || 0;
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, (delay + 0.8) * 1000); // delay + час анімації
          }
        });
      },
      { threshold: 0.15, rootMargin: '-30px 0px' }
    );

    // Observe title first
    const title = certificatesRef.current?.querySelector('.section-title');
    if (title) observer.observe(title);

    // Observe cards with staggered delay and alternating directions
    const cards = certificatesRef.current?.querySelectorAll('.certificate-card');
    cards?.forEach((el, index) => {
      el.style.transitionDelay = `${0.3 + index * 0.2}s`;
      // Парні картки виїжджають зправа, непарні - зліва
      if (index % 2 === 1) {
        el.style.transform = 'translateX(100px)';
      } else {
        el.style.transform = 'translateX(-100px)';
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const CertificateCard = ({ cert, index }) => {
    const cardContent = (
      <>
        <div className="certificate-icon">
          {cert.icon}
        </div>
        <div className="certificate-content">
          <h3 className="certificate-title">{cert.title}</h3>
          <div className="certificate-meta">
            <span className="certificate-issuer">
              {IssuerIcons[cert.issuerIcon]}
              {cert.issuer}
              {cert.platform && <span className="certificate-platform"> / {cert.platform}</span>}
            </span>
            <span className="certificate-date">{cert.date}</span>
          </div>
          <p className="certificate-description">{cert.description}</p>
        </div>
        <div className="certificate-badge">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </>
    );

    // На мобільних додаємо клас animated одразу
    const mobileClass = isMobile ? 'animated' : '';

    if (cert.link) {
      return (
        <a 
          href={cert.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`certificate-card fade-in ${mobileClass}`} 
          style={{ transitionDelay: `${index * 0.15}s`, textDecoration: 'none' }}
        >
          {cardContent}
        </a>
      );
    }

    return (
      <div className={`certificate-card fade-in ${mobileClass}`} style={{ transitionDelay: `${index * 0.15}s` }}>
        {cardContent}
      </div>
    );
  };

  return (
    <section className="certificates-section" id="certificates" ref={certificatesRef}>
      <Container>
        <h2 className="section-title fade-in">Certificates</h2>
        <p className="section-subtitle fade-in">
          Professional certifications from Meta's Front-End Developer program
        </p>

        {isMobile ? (
          <Carousel 
            className="certificates-carousel"
            indicators={true}
            controls={true}
            interval={4000}
          >
            {certificatesData.map((cert, index) => (
              <Carousel.Item key={cert.id}>
                <div className="carousel-card-wrapper">
                  <CertificateCard cert={cert} index={index} />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Row className="justify-content-center">
            {certificatesData.map((cert, index) => (
              <Col lg={6} key={cert.id} className="mb-4">
                <CertificateCard cert={cert} index={index} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Certificates;
