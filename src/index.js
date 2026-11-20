//Index.js

import "./style.css";
import { processWeatherData } from "./logic/processWeatherData.js";


 processWeatherData('Lagos, Nigeria')
  .then((weatherInfo) => {
    console.log(weatherInfo);
  })
  .catch((error) => {
    console.error('Testing failed:', error.message);
  });