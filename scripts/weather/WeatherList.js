import { weatherData, fiveDay } from "./WeatherProvider.js";

const weatherTarget = document.querySelector("")

export const weatherList = () => {
    weatherTarget.innerHTML = ""
    weatherData()
    .then(() => {
        let forecastArray = fiveDay()
        if () {
            
        }
    })
}