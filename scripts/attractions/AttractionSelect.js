import { getAttractions, useAttractions } from './AttractionProvider.js'
import { AttractionsList } from './AttractionList.js'

const contentTarget = document.querySelector(".attractions-Dropdown")

export const attractionSelect = () => {

    getAttractions()
    .then(() => {
        const attractions = useAttractions()
        render(attractions)
    })
}

const render = attractionCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="attractionSelect">
            <option value="0">Please select an attraction...</option>
            ${
                attractionCollection.map(attractionObject => {
                    const attractionName = attractionObject.name
                    return `<option class="attractionName">${attractionName}</option>`
                })
            }
        </select>
    `
}

const contentbullseye = document.querySelector("body")
contentbullseye.addEventListener("change", (attractionObject) => {
  
    if(attractionObject.target.id === "attractionSelect"){
        
       const selectedAttraction= attractionObject.target.value
       AttractionsList(selectedAttraction)
    }
})

