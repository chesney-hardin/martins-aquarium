// Import the function that returns a copy of the tipObject array
import { getTips } from '../database.js'

export const TipsList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipsList">'

    // Create HTNL representations of each tipObject here
    for (const tipObject of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tipObjectCard">
            <div class="tipObject__type">Type of tank: ${tipObject.type}</div>
            <div class="tipObject__salinity">Salinity level: ${tipObject.salinity}%</div>
            <div class="tipObject__temperature">Temperature: ${tipObject.temperature}F</div>
            <div class="tipObject__cleaning">Cleaning Process: ${tipObject.cleaning}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}
//   <div><img class="tipObject__image" src="${tipObject.image}" /></div>