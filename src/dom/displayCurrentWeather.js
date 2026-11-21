//displayCurrentWeather.js


import {
    celsiusToFahrenheit
} from "../logic/temperature.js";

export function displayCurrentWeather(weatherData, currentUnit) {

    const location = document.querySelector(".location");
    const temperatureElement = document.querySelector(".temperature");
    const condition = document.querySelector(".condition");
    const feelsLikeElement = document.querySelector(".feels-like");
    const weatherIcon = document.querySelector(".weather-icon");

    // Convert temperatures when Fahrenheit is selected
    const temperature = currentUnit === "F"
        ? celsiusToFahrenheit(weatherData.temperature)
        : weatherData.temperature;

    const feelsLike = currentUnit === "F"
        ? celsiusToFahrenheit(weatherData.feelsLike)
        : weatherData.feelsLike;

    // Determine temperature symbol
    const unitSymbol = currentUnit === "F" ? "°F" : "°C";

    // Update DOM
    location.textContent = weatherData.location;
    temperatureElement.textContent = `${temperature.toFixed(1)} ${unitSymbol}`;
    condition.textContent = weatherData.conditions;
    feelsLikeElement.textContent = `Feels like ${feelsLike.toFixed(1)} ${unitSymbol}`;

    weatherIcon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${weatherData.icon}.png`;

    weatherIcon.alt = weatherData.conditions;
}
