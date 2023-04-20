//database is an object with a fish array of fish objects
const database = {
    fish: [
        {
            id: 1,
            species: "Cherry Shrimp",
            name: "Shirley",
            length: "6",
            harvestLocation: "northern Taiwan",
            diet: "algae",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Neocaridina_heteropoda_female.png/440px-Neocaridina_heteropoda_female.png"
        },
        {
            id: 2,
            species: "Rainbow Shiner",
            name: "Chip",
            length: "1",
            harvestLocation: "Mobile River",
            diet: "crustaceans",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Notropis_chrosomus_-_Wilhelma_01.jpg/440px-Notropis_chrosomus_-_Wilhelma_01.jpg"
        },
        {
            id: 3,
            species: "White Cloud Mountain Minnow",
            name: "Baby",
            length: "2",
            harvestLocation: "Guangdong, China",
            diet: "crustaceans",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/White_Cloud_Mountain_Minnow_2.jpg/440px-White_Cloud_Mountain_Minnow_2.jpg"
        },
        {
            id: 4,
            species: "Threadfin Rainbowfish",
            name: "Slasher",
            length: "2",
            harvestLocation: "northern Australia",
            diet: "algea",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.h7lS6tkPEPcSEOdDFs4DIQHaFX%26pid%3DApi&f=1&ipt=f17f23435266da5e81c5b8c0347b1e2fcf50a3f9bb7c61f72d0c507a04d65738&ipo=images"
        },
        {
            id: 5,
            species: "African Butterfly Cichlid",
            name: "Dancer",
            length: "3",
            harvestLocation: "Liberia",
            diet: "crustaceans",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Anomalochromis_thomasi_2.jpg/440px-Anomalochromis_thomasi_2.jpg"
        },
        {
            id: 6,
            species: "Red-lined Torpedo Barb",
            name: "Barbara",
            length: "5",
            harvestLocation: "India",
            diet: "crustaceans",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WNcz8VgxVBoxwP8Z5yZLtwHaE6%26pid%3DApi&f=1&ipt=e2ff91f6a89c14f4f15032c14cc4bdd2d4074c83643a3cc227ae970c637fc1d3&ipo=images"
        },
        {
            id: 7,
            species: "Royal Blue Tiger Pleco",
            name: "Tom",
            length: "6",
            harvestLocation: "Australia",
            diet: "algea",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.AbdRTIA8zL5QE_-KJaLSmAHaFj%26pid%3DApi&f=1&ipt=b7a0b7f4c4a175fa8710d60062499c3bee68b98d71fadce93f94263eed08f360&ipo=images"
        },
        {
            id: 8,
            species: "Celestial Pearl Danio",
            name: "Galaxy",
            length: "2",
            harvestLocation: "Nam Pawn River in Myanmar",
            diet: "zooplankton",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6lh2MOuybXvq34u8JGyCmQHaE7%26pid%3DApi&f=1&ipt=b9d3f8ea4bf5e6dfcd34c75aa7140db2c40c40200e6bb11e54c1d895f8b59725&ipo=images"
        }
    ],
    tips: [
        {   
            id: 1,
            type: "Cold Freshwater",
            salinity: 5,
            temperature: 55,
            cleaning: "Refresh water every other month and scrub the glass. Add ice cubes if water gets above 65F."
        },
        {
            id: 2,
            type: "Warm Freshwater",
            salinity: 10,
            temperature: 80,
            cleaning: "Refresh water monthly and clean glass weekly. Add warm water if water gets below 70F."
            
        },
        {
            id: 3,
            type: "Saltwater",
            salinity: 65,
            temperature: 70,
            cleaning: "Check salinity levels and adjust as needed. Change water 2-3 times per year."
        },
    ],
    locations: [
        {
            id: 1,
            country: "Panama",
            bodyOfWater: "Caribbean",
            typeOfWater: "saltwater",
            yearAndMonth: "April 1995"
        },
        {
            id: 2,
            country: "Australia",
            bodyOfWater: "Pacific Ocean",
            typeOfWater: "saltwater",
            yearAndMonth: "September 1989"
        },
        {
            id: 3,
            country: "USA",
            bodyOfWater: "Lake Michigan",
            typeOfWater: "freshwater",
            yearAndMonth: "June 1999"
        },
        {
            id: 4,
            country: "Brazil",
            bodyOfWater: "Amazon River",
            typeOfWater: "freshwater",
            yearAndMonth:"February 2002"
        }

    ]
}

export const getFish = () => {
    //The .map method creates a copy of the data so the original data is protected
    return database.fish.map(fish => ({ ...fish }))
}

export const getTips = () => {
    //The .map method creates a copy of the data so the original data is protected
    return database.tips.map(tips => ({ ...tips }))
}

export const getLocations = () => {
    //The .map method creates a copy of the data so the original data is protected
    return database.locations.map(locations => ({ ...locations }))
}