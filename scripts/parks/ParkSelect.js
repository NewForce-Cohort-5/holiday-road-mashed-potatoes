import { getParks, useParks } from "./ParkProvider.js";
import { Park } from "./Park.js";
import { fetchWeather, weatherData } from "../weather/WeatherProvider.js";
import { forecast } from "../weather/WeatherCard.js";

const contentTarget = document.querySelector('.parksDropdown');

let parkLatLong = {};

export const ParkSelect = () => {
  getParks().then(() => {
    const allParks = useParks();
    contentTarget.innerHTML = render(allParks);
  });
}

const render = (parks) => {
  return `
    <select id="parkFilter">
      <option value="0">Please select a park</option>
      ${
        parks.map(park => `<option>${park.fullName}</option>`)
      }
    </select>
  `;
}
// This section populates Latitude and Longitude for the weather API
document.querySelector('body').addEventListener('change', e => {
  if (e.target.id === 'parkFilter') {
    const selected = useParks().find( park => park.fullName === e.target.value );
    parkLatLong['lat'] = selected.latitude;
    parkLatLong['lon'] = selected.longitude;
    document.querySelector('.parkEntry').innerHTML = Park(selected);
    fetchWeather(parkLatLong).then(() => {
      let forecastHTML = '';
      const forecastData = weatherData();
      forecastData.forEach((daily, i) => {
        if (i < 5) forecastHTML += forecast(daily);
      });
      document.querySelector('.weather').innerHTML = forecastHTML;
    });
    
  }
});