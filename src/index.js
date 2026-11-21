//Index.js

import "./style.css";
import { displayWeather } from "./dom/displayWeather.js";

const mockWeatherData = {
    location: "Lagos, Nigeria",
    temperature: 30,
    conditions: "Partially cloudy",
    feelsLike: 33,
    humidity: 75,
    windSpeed: 15,
    visibility: 10,
    icon: "partly-cloudy-day",
    sunrise: "06:35:00",
    sunset: "18:25:00",

    forecast: [
        {
            datetime: "2026-11-20",
            conditions: "Partially cloudy",
            icon: "partly-cloudy-day",
            maxTemperature: 32,
            minTemperature: 25
        },
        {
            datetime: "2026-11-21",
            conditions: "Clear",
            icon: "clear-day",
            maxTemperature: 33,
            minTemperature: 26
        },
        {
            datetime: "2026-11-22",
            conditions: "Rain",
            icon: "rain",
            maxTemperature: 29,
            minTemperature: 24
        },
        {
            datetime: "2026-11-23",
            conditions: "Overcast",
            icon: "cloudy",
            maxTemperature: 28,
            minTemperature: 23
        }
    ]
};

displayWeather(mockWeatherData);