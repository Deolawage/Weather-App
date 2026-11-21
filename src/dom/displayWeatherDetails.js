//displayWeatherDetails.js
//	Feels-like temperature, humidity, wind speed and visibility

import { celsiusToFahrenheit } from "../logic/temperature.js";

export function displayWeatherDetails(weatherData, currentUnit){

    const feelsLike = document.querySelector(".feels-like-value");
    

    const humidity = document.querySelector(".humidity-value");

    const windSpeed = document.querySelector(".windspeed-value");

    const visibility = document.querySelector(".visibility-value");

     const feelsLikeTemp = currentUnit === "F"
        ? celsiusToFahrenheit(weatherData.feelsLike)
        : weatherData.feelsLike;

    const unitSymbol = currentUnit === "F" ? "°F" : "°C";

   feelsLike.textContent = `${feelsLikeTemp.toFixed(1)} ${unitSymbol}`;
    humidity.textContent = `${weatherData.humidity}%`;
    windSpeed.textContent = `${weatherData.windSpeed} km/h`;
    visibility.textContent = `${weatherData.visibility} km`;

    console.log({
    feelsLike,
    humidity,
    windSpeed,
    visibility
});

}


