// import { settings } from "../Settings.js"

// console.log(settings)
// let weather = []

// export const weatherData = () => {
//     return weather.slice()
// }

export const fiveDay = (park) => {
    return fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${park.lat}&lon=${park.lon}&exclude=alerts,hourly,minutely,current&units=imperial&appid=${settings.weatherKey}`)
    .then (weatherResponse => weatherResponse.json())
    .then (weatherReceipt => {
        console.table(weatherReceipt)
        weather = weatherReceipt
    })
}

// Unmolested fetch URLs:
// api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
