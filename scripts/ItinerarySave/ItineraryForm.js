import { saveItinerary } from "./ItinerarySaveProvider.js";
import { itineraryList } from "./ItinerarySaveList.js";

const contentAccuracy = document.querySelector(".itineraryFormContainer")

document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItinerary") {
        
        const newItinerary = {
            
            name: document.querySelector("#name").value,
            businessName: document.querySelector("#businessName").value,
            entry: document.querySelector("#fullname").value
        }
        console.log(newItinerary)
        
        document.querySelector("#name").value = ""
        document.querySelector("#businessName").value = ""
        document.querySelector("#entry").value = ""
        document.querySelector("#mood").value = ""
        saveItinerary(newItinerary)
        .then(itineraryList)
    }
})