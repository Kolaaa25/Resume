import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const skillsData = {
  core: [
    {
      name: 'HTML5',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3h16l-1.5 15L12 21l-6.5-3L4 3z"/>
          <path d="M12 6v12"/>
          <path d="M7 8h10"/>
          <path d="M7.5 12h9"/>
          <path d="M8 16h8"/>
        </svg>
      ),
    },
    {
      name: 'CSS3',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3h16l-1.5 15L12 21l-6.5-3L4 3z"/>
          <path d="M16 7H8l.5 4h7l-.5 5-3 1-3-1"/>
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M10 17V9"/>
          <path d="M10 17c0 1-1 2-2.5 2"/>
          <path d="M14 13c0-1.5 1-2 2-2s2 .5 2 1.5c0 2-4 1.5-4 3.5 0 1 1 2 2 2s2-.5 2-1.5"/>
        </svg>
      ),
    },
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
          <ellipse cx="12" cy="12" rx="10" ry="4"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
        </svg>
      ),
    },
    {
      name: 'Bootstrap',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3"/>
          <path d="M8 7h4.5c1.5 0 2.5 1 2.5 2.25S14 11.5 12.5 11.5H8V7z"/>
          <path d="M8 11.5h5c1.5 0 2.5 1 2.5 2.25S14.5 16 13 16H8v-4.5z"/>
        </svg>
      ),
    },
  ],
  additional: [
    {
      name: 'Git & GitHub',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      ),
    },
    {
      name: 'Google Sheets',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="8" y1="13" x2="16" y2="13"/>
          <line x1="8" y1="17" x2="16" y2="17"/>
          <line x1="12" y1="9" x2="12" y2="21"/>
        </svg>
      ),
    },
    {
      name: 'Apps Script',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <path d="M10 12l-2 4h4l-2 4"/>
        </svg>
      ),
    },
    {
      name: 'AI Prompting',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
          <circle cx="8" cy="14" r="1" fill="currentColor"/>
          <circle cx="16" cy="14" r="1" fill="currentColor"/>
          <path d="M9 18h6"/>
        </svg>
      ),
    },
    {
      name: 'Axios',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l7.07 17h2.51L6.51 4H4z"/>
          <path d="M20 4l-7.07 17h-2.51L17.49 4H20z"/>
        </svg>
      ),
    },
  ],
};

const Skills = () => {
  const skillsRef = useRef(null);

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

    // Observe titles first (they animate immediately)
    const titles = skillsRef.current?.querySelectorAll('.section-title, .category-title');
    titles?.forEach((el) => {
      observer.observe(el);
    });

    // Observe cards with staggered delay and alternating directions
    const cards = skillsRef.current?.querySelectorAll('.skill-card');
    cards?.forEach((el, index) => {
      el.style.transitionDelay = `${0.2 + index * 0.1}s`;
      el.style.opacity = '0';
      // Парні картки виїжджають зправа, непарні - зліва
      if (index % 2 === 1) {
        el.style.transform = 'translateX(80px)';
      } else {
        el.style.transform = 'translateX(-80px)';
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <Container>
        <h2 className="section-title fade-in">Skills & Technologies</h2>
        
        <div className="skills-category">
          <h3 className="category-title fade-in">Core Skills</h3>
          <Row className="justify-content-center">
            {skillsData.core.map((skill, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={skill.name} className="mb-4">
                <div 
                  className={`skill-card fade-in`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="skills-category">
          <h3 className="category-title fade-in">Additional Skills</h3>
          <Row className="justify-content-center">
            {skillsData.additional.map((skill, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={skill.name} className="mb-4">
                <div 
                  className={`skill-card skill-card-secondary fade-in`}
                  style={{ transitionDelay: `${(index + 5) * 0.1}s` }}
                >
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
