// components/MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 p-6 shadow-lg md:hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-yellow-600"
        >
          ✕
        </button>
        
        <ul className="mt-12 space-y-4">
          <li>
            <Link
              to="/"
              onClick={onClose}
              className="text-gray-800 hover:text-yellow-600 transition-colors w-full block py-2 text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              onClick={onClose}
              className="text-gray-800 hover:text-yellow-600 transition-colors w-full block py-2 text-lg"
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to="/forecast/Chennai"
              onClick={onClose}
              className="text-gray-800 hover:text-yellow-600 transition-colors w-full block py-2 text-lg"
            >
              Forecast
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;