import { useEatery, getEatery } from "./EateryDataProvider.js"
import { EateryList } from "./EateryList.js"

const contentTarget = document.querySelector(".eateryDropDown")

export const EaterySelect = () => {

     getEatery()
    .then(() => {
        const eatery = useEatery()
        render(eatery)
    })
}

const render = eateryCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="eaterySelect">
            <option value="0">Please select an eatery...</option>
            ${
                eateryCollection.map(eateryObject => {
                    const eateryName = eateryObject.businessName
                    return `<option class="eateryName">${eateryName}</option>`
                })
            }
        </select>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {
  
    if(eventObject.target.id === "eaterySelect"){
        
       const selectedEatery= eventObject.target.value
       EateryList(selectedEatery)
    }
})