export const bizarreCard = (bizarreries) => {
    return `
        <div class="biz-card">
            <div class="name-biz"><h3>${bizarreries.name}<button id="details" type="button" class="btn btn-success">for more details click here</button></h3></div>
            
        <div id="hidden-details" class="hide-att">
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



document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "details") {
        document.querySelector("#hidden-details").classList.toggle("hide-att")
}
})


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

