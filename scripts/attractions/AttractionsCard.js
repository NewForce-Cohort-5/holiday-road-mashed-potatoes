export const bizarreCard = (bizarreries) => {
    return `
        <div class="biz-card">
            <div class="name-biz"><h3>${bizarreries.name}</h3></div>
            <div class="state-name"><strong>State: ${bizarreries.state}</strong></div>
            <div class ="biz-description">${bizarreries.description}</div>
            <div class="attractionAmeneties"><h3>Ameneties:</h3>
                <ul id="ameneties">
                    ${Ameneties(bizarreries.ameneties)}
                </ul>
            </div>
        </div>
    `
}

function Ameneties(currentObject){

    let htmlRepresentation = ""
        for (let singleAmenety in currentObject){
            if(currentObject[singleAmenety] === true) {
                let htmlString = `
                    <li>${singleAmenety}</li>
                `
            htmlRepresentation += htmlString
        }
    }
    return htmlRepresentation
}