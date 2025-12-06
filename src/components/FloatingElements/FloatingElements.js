import React, { useEffect, useState } from 'react';
import './FloatingElements.css';

const FloatingElements = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars across the full page height (500vh)
    const newStars = [];
    for (let i = 0; i < 350; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100, // Will be distributed across 500vh
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="floating-container">
      {/* Stars */}
      <div className="stars-layer">
        {stars.map((star) => (
          <div
            key={star.id}
            className="floating-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula clouds - distributed across page */}
      <div className="nebula-layer">
        <div className="floating-nebula floating-nebula-1"></div>
        <div className="floating-nebula floating-nebula-2"></div>
        <div className="floating-nebula floating-nebula-3"></div>
        <div className="floating-nebula floating-nebula-4"></div>
        <div className="floating-nebula floating-nebula-5"></div>
        <div className="floating-nebula floating-nebula-6"></div>
        <div className="floating-nebula floating-nebula-7"></div>
        <div className="floating-nebula floating-nebula-8"></div>
        <div className="floating-nebula floating-nebula-9"></div>
        <div className="floating-nebula floating-nebula-10"></div>
      </div>

      {/* Geometric decorations - same as WelcomeAnimation */}
      <div className="decorations-layer">
        {/* White Neon Star */}
        <svg className="floating-decor decor-1" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,5 61,40 95,40 68,62 79,95 50,75 21,95 32,62 5,40 39,40" fill="none" stroke="#ffffff" strokeWidth="1.5" filter="url(#floatGlow1)" opacity="0.9"/>
        </svg>
        
        {/* Purple Triangle */}
        <svg className="floating-decor decor-2" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,15 85,85 15,85" fill="none" stroke="#a78bfa" strokeWidth="2" filter="url(#floatGlow2)" />
        </svg>
        
        {/* Cold Blue Circle */}
        <svg className="floating-decor decor-3" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow3" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="15" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#floatGlow3)" />
          <circle cx="50" cy="50" r="8" fill="none" stroke="#93c5fd" strokeWidth="1" opacity="0.6" />
        </svg>
        
        {/* White Neon Dot */}
        <svg className="floating-decor decor-4" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow4" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="6" fill="#ffffff" filter="url(#floatGlow4)" />
        </svg>
        
        {/* Purple Diamond */}
        <svg className="floating-decor decor-5" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow5" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#9d4edd" strokeWidth="2" filter="url(#floatGlow5)" />
        </svg>
        
        {/* Cold White Ring */}
        <svg className="floating-decor decor-6" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow6" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="18" fill="none" stroke="#e0e7ff" strokeWidth="1.5" filter="url(#floatGlow6)" opacity="0.8"/>
        </svg>
        
        {/* Ice Blue Star */}
        <svg className="floating-decor decor-7" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow7" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,20 56,44 80,44 60,58 68,82 50,68 32,82 40,58 20,44 44,44" fill="none" stroke="#7dd3fc" strokeWidth="1.5" filter="url(#floatGlow7)" />
        </svg>
        
        {/* Hexagon */}
        <svg className="floating-decor decor-8" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow8" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="#8b5cf6" strokeWidth="2" filter="url(#floatGlow8)" />
        </svg>
        
        {/* Cross */}
        <svg className="floating-decor decor-9" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow9" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <line x1="50" y1="20" x2="50" y2="80" stroke="#c4b5fd" strokeWidth="2" filter="url(#floatGlow9)" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="#c4b5fd" strokeWidth="2" filter="url(#floatGlow9)" />
        </svg>
        
        {/* Orbit Ring */}
        <svg className="floating-decor decor-10" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow10" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <ellipse cx="50" cy="50" rx="30" ry="12" fill="none" stroke="#a78bfa" strokeWidth="1" filter="url(#floatGlow10)" opacity="0.7"/>
        </svg>

        {/* Additional decorations for middle and bottom of page */}
        {/* White Star - middle */}
        <svg className="floating-decor decor-11" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow11" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,5 61,40 95,40 68,62 79,95 50,75 21,95 32,62 5,40 39,40" fill="none" stroke="#ffffff" strokeWidth="1.5" filter="url(#floatGlow11)" opacity="0.9"/>
        </svg>
        
        {/* Purple Triangle - middle */}
        <svg className="floating-decor decor-12" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow12" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,15 85,85 15,85" fill="none" stroke="#a78bfa" strokeWidth="2" filter="url(#floatGlow12)" />
        </svg>
        
        {/* Blue Circle - middle */}
        <svg className="floating-decor decor-13" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow13" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="15" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#floatGlow13)" />
        </svg>
        
        {/* Diamond - middle */}
        <svg className="floating-decor decor-14" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow14" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#9d4edd" strokeWidth="2" filter="url(#floatGlow14)" />
        </svg>
        
        {/* Hexagon - bottom */}
        <svg className="floating-decor decor-15" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow15" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="#8b5cf6" strokeWidth="2" filter="url(#floatGlow15)" />
        </svg>
        
        {/* Star - bottom */}
        <svg className="floating-decor decor-16" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow16" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,20 56,44 80,44 60,58 68,82 50,68 32,82 40,58 20,44 44,44" fill="none" stroke="#7dd3fc" strokeWidth="1.5" filter="url(#floatGlow16)" />
        </svg>
        
        {/* Ring - bottom */}
        <svg className="floating-decor decor-17" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow17" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="18" fill="none" stroke="#e0e7ff" strokeWidth="1.5" filter="url(#floatGlow17)" opacity="0.8"/>
        </svg>
        
        {/* Dot - bottom */}
        <svg className="floating-decor decor-18" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow18" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="6" fill="#ffffff" filter="url(#floatGlow18)" />
        </svg>
        
        {/* Cross - bottom */}
        <svg className="floating-decor decor-19" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow19" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <line x1="50" y1="20" x2="50" y2="80" stroke="#c4b5fd" strokeWidth="2" filter="url(#floatGlow19)" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="#c4b5fd" strokeWidth="2" filter="url(#floatGlow19)" />
        </svg>
        
        {/* Orbit - bottom */}
        <svg className="floating-decor decor-20" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow20" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <ellipse cx="50" cy="50" rx="30" ry="12" fill="none" stroke="#a78bfa" strokeWidth="1" filter="url(#floatGlow20)" opacity="0.7"/>
        </svg>
        
        {/* Extra decorations for certificates and footer sections */}
        {/* Triangle */}
        <svg className="floating-decor decor-21" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow21" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,15 85,85 15,85" fill="none" stroke="#a78bfa" strokeWidth="2" filter="url(#floatGlow21)" />
        </svg>
        
        {/* Diamond */}
        <svg className="floating-decor decor-22" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow22" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#floatGlow22)" />
        </svg>
        
        {/* Circle */}
        <svg className="floating-decor decor-23" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow23" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="15" fill="none" stroke="#9d4edd" strokeWidth="2" filter="url(#floatGlow23)" />
        </svg>
        
        {/* Star */}
        <svg className="floating-decor decor-24" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow24" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,5 61,40 95,40 68,62 79,95 50,75 21,95 32,62 5,40 39,40" fill="none" stroke="#ffffff" strokeWidth="1.5" filter="url(#floatGlow24)" opacity="0.9"/>
        </svg>
        
        {/* Hexagon */}
        <svg className="floating-decor decor-25" viewBox="0 0 100 100">
          <defs>
            <filter id="floatGlow25" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="#8b5cf6" strokeWidth="2" filter="url(#floatGlow25)" />
        </svg>
      </div>

      {/* Shooting stars - distributed across page */}
      <div className="shooting-stars-layer">
        <div className="floating-shooting-star" style={{ top: '5%', animationDelay: '0s' }}></div>
        <div className="floating-shooting-star" style={{ top: '15%', animationDelay: '4s' }}></div>
        <div className="floating-shooting-star" style={{ top: '30%', animationDelay: '8s' }}></div>
        <div className="floating-shooting-star" style={{ top: '45%', animationDelay: '2s' }}></div>
        <div className="floating-shooting-star" style={{ top: '55%', animationDelay: '12s' }}></div>
        <div className="floating-shooting-star" style={{ top: '60%', animationDelay: '6s' }}></div>
        <div className="floating-shooting-star" style={{ top: '70%', animationDelay: '14s' }}></div>
        <div className="floating-shooting-star" style={{ top: '75%', animationDelay: '10s' }}></div>
        <div className="floating-shooting-star" style={{ top: '85%', animationDelay: '7s' }}></div>
        <div className="floating-shooting-star" style={{ top: '90%', animationDelay: '3s' }}></div>
      </div>
    </div>
  );
};

export default FloatingElements;
