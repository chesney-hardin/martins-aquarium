// Import the function that returns a copy of the fish array
import { getFish } from '../database.js'

import { mostHolyFish } from './filterFish.js'
import { soldierFish } from './filterFish.js'
import { nonHolyFish } from './filterFish.js'


export const HolyFishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = mostHolyFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="holy-fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div><img class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length} inches</div>
            <div class="fish__location">Location Harvested: ${fish.harvestLocation}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}


export const SoldierFishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = soldierFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="soldier-fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div><img class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length} inches</div>
            <div class="fish__location">Location Harvested: ${fish.harvestLocation}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}


export const NonHolyFishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = nonHolyFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="nonholy-fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div><img class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length} inches</div>
            <div class="fish__location">Location Harvested: ${fish.harvestLocation}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}





export const FishList = () => {
    // Invoke the function that you imported from the database module
    const holyFishes = mostHolyFish()
    const soldiers = soldierFish()
    const regularFishes = nonHolyFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of holyFishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div><img class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length} inches</div>
            <div class="fish__location">Location Harvested: ${fish.harvestLocation}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
`
    }

    for (const fish of soldiers) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div><img class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length} inches</div>
            <div class="fish__location">Location Harvested: ${fish.harvestLocation}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
`
    }

    for (const fish of regularFishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div><img class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length} inches</div>
            <div class="fish__location">Location Harvested: ${fish.harvestLocation}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
`
    }


    htmlString += `</article>`

    return htmlString
}



