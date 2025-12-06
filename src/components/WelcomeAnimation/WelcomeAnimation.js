import React, { useEffect, useState } from 'react';
import './WelcomeAnimation.css';

const WelcomeAnimation = () => {
  const [visible, setVisible] = useState(false);
  
  // Split into parts with pauses
  const part1 = "Hi,";
  const part2 = "I'm Mykola Matekha";

  useEffect(() => {
    // Immediate fade-in for seamless transition from loader
    requestAnimationFrame(() => setVisible(true));
  }, []);

  // Calculate delays
  const part1Delay = 0.3; // Start after 0.3s
  const part2Delay = part1Delay + (part1.length * 0.08) + 0.6; // After part1 + pause
  const subtitleDelay = part2Delay + (part2.length * 0.06) + 0.8; // After part2 + pause

  return (
    <div className={`welcome-container ${visible ? 'visible' : ''}`}>
      {/* Stars Background */}
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div 
            key={`star-${i}`}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>
      
      {/* Shooting Stars */}
      <div className="shooting-stars">
        <div className="shooting-star" style={{ top: '20%', animationDelay: '0s' }}></div>
        <div className="shooting-star" style={{ top: '40%', animationDelay: '2s' }}></div>
        <div className="shooting-star" style={{ top: '60%', animationDelay: '4s' }}></div>
      </div>

      <div className="welcome-content">
        <h1 className="welcome-text">
          {/* Part 1: "Hi," */}
          <span className="text-part part-1">
            {part1.split('').map((letter, index) => (
              <span
                key={`p1-${index}`}
                className="welcome-letter"
                style={{
                  animationDelay: `${part1Delay + index * 0.08}s`,
                }}
              >
                {letter}
              </span>
            ))}
          </span>
          
          {/* Space between parts */}
          <span className="welcome-space">&nbsp;</span>
          
          {/* Part 2: "I'm Mykola Matekha" */}
          <span className="text-part part-2">
            {part2.split('').map((letter, index) => (
              <span
                key={`p2-${index}`}
                className="welcome-letter"
                style={{
                  animationDelay: `${part2Delay + index * 0.06}s`,
                  marginRight: letter === ' ' ? '0.3em' : '0'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </span>
        </h1>
        <p className="welcome-subtitle" style={{ animationDelay: `${subtitleDelay}s` }}>Welcome to My Portfolio</p>
        <div className="welcome-decorations">
          {/* White Neon Star */}
          <svg className="decoration decoration-1" viewBox="0 0 100 100">
            <defs>
              <filter id="glowWhite1" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <polygon points="50,5 61,40 95,40 68,62 79,95 50,75 21,95 32,62 5,40 39,40" fill="none" stroke="#ffffff" strokeWidth="1.5" filter="url(#glowWhite1)" opacity="0.9"/>
          </svg>
          
          {/* Purple Triangle */}
          <svg className="decoration decoration-2" viewBox="0 0 100 100">
            <defs>
              <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <polygon points="50,15 85,85 15,85" fill="none" stroke="#a78bfa" strokeWidth="2" filter="url(#glow2)" />
          </svg>
          
          {/* Cold Blue Circle */}
          <svg className="decoration decoration-3" viewBox="0 0 100 100">
            <defs>
              <filter id="glowCold" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="50" cy="50" r="15" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#glowCold)" />
            <circle cx="50" cy="50" r="8" fill="none" stroke="#93c5fd" strokeWidth="1" opacity="0.6" />
          </svg>
          
          {/* White Neon Dot */}
          <svg className="decoration decoration-4" viewBox="0 0 100 100">
            <defs>
              <filter id="glowWhite2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="50" cy="50" r="6" fill="#ffffff" filter="url(#glowWhite2)" />
          </svg>
          
          {/* Purple Diamond */}
          <svg className="decoration decoration-5" viewBox="0 0 100 100">
            <defs>
              <filter id="glow5" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#9d4edd" strokeWidth="2" filter="url(#glow5)" />
          </svg>
          
          {/* Cold White Ring */}
          <svg className="decoration decoration-6" viewBox="0 0 100 100">
            <defs>
              <filter id="glowWhite3" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="50" cy="50" r="18" fill="none" stroke="#e0e7ff" strokeWidth="1.5" filter="url(#glowWhite3)" opacity="0.8"/>
          </svg>
          
          {/* Ice Blue Star */}
          <svg className="decoration decoration-7" viewBox="0 0 100 100">
            <defs>
              <filter id="glowIce" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <polygon points="50,20 56,44 80,44 60,58 68,82 50,68 32,82 40,58 20,44 44,44" fill="none" stroke="#7dd3fc" strokeWidth="1.5" filter="url(#glowIce)" />
          </svg>
          
          {/* Hexagon */}
          <svg className="decoration decoration-8" viewBox="0 0 100 100">
            <defs>
              <filter id="glow8" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="#8b5cf6" strokeWidth="2" filter="url(#glow8)" />
          </svg>
          
          {/* Pulsing White Dot */}
          <svg className="decoration decoration-9" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="4" fill="#ffffff">
              <animate attributeName="r" values="4;10;4" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.2;1" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          {/* Cross Light */}
          <svg className="decoration decoration-10" viewBox="0 0 100 100">
            <defs>
              <filter id="glowCross" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <line x1="50" y1="20" x2="50" y2="80" stroke="#c4b5fd" strokeWidth="2" filter="url(#glowCross)" />
            <line x1="20" y1="50" x2="80" y2="50" stroke="#c4b5fd" strokeWidth="2" filter="url(#glowCross)" />
          </svg>
          
          {/* Small Ice Circle */}
          <svg className="decoration decoration-11" viewBox="0 0 100 100">
            <defs>
              <filter id="glowIce2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="50" cy="50" r="5" fill="#bfdbfe" filter="url(#glowIce2)" />
          </svg>
          
          {/* Orbit Ring */}
          <svg className="decoration decoration-12" viewBox="0 0 100 100">
            <defs>
              <filter id="glowOrbit" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <ellipse cx="50" cy="50" rx="30" ry="12" fill="none" stroke="#a78bfa" strokeWidth="1" filter="url(#glowOrbit)" opacity="0.7"/>
          </svg>
        </div>
      </div>
      
      {/* Nebula glow */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
    </div>
  );
};

export default WelcomeAnimation;
