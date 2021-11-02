export const forecast = (eachDay) => {
    return `
    <section class="forecast">
    Feels like ${eachDay.feels_like.day} during the day
    Feels like ${eachDay.feels_like.eve} at night
    ${eachDay.pop*100}% chance of precipitation
    ${eachDay.wind_speed} mph winds
    </section>`
}