export const Eatery = (eateryObject) => {
    return `
        <div class="eateryList-card">
            <div class="eateryName"><h3>${eateryObject.businessName}<h3></div>
            <button id="details__${eateryObject.id}" class="btn btn-success">Details</button>
            <div class="hide-att" style="display: none">
                <div class="eateryLocation"><strong>Location:</strong> ${eateryObject.city}, ${eateryObject.state}</div>
                <div class="eateryAbout"><p>${eateryObject.description}</p></div>
                <div class="eateryAmeneties"><strong>Ameneties:</strong>
                    <ul id ="ameneties" class="amenetiesEatList">
                        ${Ameneties(eateryObject.ameneties)}
                    </ul>
                </div>
            </div>
        </div>
    `
}
//Ameneties:  petFriendly, wifi, diaperFacility, playground, restrooms, wheelchairAccessible

function Ameneties(currentObject){

    let htmlRepresentation = ""
        for (let singleAmenety in currentObject) {
            if (currentObject[singleAmenety] === true) {
                let src = ""
                switch (singleAmenety) {
                    case "wheelchairAccessible": 
                    src="https://img.icons8.com/ios/50/000000/wheelchair.png"
                    break
                    case "petFriendly": 
                    src="https://img.icons8.com/ios/50/000000/pet.png"
                    break
                    case "wifi": 
                    src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/000000/external-wifi-mobile-user-interface-tulpahn-detailed-outline-tulpahn.png"
                    break
                    case "diaperFacility": 
                    src="https://img.icons8.com/ios/50/000000/safety-pin.png"
                    break
                    case "playground": 
                    src="https://img.icons8.com/ios/50/000000/playground.png"
                    break
                    case "restrooms": 
                    src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-restroom-airport-kiranshastry-lineal-kiranshastry.png"
                    break
                }
                let htmlString = `
                    <li><img src="${src}" alt="icon" class="amenetiesEatIcon"/></li>
                `
                htmlRepresentation += htmlString
            }
        }
    // console.log(htmlRepresentation)
    return htmlRepresentation
}