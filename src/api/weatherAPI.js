//weatherAPi.js

export async function getWeatherData(location){
    const BASE_URL= "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

    const url = `${BASE_URL}${encodeURIComponent(location)}?unitGroup=metric&include=current, days&elements=add:sunrise, add:sunset`;
    
    const response = await fetch(url)

    if(!response.ok){
        throw new Error("What the fuck, get back to work.");
    }

    const data = await response.json();
    console.log(data.days[0]);
    console.log(data.days);
console.log(data.days[0]);
console.log(data);
console.log(data.days[0].sunset);
 
    return data;

}
