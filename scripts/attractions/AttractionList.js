import { bizarreCard } from './AttractionsCard.js'
import { getAttractions, useAttractions } from './AttractionProvider.js'



const contentTarget = document.querySelector(".bizarre-form-container")

export const AttractionsList = () => {
    getAttractions()
    .then(() => {

        let allTheAttractions = useAttractions();

        let AttractionHTML = "";

        allTheAttractions.forEach((singleAttraction) => {

            AttractionHTML += bizarreCard(singleAttraction);

        });
       
        contentTarget.innerHTML += AttractionHTML
    
    });
};
