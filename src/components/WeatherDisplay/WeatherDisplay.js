import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para obter a localização do usuário
    const getUserLocation = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const { city } = response.data;
        fetchWeather(city);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getUserLocation();
  }, []);

  const fetchWeather = city => {
    const apiKey = '7113d500005c402565c5057cfd518400';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    axios.get(url)
      .then(response => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Clima em Sua Localização</h1>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          weatherData.main && (
            <div>
              <h2 className="text-xl mb-2">{weatherData.name}</h2>
              <p className="text-lg">Temperatura: {weatherData.main.temp.toFixed(1)}°C</p>
              <p className="text-lg">Clima: {weatherData.weather[0].description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Weather;
