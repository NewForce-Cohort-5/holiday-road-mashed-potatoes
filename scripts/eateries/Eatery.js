export const Eatery = (eateryObject) => {
    return `
        <div class="eateryList-card">
            <div class="eateryName">${eateryObject.businessName}</div>
            <div class="eateryAbout">About: ${eateryObject.description}</div>
            <div class="eateryLocation">Location: ${eateryObject.city}, ${eateryObject.state}</div>
            <div class="eateryAmenities">Amenities:
                <ul>
                    <li>${eateryObject.amenities}</li>
                </ul>
            </div>
        </div>
    `
}
//petFriendly, wifi, diaperFacility, playground, restrooms, wheelchairAccessible