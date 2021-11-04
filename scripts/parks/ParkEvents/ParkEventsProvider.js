import { settings } from '../../Settings.js';

let parkEvents = [];

export const useParkEvents = () => {
  return parkEvents.slice();
}

export const getParkEvents = () => {
  return fetch(`https://developer.nps.gov/api/v1/events?api_key=${settings.npsKey}`)
  .then(res => res.json())
  .then(res => parks = res.data);
}