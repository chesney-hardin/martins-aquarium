import { getFish } from './database.js'
import { getTips } from './database.js'
import { getLocations } from './database.js'
// Import the FishList function from the correct module
import { FishList } from './fish/FishList.js'
//import { SoldierFishList } from './fish/FishList.js'
//import { NonHolyFishList } from './fish/FishList.js'
import { TipsList } from './tips/TipList.js'
import { LocationsList } from './locations/LocationList.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

const allTips = getTips()

for (const tip of allTips) {
    console.log(tip)
}

const allLocations = getLocations()

for (const location of allLocations) {
    console.log(location)
}

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const fishHTMLElement = document.querySelector(".fish-collection")


fishHTMLElement.innerHTML = `<h2 class="fish-collection__header">Current Fish Collection</h2> ${FishList()}`


const tipHTMLElement = document.querySelector(".care__list")


tipHTMLElement.innerHTML = TipsList()


const locationHTMLElement = document.querySelector(".locations__list")


locationHTMLElement.innerHTML = LocationsList()