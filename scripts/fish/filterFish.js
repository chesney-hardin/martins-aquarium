import { getFish } from '../database.js'



export const mostHolyFish = () => {

    const fishes = getFish()

    const holyFish = []

    for (const fish of fishes) {

        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }

    }
    return holyFish
}

export const soldierFish = () => {
    const fishes = getFish()

    const soldiers = []

    for (const fish of fishes) {

        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }

    }

    return soldiers
}

export const nonHolyFish = () => {

    const fishes = getFish()

    const regularFish = []

    for (const fish of fishes) {

        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }

    }

    return regularFish
}