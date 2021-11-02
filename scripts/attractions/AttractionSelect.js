import { getAttractions, useAttractions } from './AttractionProvider.js'
import { AttractionsList } from './AttractionList.js'

const contentTarget = document.querySelector(".attractionsList")

export const attractionSelect = (attractionsFilter) => {
    let attractionsListContainer = document.querySelector(".attractionsList");
    attractionsListContainer.innerHTML = ""
    
    getAttractions()
    .then(() => {
        let attractionsArray = useAttractions();
        let attractionHTML = "";

        if(attractionsFilter){
            attractionsArray.filter(singleAttractionInLoop => {
                return singleAttractionInLoop.bizarreriesname === attractionsFilter
            })
        }

        
    })
}





