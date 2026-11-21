//Index.js

import "./style.css";
import { processWeatherData } from "./logic/processWeatherData.js";
import { displayWeather } from "./dom/displayWeather.js";

import{celsiusToFahrenheit} from "./logic/temperature.js";

import{fahrenheitToCelsius} from "./logic/temperature.js";


let currentUnit = "C";
let currentWeatherInfo = null;

let requestCount = 0;


async function loadWeather(location) {

    requestCount++;


    const currentRequest = requestCount;

        const statusMessage = document.querySelector(".status-message");



    try{


        statusMessage.textContent = "Loading weather data...";

        
        const weatherInfo = await processWeatherData(location);

          if (currentRequest !== requestCount) {
    return;
}
          currentWeatherInfo = weatherInfo;

        displayWeather(weatherInfo, currentUnit);

           statusMessage.textContent = "";

    } catch (error) {


            if (currentRequest !== requestCount) {
    return;
}


        console.error("Weather loading failed", error.message);

           statusMessage.textContent =
            "Unable to load weather data. Please check the location and try again.";

    }

    
    
}

loadWeather("Lagos, Nigeria");

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");


searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const location = searchInput.value.trim();

    if (!location) {
        return;
    }

    loadWeather(location);

    searchInput.value = "";
});

const unitToggle = document.querySelector(".unit-toggle");

unitToggle.addEventListener("click", () => {

    currentUnit = currentUnit === "C" ? "F" : "C";

    if (!currentWeatherInfo) {
        return;
    }

    displayWeather(currentWeatherInfo, currentUnit);
});

console.log(celsiusToFahrenheit(20)); // 68
console.log(fahrenheitToCelsius(68)); // 20

