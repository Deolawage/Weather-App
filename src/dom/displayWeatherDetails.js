//displayWeatherDetails.js
//	Feels-like temperature, humidity, wind speed and visibility

export function displayWeatherDetails(weatherData){

    const feelsLike = document.querySelector(".feels-like-value");
    

    const humidity = document.querySelector(".humidity-value");

    const windSpeed = document.querySelector(".windspeed-value");

    const visibility = document.querySelector(".visibility-value");

    feelsLike.textContent = `${weatherData.feelsLike} °C`;
    humidity.textContent = `${weatherData.humidity}%`;
    windSpeed.textContent = `${weatherData.windSpeed} km/h`;
    visibility.textContent = `${weatherData.visibility} km`;

    console.log({
    feelsLike,
    humidity,
    windSpeed,
    visibility
});

}


