import { saveItinerary } from "./ItinerarySaveProvider.js";
import { itineraryList } from "./ItinerarySaveList.js";

const contentAccuracy = document.querySelector(".itineraryFormContainer")

document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItinerary") {
        
        const newItinerary = {
            
            date: document.querySelector("#date").value,
            concept: document.querySelector("#concept").value,
            entry: document.querySelector("#entry").value,
            mood: document.querySelector("#mood").value,
        }
        console.log(newItinerary)
        
        document.querySelector("#date").value = ""
        document.querySelector("#concept").value = ""
        document.querySelector("#entry").value = ""
        document.querySelector("#mood").value = ""
        saveItinerary(newItinerary)
        .then(itineraryList)
    }
})