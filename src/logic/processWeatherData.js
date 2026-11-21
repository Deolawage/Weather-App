import { getWeatherData } from "../api/weatherAPI.js";

export async function processWeatherData(location) {
    try {
        const data = await getWeatherData(location);

        const { resolvedAddress } = data;

        const {
            temp,
            feelslike,
            conditions,
            humidity,
            windspeed,
            visibility,
            icon,
        } = data.currentConditions;

        const { sunrise, sunset, tempmax, tempmin } = data.days[0];

        // Process daily forecast
        const forecast = data.days.map((day) => ({
            datetime: day.datetime,
            conditions: day.conditions,
            icon: day.icon,
            maxTemperature: day.tempmax,
            minTemperature: day.tempmin
        }));

        const weatherInfo = {
            location: resolvedAddress,
            temperature: temp,
            feelsLike: feelslike,
            conditions,
            humidity,
            windSpeed: windspeed,
            visibility,
            icon,
            sunrise,
            sunset,
            maxTemperature: tempmax,
            minTemperature: tempmin,
            forecast
        };

        return weatherInfo;

    } catch (error) {
        console.error(error);
        throw error;
    }
}