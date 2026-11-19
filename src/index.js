//Index.js

import "./style.css";
import { getWeatherData } from "./api/weatherAPI";

getWeatherData(location)
 .catch((error)=>{
    console.error("What the Fuck", error.message);
 });
