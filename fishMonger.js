/* 
this module will have a function that captures the info from the fishingboat
module-importing it-using the require() function

for example:  const { functionVariable } = require("./fishingBoat.js")

so this will import and then invoke the function from fishing boat->
it will define and export its own function as well that generates its own
inventory that the restaurants (the next module) can use to purchase fish 
for their menu.

the returned inventory should be an array of objects

the exported function MUST BE NAMED **mongerInventory**

info:
1. each day the fish monger buys exactly 10 of each inexpensive fish caught by the boat. 
        -if any of the boat's fish qty is < 10 the monger does NOT buy

2. the monger does not buy any fish from the boat that is priced higher than $7.50

3. the monger lets the chef of a restaurant specify what their max budget per fish is
        - eg. a chef can tell the monger that she can only spend $5 per fish.
        - the function should only return fish that cost $5 or less

4. each fish object provided by the monger should have a qty of 10, instead of the original 
qty from the boat.

*/

// import the function from boat
const { catchOfTheDay } = require('./fishingBoat.js')

//invoke the function with the value of the boat's catch
const fishCaught = catchOfTheDay()

// function to create the fish monger's purchase - creates an array of objects including just the 
// fish he buys, based on the functions below:
const mongerInventory = (chefPrice) => {
    // variable for fish array
    let fishForSale = []
    // iterate through array of fish objects from fishing boat
    for (const fish of fishCaught) {
        //  if statement to check that fish amount and fish price matches the reqs
        if (fish.amount >= 10 && fish.price <= 7.50) {
            // define amount of fish he will buy if the amount is greater than or equal to 10
            // and if the price is less than or equal to $7.50
            fish.amount = 10
            // push the fish that meet these reqs to the new empty fish array
            fishForSale.push(fish)
        }
    }

    // now, declare variable to hold chef's selected fish
    let chefFish = []
    // iterate through fishForSale array
    for (const fish of fishForSale) {
        // check if the fish for sale the monger has is less than or equal to chefPrice
        if (fish.price <= chefPrice) {
            chefFish.push(fish) //i still need to figure out how to return %50 percent of the amount of fish
        }
    }
    // return array of fish
    return chefFish
}


// export the fish monger inventory function so that the resaurant
// module can access invoke it
module.exports = { mongerInventory }








