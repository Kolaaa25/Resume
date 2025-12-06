import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ fading }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 23); // Adjusted to reach 100% before fade

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loader-container ${fading ? 'loader-fading' : ''}`}>
      {/* Stars background */}
      <div className="loader-stars">
        {[...Array(80)].map((_, i) => (
          <div 
            key={i}
            className="loader-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>
      
      {/* Shooting stars */}
      <div className="shooting-stars-loader">
        <div className="shooting-star-loader" style={{ top: '15%', animationDelay: '0s' }}></div>
        <div className="shooting-star-loader" style={{ top: '45%', animationDelay: '2.5s' }}></div>
        <div className="shooting-star-loader" style={{ top: '75%', animationDelay: '5s' }}></div>
      </div>
      
      {/* Nebula clouds */}
      <div className="loader-nebula loader-nebula-1"></div>
      <div className="loader-nebula loader-nebula-2"></div>
      
      {/* Geometric neon decorations */}
      <div className="loader-decorations">
        {/* Neon Star */}
        <svg className="loader-decor loader-decor-1" viewBox="0 0 100 100">
          <defs>
            <filter id="loaderGlow1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,5 61,40 95,40 68,62 79,95 50,75 21,95 32,62 5,40 39,40" fill="none" stroke="#ffffff" strokeWidth="1.5" filter="url(#loaderGlow1)" opacity="0.8"/>
        </svg>
        
        {/* Purple Triangle */}
        <svg className="loader-decor loader-decor-2" viewBox="0 0 100 100">
          <defs>
            <filter id="loaderGlow2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,15 85,85 15,85" fill="none" stroke="#a78bfa" strokeWidth="2" filter="url(#loaderGlow2)" />
        </svg>
        
        {/* Diamond */}
        <svg className="loader-decor loader-decor-3" viewBox="0 0 100 100">
          <defs>
            <filter id="loaderGlow3" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#9d4edd" strokeWidth="2" filter="url(#loaderGlow3)" />
        </svg>
        
        {/* Cross */}
        <svg className="loader-decor loader-decor-4" viewBox="0 0 100 100">
          <defs>
            <filter id="loaderGlow4" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <line x1="50" y1="20" x2="50" y2="80" stroke="#c4b5fd" strokeWidth="2" filter="url(#loaderGlow4)" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="#c4b5fd" strokeWidth="2" filter="url(#loaderGlow4)" />
        </svg>
        
        {/* Hexagon */}
        <svg className="loader-decor loader-decor-5" viewBox="0 0 100 100">
          <defs>
            <filter id="loaderGlow5" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="#8b5cf6" strokeWidth="2" filter="url(#loaderGlow5)" />
        </svg>
        
        {/* Small Star */}
        <svg className="loader-decor loader-decor-6" viewBox="0 0 100 100">
          <defs>
            <filter id="loaderGlow6" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,20 56,44 80,44 60,58 68,82 50,68 32,82 40,58 20,44 44,44" fill="none" stroke="#7dd3fc" strokeWidth="1.5" filter="url(#loaderGlow6)" />
        </svg>
        
        {/* Circle Ring */}
        <svg className="loader-decor loader-decor-7" viewBox="0 0 100 100">
          <defs>
            <filter id="loaderGlow7" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="15" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#loaderGlow7)" />
        </svg>
        
        {/* White Dot */}
        <svg className="loader-decor loader-decor-8" viewBox="0 0 100 100">
          <defs>
            <filter id="loaderGlow8" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="6" fill="#ffffff" filter="url(#loaderGlow8)" />
        </svg>
        
        {/* Orbit ellipse */}
        <svg className="loader-decor loader-decor-9" viewBox="0 0 100 100">
          <defs>
            <filter id="loaderGlow9" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <ellipse cx="50" cy="50" rx="30" ry="12" fill="none" stroke="#a78bfa" strokeWidth="1" filter="url(#loaderGlow9)" opacity="0.7"/>
        </svg>
        
        {/* Small triangle */}
        <svg className="loader-decor loader-decor-10" viewBox="0 0 100 100">
          <defs>
            <filter id="loaderGlow10" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,20 80,75 20,75" fill="none" stroke="#e0e7ff" strokeWidth="1.5" filter="url(#loaderGlow10)" />
        </svg>
      </div>
      
      {/* Meteors */}
      <div className="meteors-container">
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-4"></div>
        <div className="meteor meteor-5"></div>
      </div>
      
      {/* Center content */}
      <div className="loader-center">
        {/* Percentage display */}
        <div className="loader-percentage">
          <span className="percentage-number">{percentage}</span>
          <span className="percentage-symbol">%</span>
        </div>
        <p className="loader-text">Loading</p>
        
        {/* Progress bar */}
        <div className="loader-progress">
          <div className="loader-progress-bar" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
