// pages/Forecast.jsx
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import homeImg from '../assets/sunset_wallpaper.jpg';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';
import ForecastHeader from '../components/forecast/ForeCastHeader';
import CurrentWeatherCard from '../components/forecast/CurrentWeatherCard';
import ForecastCard from '../components/forecast/ForecastCard';
import AirQualityCard from '../components/forecast/AirQualityCard';
import SunMoonCard from '../components/forecast/SunMoonCard';
import PollenCard from '../components/forecast/PollenCard';

export default function Forecast() {
  const location = useLocation();
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = "ff70e014fd5bf8db435999978d1143bc";

  // Get city from URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cityParam = params.get('city');
    
    if (cityParam) {
      const decodedCity = decodeURIComponent(cityParam);
      setCity(decodedCity);
    } else {
      setCity("Chennai");
    }
  }, [location.search]);

  // Fetch weather data when city changes
  useEffect(() => {
    if (city) {
      fetchForecastData(city);
    }
  }, [city]);

  const fetchForecastData = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      if (!currentRes.ok) {
        if (currentRes.status === 404) {
          throw new Error(`City "${cityName}" not found`);
        } else {
          throw new Error("Server error. Please try again later.");
        }
      }

      const currentData = await currentRes.json();

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      if (!forecastRes.ok) {
        throw new Error("Forecast data not available");
      }

      const forecastData = await forecastRes.json();

      setCurrentWeather({
        city: currentData.name,
        temp: Math.round(currentData.main.temp),
        feelsLike: Math.round(currentData.main.feels_like),
        condition: currentData.weather[0].main,
        description: currentData.weather[0].description,
        icon: currentData.weather[0].icon,
        humidity: currentData.main.humidity,
        wind: currentData.wind.speed,
        pressure: currentData.main.pressure,
        uvIndex: 5,
      });

      const dailyForecast = processDailyForecast(forecastData.list);
      setForecast(dailyForecast);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const processDailyForecast = (list) => {
    const daily = [];
    
    const groupedByDay = list.reduce((acc, item) => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    }, {});

    let dayIndex = 0;
    for (const date in groupedByDay) {
      if (dayIndex < 5) {
        const dayData = groupedByDay[date];
        const middayForecast = dayData.find(item => {
          const hour = new Date(item.dt * 1000).getHours();
          return hour >= 11 && hour <= 13;
        }) || dayData[0];

        const forecastDate = new Date(middayForecast.dt * 1000);
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        daily.push({
          day: dayNames[forecastDate.getDay()],
          date: `${monthNames[forecastDate.getMonth()]} ${forecastDate.getDate()}`,
          temp: Math.round(middayForecast.main.temp),
          high: Math.round(middayForecast.main.temp_max),
          low: Math.round(middayForecast.main.temp_min),
          condition: middayForecast.weather[0].main,
          icon: middayForecast.weather[0].icon,
          humidity: middayForecast.main.humidity,
          wind: middayForecast.wind.speed,
        });
        dayIndex++;
      }
    }

    return daily;
  };

  const formatDate = () => {
    const now = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return `${dayNames[now.getDay()]}, ${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <LoadingSpinner message={`Loading forecast data for ${city}...`} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center px-4">
        <ErrorDisplay message={error} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-40 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={homeImg} 
            alt="Cloud background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="bg-yellow-400 text-gray-900 text-xs px-3 py-1 rounded-full inline-block mb-4 font-semibold">
            5-DAY FORECAST
          </span>
          <h1 className="text-5xl font-light tracking-tight mb-2">
            Weather —
          </h1>
          <h2 className="text-6xl font-bold text-yellow-400 mb-4">
            {currentWeather?.city}
          </h2>
          <p className="text-gray-200 text-xl max-w-2xl">
            {formatDate()} • Updated now
          </p>
        </div>

        {/* Slanted Divider */}
        <div className="absolute -bottom-16 left-0 w-full h-32 bg-white transform -skew-y-3"></div>
      </section>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-4 md:px-6 lg:px-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-gray-600 hover:text-yellow-500 transition-colors mb-6"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>

          <CurrentWeatherCard weather={currentWeather} />

          {/* 5-Day Forecast Row - Changed text to black */}
          <h2 className="text-2xl font-bold text-black mb-4">5-Day Forecast</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {forecast.map((day, index) => (
              <ForecastCard key={index} day={day} />
            ))}
          </div>

          {/* Detail Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AirQualityCard />
            <SunMoonCard />
            <PollenCard />
          </div>
        </div>
      </div>
    </div>
  );
}