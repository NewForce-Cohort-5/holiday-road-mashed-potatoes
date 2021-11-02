import { getParks, useParks } from "./ParkProvider.js";
import { Park } from "./Park.js";
import { fiveDay } from "../weather/WeatherProvider.js";

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
        parks.map(park => `<option value="${park.id}">${park.fullName}</option>`)
      }
    </select>
  `;
}

document.querySelector('body').addEventListener('change', e => {
  if (e.target.id === 'parkFilter') {
    const selected = useParks().find( park => park.id === e.target.value );
    parkLatLong['lat'] = selected.latitude;
    parkLatLong['lon'] = selected.longitude;
    document.querySelector('.parkEntry').innerHTML = Park(selected);
    fiveDay(parkLatLong);
  }
});