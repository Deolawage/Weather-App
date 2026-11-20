//displayCurrentWeather.js

export function displayCurrentWeather(weatherData) {
    const location = document.querySelector(".location");
    const temperature = document.querySelector(".temperature");
    const condition = document.querySelector(".condition");
    const feelsLike = document.querySelector(".feels-like");
    const weatherIcon = document.querySelector(".weather-icon");

    location.textContent = weatherData.location;
    temperature.textContent = `${weatherData.temperature} °C`;
    condition.textContent = weatherData.conditions;
    feelsLike.textContent = `Feels like ${weatherData.feelsLike} °C`;

    weatherIcon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${weatherData.icon}.png`;
    weatherIcon.alt = weatherData.conditions;
}

