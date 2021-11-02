import { bizarreCard } from './AttractionsCard.js'
import { getAttractions, useAttractions } from './AttractionProvider.js'

const contentTarget = document.querySelector(".attractionsList")

export const attractionSelect = (attractionsFilter) => {
    let attractionsListContainer = document.querySelector(".attractionsList");
    attractionsListContainer.innerHTML = "";
    
    getAttractions()
    .then(() => {
        let attractionsArray = useAttractions();
        let attractionHTML = "";

        if(attractionsFilter){
            attractionsArray = attractionsArray.filter(singleAttractionInLoop => {
                return singleAttractionInLoop.bizarreriesname === attractionsFilter
            })
        }

        attractionsArray.forEach((attractionsObject) => {
            attractionHTML += bizarreCard(attractionsObject)
        })

        contentTarget.innerHTML = `<h2>Attractions</h2>
        <div class="attractionsList">${attractionHTML}</div>
        `
    })
}


