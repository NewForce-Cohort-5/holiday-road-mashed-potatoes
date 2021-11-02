import { Eatery } from "./Eatery.js"
import { useEatery, getEatery } from "./EateryDataProvider.js"

const contentTarget = document.querySelector(".eateryList")

export const EateryList = (eateryFilter) => {
    let eateryListContainer = document.querySelector(".eateryList");
    eateryListContainer.innerHTML = ""

    getEatery()
    .then(() => {
        let eateryArray = useEatery();
        let eateryHTML = "";
    
        if(eateryFilter){
            eateryArray = eateryArray.filter(singleEateryInLoop => {
                return singleEateryInLoop.businessName === eateryFilter
            })
        }

        eateryArray.forEach((eateryObject) => {
            eateryHTML += Eatery(eateryObject)
        })

        contentTarget.innerHTML = `
            <h2>Eateries</h2>
            <div class="eatery-list">
                ${eateryHTML}
            </div>
        `
    })
}