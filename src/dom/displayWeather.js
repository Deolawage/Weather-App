//displayWeather.js
//	Coordinates the other display modules

import { displayCurrentWeather } from "./displayCurrentWeather.js";
import { displayWeatherDetails } from "./displayWeatherDetails.js";
import { displaySunTimes } from "./displaySunTime.js";
import { displayForecast } from "./displayForecast.js";

export function displayWeather(weatherInfo, currentUnit) {
   displayCurrentWeather(weatherInfo, currentUnit);

    displayWeatherDetails(weatherInfo, currentUnit);

    displaySunTimes(weatherInfo);

    displayForecast(weatherInfo.forecast, currentUnit);
}