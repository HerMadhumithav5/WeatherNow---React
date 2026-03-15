// components/BackgroundWithParticles.jsx
import React from 'react';

const BackgroundWithParticles = ({ image, opacity = "70" }) => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    width: Math.floor(Math.random() * 6) + 2,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.floor(Math.random() * 15) + 10,
  }));

  return (
    <div className="fixed inset-0 -z-10">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`absolute inset-0 bg-black/${opacity}`}></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-yellow-400/30 rounded-full animate-float-particle"
            style={{
              width: `${particle.width}px`,
              height: `${particle.width}px`,
              left: `${particle.left}%`,
              bottom: '-20px',
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              boxShadow: '0 0 10px rgba(234, 179, 8, 0.3)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundWithParticles;