export const forecast = (eachDay) => {
    return `
    <section class="forecast">
        Feels like ${eachDay.feels_like.day} during the day<br>
        Feels like ${eachDay.feels_like.eve} at night<br>
        ${eachDay.pop*100}% chance of precipitation<br>
        ${eachDay.wind_speed} mph winds
    </section>`
}