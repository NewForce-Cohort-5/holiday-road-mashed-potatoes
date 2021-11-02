import { settings } from "../Settings.js"

console.log(settings)
let weather = []

export const weatherData = () => {
    return weather.slice()
}

export const fiveDay = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=37.5858662&lon=-85.67330523&appid=${settings.weatherKey}`)
    .then (weatherResponse => weatherResponse.json())
    .then (weatherReceipt => {
        console.table(weatherReceipt)
        weather = weatherReceipt
    })
}

// api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
