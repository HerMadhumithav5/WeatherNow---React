// components/Footer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#080d1a] text-gray-300 py-8 border-t border-yellow-600/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">WeatherNow</h3>
            <p className="text-sm text-gray-400">
              AI-powered weather intelligence for the modern world.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate('/')} className="hover:text-yellow-400 transition-colors">Home</button></li>
              <li><button onClick={() => navigate('/search')} className="hover:text-yellow-400 transition-colors">Search</button></li>
              <li><button onClick={() => navigate('/forecast')} className="hover:text-yellow-400 transition-colors">Forecast</button></li>
              <li><button onClick={() => navigate('/about')} className="hover:text-yellow-400 transition-colors">About</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>support@weathernow.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-700">
          <p>© 2024 WeatherNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;