import { getAttractions, useAttractions } from './AttractionProvider.js'
import { AttractionsList } from './AttractionList.js'

const contentTarget = document.querySelector(".attractions-Dropdown")

export const attractionSelect = () => {

    getAttractions()
    .then(() => {
        const attractions = useAttractions()
        render(attractions)
    })
}

const render = attractionsCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="attractionSelect"`
}



