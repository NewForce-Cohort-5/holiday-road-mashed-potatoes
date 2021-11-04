export const forecast = (eachDay) => {
    return `
    <section class="forecast">
        <div class="singleDay">
            ${new Date(eachDay.dt).toLocaleDateString('en-US')}<br>
            ${Math.round(eachDay.feels_like.day)}&#186F Daytime<br>
            ${Math.round(eachDay.feels_like.eve)}&#186F Nighttime<br>
            ${eachDay.pop*100}% chance of precipitation<br>
            ${Math.round(eachDay.wind_speed)}mph winds
        </div>
    </section>`
}

// new Date(dateThing).toLocalDateString('en-US')
// 11/3/2021
// dateThing = 789102345678910 * 1000
