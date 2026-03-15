// components/Navbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Search', path: '/search' },
    { name: 'Forecast', path: '/forecast?city=Chennai' },
    { name: 'About', path: '/about' }
  ];

  const openGoogleMaps = () => {
    const lastCity = localStorage.getItem('lastSearchedCity') || 'Chennai';
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(lastCity)}`, '_blank');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-4 md:px-10 py-3.5 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/20 z-50">
        <div 
          className="logo font-bold text-xl cursor-pointer"
          onClick={() => navigate('/')}
        >
          ☁ Weather<span className="text-yellow-400">Now</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 list-none">
          {navItems.map((item) => (
            <li 
              key={item.name}
              className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          {/* ONLY Maps/Location Button - No toggle */}
          <button 
            className="w-9 h-9 rounded-full bg-white/10 text-gray-300 hover:text-yellow-400 hover:bg-white/20 transition-all flex items-center justify-center"
            onClick={openGoogleMaps}
            title="Open in Google Maps"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="w-5 h-0.5 bg-white"></span>
            <span className="w-5 h-0.5 bg-white"></span>
            <span className="w-5 h-0.5 bg-white"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 w-64 h-full bg-[#0b1120] z-50 p-6 shadow-lg md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-400"
            >
              ✕
            </button>
            
            <ul className="mt-12 space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.path);
                      setMobileMenuOpen(false);
                    }}
                    className="text-white hover:text-yellow-400 transition-colors w-full text-left py-2 text-lg"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              {/* Mobile Map Button */}
              <li>
                <button
                  onClick={() => {
                    openGoogleMaps();
                    setMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-yellow-400 transition-colors w-full text-left py-2 text-lg flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Map
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;