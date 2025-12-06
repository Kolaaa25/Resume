import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';

// Technology icons
const TechIcons = {
  'React': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="2.5"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.5 3.64v7.27L12 18.73l-6.5-3.64V7.82L12 4.18z"/>
      <path d="M12 8v8m-3-6l3-2 3 2"/>
    </svg>
  ),
  'Express': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12h16M4 12l4-4m-4 4l4 4m12-8l-4 4 4 4"/>
    </svg>
  ),
  'Stripe': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
    </svg>
  ),
  'Axios': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4l7.07 16h2.51L6.51 4H4z"/>
      <path d="M20 4l-7.07 16h-2.51L17.49 4H20z"/>
    </svg>
  ),
  'React Router': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="6" r="3"/>
      <circle cx="18" cy="18" r="3"/>
      <path d="M9 12h6m0 0l-2-2m2 2l-2 2"/>
      <path d="M9 10l6-4"/>
      <path d="M9 14l6 4"/>
    </svg>
  ),
  'CSS3': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 3h16l-1.5 15L12 21l-6.5-3L4 3z"/>
      <path d="M16 7H8l.5 4h7l-.5 5-3 1-3-1"/>
    </svg>
  ),
  'Vite': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l9 4.5-1.5 11L12 22l-7.5-4.5L3 6.5 12 2z"/>
      <path d="M8 8l4 10 4-10"/>
    </svg>
  ),
  'JWT': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="8" width="16" height="10" rx="2"/>
      <path d="M8 8V6a4 4 0 118 0v2"/>
      <circle cx="12" cy="13" r="1.5" fill="currentColor"/>
      <path d="M12 14.5v2"/>
    </svg>
  ),
  'Nodemailer': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M3 7l9 6 9-6"/>
    </svg>
  ),
  'Google Maps': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),
  'REST API': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16M4 12h16M4 18h16"/>
      <circle cx="8" cy="6" r="1" fill="currentColor"/>
      <circle cx="8" cy="12" r="1" fill="currentColor"/>
      <circle cx="8" cy="18" r="1" fill="currentColor"/>
    </svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.48 6 12 6z"/>
      <path d="M7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.48 12 7 12z"/>
    </svg>
  ),
  'JavaScript': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 17V9m0 8c0 1-1 2-2.5 2M14 13c0-1.5 1-2 2-2s2 .5 2 1.5c0 2-4 1.5-4 3.5 0 1 1 2 2 2s2-.5 2-1.5"/>
    </svg>
  ),
  'PostgreSQL': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="6" rx="8" ry="3"/>
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>
    </svg>
  ),
  'TMDB API': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <circle cx="8" cy="12" r="2"/>
      <path d="M14 10h4m-4 4h4"/>
    </svg>
  ),
};

const defaultProjects = [
  {
    id: 1,
    title: 'Cleaning Service',
    description: 'A full-stack booking platform for cleaning services with customer portal, admin panel, and Stripe payment integration.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    ),
    link: 'https://cleaning-azure.vercel.app',
    tags: ['React', 'Node.js', 'Express', 'Stripe', 'Axios', 'React Router', 'CSS3', 'Vite', 'JWT', 'Nodemailer', 'Google Maps', 'REST API'],
  },
  {
    id: 2,
    title: 'Coffee Shop',
    description: 'A stylish coffee shop website with menu, cart functionality, admin dashboard, and user authentication.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    link: 'https://coffee-shop-gilt-five.vercel.app/',
    tags: ['React', 'Node.js', 'Express', 'Stripe', 'Axios', 'React Router', 'Tailwind CSS', 'Vite', 'JWT', 'Nodemailer', 'Google Maps', 'REST API'],
  },
  {
    id: 3,
    title: 'CineStream Movies',
    description: 'A premium movie streaming platform with user subscriptions, Stripe payments, and TMDB API integration.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
        <line x1="7" y1="2" x2="7" y2="22"/>
        <line x1="17" y1="2" x2="17" y2="22"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <line x1="2" y1="7" x2="7" y2="7"/>
        <line x1="2" y1="17" x2="7" y2="17"/>
        <line x1="17" y1="17" x2="22" y2="17"/>
        <line x1="17" y1="7" x2="22" y2="7"/>
      </svg>
    ),
    link: 'https://cine-stream-movie.vercel.app/',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'Axios', 'React Router', 'CSS3', 'Vite', 'JWT', 'TMDB API', 'REST API'],
  },
];

const Projects = () => {
  const projectsRef = useRef(null);
  const [projects] = useState(defaultProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using default projects data - no backend needed
    setLoading(false);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '-30px 0px' }
    );

    // Observe title and subtitle first
    const titles = projectsRef.current?.querySelectorAll('.section-title, .section-subtitle');
    titles?.forEach((el) => {
      observer.observe(el);
    });

    // Observe cards with staggered delay and alternating directions
    const cards = projectsRef.current?.querySelectorAll('.project-card');
    cards?.forEach((el, index) => {
      el.style.transitionDelay = `${0.3 + index * 0.2}s`;
      el.style.opacity = '0';
      // Парні картки виїжджають зправа, непарні - зліва
      if (index % 2 === 1) {
        el.style.transform = 'translateX(100px)';
      } else {
        el.style.transform = 'translateX(-100px)';
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  return (
    <section className="projects-section" id="projects" ref={projectsRef}>
      <Container>
        <h2 className="section-title fade-in">My Projects</h2>
        <p className="section-subtitle fade-in">
          Here are some of the projects I've built while learning web development
        </p>
        
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={project.id} className="mb-4">
              <div className={`project-card fade-in`}>
                <div className="project-icon">
                  {project.icon || (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M7 7h10"/>
                      <path d="M7 12h10"/>
                      <path d="M7 17h6"/>
                    </svg>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {TechIcons[tag] && <span className="tag-icon">{TechIcons[tag]}</span>}
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="neon-button project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <div className="project-glow"></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
