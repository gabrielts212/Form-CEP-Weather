// pages/index.js
import React from 'react';
import Header from '../Header/Header';
import WeatherCard from '../WeatherCard.js/WeatherCard';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import Searchcep from '../Searchcep/searchcep';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex justify-center items-center h-full">
        {/* <WeatherCard
          city="Nome da Cidade"
          temperature={25}
          description="Céu limpo"
        /> */}
      </div>
      {/* <WeatherDisplay /> */}
      {/* <Header /> */}
        <WeatherDisplay />
        {/* <Searchcep/> */}
    </div>
  );
}

export default HomePage;
