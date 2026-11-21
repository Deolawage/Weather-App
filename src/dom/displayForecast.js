//displayForecast.js


import { celsiusToFahrenheit } from "../logic/temperature.js";

export function displayForecast(weatherData, currentUnit) {

    const forecastContainer = document.querySelector(".forecast-container");
    forecastContainer.replaceChildren();

    const unitSymbol = currentUnit === "F" ? "°F" : "°C";

    weatherData.forEach((day) => {

        const forecastCard = document.createElement("div");
        forecastCard.classList.add("forecast-card");

        const forecastDay = document.createElement("h3");

        const date = new Date(`${day.datetime}T12:00:00`);

        forecastDay.textContent = date.toLocaleDateString("en-US", {
            weekday: "long"
        });

        forecastDay.classList.add("forecast-day");

        const forecastCond = document.createElement("p");
        forecastCond.classList.add("forecast-condition");
        forecastCond.textContent = day.conditions;

        const forecastIcon = document.createElement("img");
        forecastIcon.classList.add("forecast-icon");

        forecastIcon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${day.icon}.png`;

        forecastIcon.alt = day.conditions;

        // Convert forecast temperatures when Fahrenheit is selected
        const maxTemperature = currentUnit === "F"
            ? celsiusToFahrenheit(day.maxTemperature)
            : day.maxTemperature;

        const minTemperature = currentUnit === "F"
            ? celsiusToFahrenheit(day.minTemperature)
            : day.minTemperature;

        const forecastMaxTemp = document.createElement("p");
        forecastMaxTemp.classList.add("forecast-max-temp");
        forecastMaxTemp.textContent = `High: ${maxTemperature.toFixed(1)} ${unitSymbol}`;

        const forecastMinTemp = document.createElement("p");
        forecastMinTemp.classList.add("forecast-min-temp");
        forecastMinTemp.textContent = `Low: ${minTemperature.toFixed(1)} ${unitSymbol}`;

        forecastCard.append(
            forecastDay,
            forecastIcon,
            forecastCond,
            forecastMaxTemp,
            forecastMinTemp
        );

        forecastContainer.appendChild(forecastCard);
    });
}
