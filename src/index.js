//Index.js

import "./style.css";
import { getWeatherData } from "./api/weatherAPI.js";
import { processWeatherData } from "./logic/processWeatherData.js";

getWeatherData(location)
 .catch((error)=>{
    console.error("What the Fuck", error.message);
 });



 processWeatherData('Lagos, Nigeria')
  .then((weatherInfo) => {
    console.log(weatherInfo);
  })
  .catch((error) => {
    console.error('Testing failed:', error.message);
  });