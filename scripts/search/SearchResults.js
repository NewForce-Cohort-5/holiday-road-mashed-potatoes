import { useAttractions } from "../attractions/AttractionProvider.js";
import { useEatery } from "../eateries/EateryDataProvider.js";
import { useItinerary, getItinerary } from "../ItinerarySave/ItinerarySaveProvider.js";
import { useParks } from "../parks/ParkProvider.js";


window.onload = () => {
  document.getElementById('search-bar').addEventListener('search', e => {
    
    if (e.target.value !== '') {

      const query = e.target.value;

      getItinerary().then(() => {
        const allParks = useParks();
        const allAttractions = useAttractions();
        const allEateries = useEatery();
        const allItineraries = useItinerary();
        
        let results = [];
        let resultsHTML = '';
  
        // Filter through all of the data arrays and match the query string to the data's name
        // Add ALL of those results to the results array
        results.push(
          allParks.filter(park => park.fullName.toLowerCase().includes(query)),
          allAttractions.filter(attraction => attraction.name.toLowerCase().includes(query)),
          allEateries.filter(eatery => eatery.businessName.toLowerCase().includes(query)),
          // Also search through the names of all itinerary properties
          allItineraries.filter(itinerary => itinerary.Park.toLowerCase().includes(query) || itinerary.Bizarre.toLowerCase().includes(query) || itinerary.Eatery.toLowerCase().includes(query))
        );

        // 
        results = results.flat();

        resultsHTML = ''

        results = results.map(currentResult => {

          let name = '';
          let type = '';
          let addButton = `<button id="add-${currentResult.id}" class="col btn btn-success">Add To Itinerary Preview</button>`;

          if (currentResult.fullName) {
            name = currentResult.fullName;
            type = 'Park';
          } else if (currentResult.name) {
            name = currentResult.name;
            type = 'Attraction';
          } else if (currentResult.businessName) {
            name = currentResult.businessName;
            type = 'Eatery';
          } else if (currentResult.Park) {
            name = currentResult.Park;
            type = 'Itinerary';
            addButton = '';
          }

          resultsHTML += `
            <div class="row mb-4">
              <h4 class="col">${type}: ${name}</h4>
              ${addButton}
            </div>
          `;

        });
        document.querySelector('#search-results').innerHTML = resultsHTML;
      });
    }
  });

  document.getElementById('search-results').addEventListener('click', e => {
    if (e.target.id.startsWith('add')) {

      // When user clicks a button from the search results to add to itinerary
      // extract the type of data that will affect the UI (eg. park, attraction, eatery)
      // also get the name of the data selected (eg. Yellowstone National Park)
      const type = e.target.previousElementSibling.innerText.split(': ')[0].toLowerCase();
      const name = e.target.previousElementSibling.innerText.split(': ')[1];

      // The type depends on the type of selector to trigger the appropriate select
      const select = document.querySelector(`select[id^=${type}]`);
      // Get that select's options
      const options = select.options;

      // Create an event that will dispatch the appropriate event handler based on data type
      const event = new Event('change', {'bubbles': true, 'cancelable': false, 'composed': true});

      // Create an array from the select's options and find the one that the user clicked on
      // 
      Array.from(options).find(option => option.value === name).selected = true;

      select.dispatchEvent(event);
      
    }
  });
}