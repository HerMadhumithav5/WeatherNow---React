// components/WeatherDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, Droplets, Wind, Thermometer, Gauge } from 'lucide-react';

const WeatherDashboard = () => {
  const navigate = useNavigate();
  
  // Mock data for featured cities
  const featuredCities = [
    { name: 'New York', temp: 18, condition: 'Partly Cloudy', icon: Cloud, high: 22, low: 14 },
    { name: 'London', temp: 12, condition: 'Light Rain', icon: Droplets, high: 15, low: 9 },
    { name: 'Tokyo', temp: 21, condition: 'Sunny', icon: Thermometer, high: 25, low: 18 },
    { name: 'Sydney', temp: 24, condition: 'Clear', icon: Wind, high: 28, low: 20 },
    { name: 'Paris', temp: 15, condition: 'Cloudy', icon: Cloud, high: 18, low: 12 },
    { name: 'Dubai', temp: 32, condition: 'Hot', icon: Thermometer, high: 36, low: 28 }
  ];

  return (
    <section className="bg-[#030712] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Weather around the <span className="text-yellow-400">world</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time weather data for major cities across the globe
          </p>
        </div>

        {/* Featured Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCities.map((city, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/10 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{city.name}</h3>
                  <p className="text-gray-400 text-sm">{city.condition}</p>
                </div>
                <city.icon className="text-yellow-400" size={32} />
              </div>
              
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{city.temp}°</span>
                <span className="text-gray-400 ml-2">C</span>
              </div>
              
              <div className="flex justify-between text-sm text-gray-400">
                <span>H: {city.high}°</span>
                <span>L: {city.low}°</span>
              </div>

              {/* Mini weather details */}
              <div className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-3 gap-2 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Wind size={14} className="text-yellow-400" />
                  <span>12 km/h</span>
                </div>
                <div className="flex items-center gap-1">
                  <Droplets size={14} className="text-yellow-400" />
                  <span>65%</span>
                </div>
                <div className="flex items-center gap-1">
                  <Gauge size={14} className="text-yellow-400" />
                  <span>1012</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Cities Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/search')}
            className="px-8 py-3 rounded-full bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 font-medium"
          >
            View All Cities
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeatherDashboard;