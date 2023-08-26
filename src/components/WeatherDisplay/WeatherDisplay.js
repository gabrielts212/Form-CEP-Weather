// components/WeatherDisplay.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherDisplay({ latitude, longitude }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const apiKey = '7113d500005c402565c5057cfd518400';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`;
        const response = await axios.get(url);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao obter dados do clima:', error);
        setLoading(false);
      }
    }

    fetchWeather();
  }, [latitude, longitude]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{weatherData.name}</h2>
      <p className="text-lg">{weatherData.main.temp}°C</p>
      <p className="text-gray-600">{weatherData.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;
