//pages/index.tsx
"use client";
import React from "react";
import CurrentWeather from "./components/CurrentWeather";
import { CurrentWeather as CurrentWeatherType } from "../models/weather";

const Home: React.FC = () => {
  //placeholder data for testing purposes
  const sampleCurrentWeather: CurrentWeatherType = {
    city: "oslo",
    country: "No",
    temperature: 10,
    description: "clear sky",
    icon: "01d",
  };

  return (
    <div>
      <CurrentWeather currentWeather={sampleCurrentWeather} />
    </div>
  );
};

export default Home;
