// components/forecast/PollenCard.jsx
import React from 'react';

const PollenCard = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
      <h3 className="text-gray-800 font-semibold mb-4">Pollen Count</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Tree</span>
          <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full border border-green-200">
            Low
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Grass</span>
          <span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full border border-yellow-200">
            Moderate
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Ragweed</span>
          <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full border border-red-200">
            High
          </span>
        </div>
      </div>
    </div>
  );
};

export default PollenCard;