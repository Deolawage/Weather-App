//weatherAPi.js

export async function getWeatherData(location){
    const BASE_URL= "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

    const url = `${BASE_URL}${encodeURIComponent(location)}?unitGroup=metric&include=current, days&elements=add:sunrise, add:sunset`;
    
    const response = await fetch(url)

    if (!response.ok) {
    throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
    );
}

const data = await response.json();
    
 
    return data;

}
