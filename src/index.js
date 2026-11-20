//Index.js

import "./style.css";
import { getWeatherData } from "./api/weatherAPI.js";

import { processWeatherData } from "./logic/processWeatherData.js";

import { displayForecast } from "./dom/displayForecast.js";


import { displayCurrentWeather } from "./dom/displayCurrentWeather.js";

const mockWeatherData = {
    location: "Lagos, Nigeria",
    temperature: 30,
    conditions: "Partially cloudy",
    feelsLike: 33,
    icon: "partly-cloudy-day"
};

displayCurrentWeather(mockWeatherData);