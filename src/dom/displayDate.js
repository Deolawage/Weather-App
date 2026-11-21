//displayDate.js
 


export function displayDate(){

    const dateElement = document.querySelector(".current-date");


const currentDate = new Date();

 const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"

});

 dateElement.textContent = formattedDate;
}