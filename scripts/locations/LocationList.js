import { getLocations } from '../database.js'

export const LocationsList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locationsList">'

    // Create HTNL representations of each tipObject here
    for (const locationObject of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="locationObjectCard">
            <div class="locationObject__type">Country: ${locationObject.country}</div>
            <div class="locationObject__salinity">Body of Water: ${locationObject.bodyOfWater}</div>
            <div class="locationObject__temperature">Salt or Fresh: ${locationObject.typeOfWater}</div>
            <div class="locationObject__cleaning">Date Visited: ${locationObject.yearAndMonth}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}