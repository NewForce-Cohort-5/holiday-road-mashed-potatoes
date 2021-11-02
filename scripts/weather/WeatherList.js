import { weatherData, fiveDay } from "./WeatherProvider.js";
import { forecast } from "./WeatherCard.js";


const weatherTarget = document.querySelector("")

export const weatherList = () => {
    weatherData()
    .then(() => {
        let forecastArray = fiveDay()
        let weatherHTML = ""
        forecastArray.forEach((singleWeatherObj) => {
            weatherHTML += forecast(singleWeatherObj)
        })
        weatherTarget.innerHTML = weatherHTML
    })
}