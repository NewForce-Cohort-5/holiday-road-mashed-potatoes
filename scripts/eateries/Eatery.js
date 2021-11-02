import { useEatery } from "./EateryDataProvider.js"

export const Eatery = (eateryObject) => {
    return `
        <div class="eateryList-card">
            <div class="eateryName"><h3>${eateryObject.businessName}<h3></div>
            <div class="eateryAbout"><p>${eateryObject.description}</p></div>
            <div class="eateryLocation"><strong>Location:</strong> ${eateryObject.city}, ${eateryObject.state}</div>
            <div class="eateryAmeneties"><strong>Ameneties:</strong>
                <ul id ="ameneties">
                    ${Ameneties(eateryObject.ameneties)}
                </ul>
            </div>
        </div>
    `

}
//Ameneties:  petFriendly, wifi, diaperFacility, playground, restrooms, wheelchairAccessible

function Ameneties(currentObject){

    let htmlRepresentation = ""
        for (let singleAmenety in currentObject) {
            if (currentObject[singleAmenety] === true) {
                let htmlString = `
                    <li>${singleAmenety}</li>
                `
                htmlRepresentation += htmlString
            }
        }
    // console.log(htmlRepresentation)
    return htmlRepresentation
}