//displaySunTime.js
//Handles Sunrise and Sunset

export function displaySunTimes(weatherData){
    
    const sunRise = document.querySelector(".sunrise-value");

    const sunSet = document.querySelector(".sunset-value");

    sunRise.textContent =`${weatherData.sunrise}`;

    sunSet.textContent = `${weatherData.sunset}`;


}