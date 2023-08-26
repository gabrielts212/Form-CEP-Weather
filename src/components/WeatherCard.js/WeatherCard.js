// components/WeatherCard.js
import React from 'react';

function WeatherCard({ city, temperature, description }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{city}</h2>
      <p className="text-lg">{temperature}°C</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default WeatherCard;
