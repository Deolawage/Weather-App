//displayForecast.js

export function displayForecast(weatherData){

    const forecastContainer = document.querySelector(".forecast-container");
    forecastContainer.replaceChildren();

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


     const forecastMaxTemp = document.createElement("p");
    forecastMaxTemp.classList.add("forecast-max-temp");
    forecastMaxTemp.textContent = `High: ${day.maxTemperature} °C`;

    const forecastMinTemp = document.createElement("p");
    forecastMinTemp.classList.add("forecast-min-temp");
    forecastMinTemp.textContent = `Low: ${day.minTemperature} °C`;

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