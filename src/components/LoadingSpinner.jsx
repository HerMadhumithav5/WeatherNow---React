// components/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = ({ message = "Fetching weather data..." }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-12 text-center border border-white/10">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-16 h-16 border-4 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin mx-auto mb-4"></div>
        
        {/* Inner pulse */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-yellow-400/20 rounded-full animate-ping"></div>
        </div>
      </div>
      <p className="text-gray-300 mt-4">{message}</p>
    </div>
  );
};

export default LoadingSpinner;