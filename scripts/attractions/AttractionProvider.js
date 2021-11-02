let attractions = []

export const useAttractions = () => {
    return attractions.slice()
}

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(bizarre => bizarre.json())
        .then(BizzareResponse => {
            console.table(BizzareResponse)
            attractions = BizzareResponse
        }
    )
}