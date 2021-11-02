import { getAttractions, useAttractions } from './AttractionProvider.js'
import { AttractionsList } from './AttractionList.js'

const contentTarget = document.querySelector(".filters-attractions")

export const attractionSelect = () => {
    getAttractions()
    .then(() => {
        let attractionArray = useAttractions();
        render(attractionArray)
    })
}

const render = attractionsCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="attractionSelect">
        <option value="0">Please select an attractions...</option>
        ${attractionsCollection.map(attractionObject)}`
}


const 

