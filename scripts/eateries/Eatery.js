export const Eatery = (eateryObject) => {
    return `
        <div class="eateryList-card">
            <div class="eateryName"><h3>${eateryObject.businessName}<h3></div>
            <div class="eateryAbout"><p>${eateryObject.description}</p></div>
            <div class="eateryLocation"><strong>Location:</strong> ${eateryObject.city}, ${eateryObject.state}</div>
            <div class="eateryAmenities"><strong>Amenities:</strong>
                <ul>
                    <li>${eateryObject.amenities}</li>
                </ul>
            </div>
        </div>
    `
}
//petFriendly, wifi, diaperFacility, playground, restrooms, wheelchairAccessible
