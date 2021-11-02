export const bizarreCard = (bizarreries) => {
    return `
    <section class="biz-card">
        <div class= "list-of-biz">
            <h4 class="name-biz">${bizarreries.name}</h4>
            <li class="state-name">${bizarreries.state}</li>
            <p class ="biz-description">${bizarreries.description}</p>
            <a class="ameneties"> "souvenirs:"${bizarreries.ameneties.souvenirs} "restrooms:"${bizarreries.ameneties.restrooms}</a>
        </div>
    </section>
    `
}