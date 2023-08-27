import React from "react";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";

function Info() {
  return (
    <div className="min-h-screen bg-[rgb(27,27,27)]">
      <div className="flex justify-center items-center h-full bg-[rgb(27,27,27)]"></div>
      <WeatherDisplay />
    </div>
  );
}

export default Info;
