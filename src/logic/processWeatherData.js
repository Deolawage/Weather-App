//processWeatherData.js

import { getWeatherData } from "../api/weatherAPI.js";

export async function processWeatherData(location) {
const data = await getWeatherData(location);

const {resolvedAddress} = data;

const {
  temp,
  feelslike,
  conditions,
  humidity,
  windspeed,
  icon,
} = data.currentConditions;


const { sunrise, sunset, tempmax, tempmin } = data.days[0];

const weatherInfo = {
    location: resolvedAddress,
    temperature: temp,
    feelsLike: feelslike,
    conditions,
    humidity,
    windSpeed: windspeed,
    icon,
    sunrise,
    sunset,
    maxTemperature: tempmax,
    minTemperature: tempmin,

}

return weatherInfo;
}

