export const Eatery = (eateryObject) => {
    return `
        <div class="eateryList-card">
            <div class="eateryName"><h3>${eateryObject.businessName}<h3></div>
            <div class="eateryLocation"><strong>Location:</strong> ${eateryObject.city}, ${eateryObject.state}</div>
            <div class="eateryAbout"><p>${eateryObject.description}</p></div>
            <div class="eateryAmeneties"><strong>Ameneties:</strong>
                <ul id ="ameneties" class="amenetiesEatList">
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
                    <li>&bull; ${singleAmenety}</li>
                `
                htmlRepresentation += htmlString
            }
            else if (currentObject.wheelchairAccessible === true) {
                let htmlString = `
                    <li><img src="https://img.icons8.com/ios/50/000000/wheelchair.png" alt="icon" class="amenetiesEatIcon"/><p>Wheelchair Accessible</p></li>
                `
                htmlRepresentation += htmlString
            } 
            else if (currentObject.restrooms === true) {
                let htmlString = `
                    <li><img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-restroom-airport-kiranshastry-lineal-kiranshastry.png" alt="icon" class="amenetiesEatIcon"/><p>Public Restrooms</p></li>
                `
                htmlRepresentation += htmlString
            } 
            // if (currentObject.petFriendly === true) {
            //     return `
            //         <li><img src="https://img.icons8.com/ios/50/000000/pet.png" alt="icon" class="amenetiesEatIcon"/><p>Pet Friendly</p></li>
            //     `
            // } else if (currentObject.petFriendly === false) {
            //     return `
            //         <li><img src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-no-pets-allowed-hotel-essentials-justicon-lineal-justicon.png" alt="icon" class="amenetiesEatIcon nope"/><p>No Pets</p></li>
            //     `
            // }
        }
    // console.log(htmlRepresentation)
    return htmlRepresentation
}

