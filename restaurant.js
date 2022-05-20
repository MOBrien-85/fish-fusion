
/* 
This module must import and invoke the function that is exported by the fish monger module. 
This module should also define a function that build an HTML version of their daily menu. 
The function should return the generated HTML string. 
The function must be named fishMenu.
*/

// each day the chef visits the monger and specifies the max price she is able to spend

// if the monger has any fish at that price point or less, the chef buys 50% 
// of the existing inventory

// chef then creates 3 DIFFERENT meals PER fish - 
//  - soup
//  - grilled dinner
//  - sandwich

/* 
For example, if tuna was bought, the following meals will be on the menu.
Tuna Soup
Tuna Sandwich
Grilled Tuna
*/

/* HTML structure must match the example below
<h1>Menu</h1>
<article class="menu">
<h2>Tuna</h2>
<section class="menu__item">Tuna Soup</section>
<section class="menu__item">Tuna Sandwich</section>
<section class="menu__item">Grilled Tuna</section>
</article>
*/

// *****do i need to import this function to the monger module? or is the initial import
// and invocation of the monger function create enough of a dialogue between the code?

// import the function from fish monger - the array of objects that the monger purchased
const { catchOfTheDay } = require('./fishingBoat.js')
const { mongerInventory } = require('./fishMonger.js')

// invoke the monger function with the value of the monger's purchases
// 👌👌👌okay, so i had the mongerInventory parameter empty. so if you reference fishMonger module
// you'll see that it expects an argument to pass through the mongerInventory function
// so that's where I was so confused yesterday. This, below, is where I would dictate what
// the chef's price is. depending on it's value, the resulting code that displays: the menu
// will populate with whichever fish meet the established reqs 👌👌👌
const fishBought = mongerInventory(8)



// create array of objects for the chef's dishes using the HTML example
const fishMenu = () => {
    // variable for dishes array - left empty to fill based on following functions
    let htmlString = `<h1>Menu</h1> \n`
    // iterate through the new chef array
    for (const fish of fishBought) {
        fish.amount / 2
        // add string for each fish
        htmlString +=
            `<article class="menu"--${fish.id}> \n
                <h2>${fish.species}</h2> \n 
                <section class="menu__item">${fish.species} Soup</section> \n
                <section class="menu__item">${fish.species} Sandwich</section> \n
                <section class="menu__item">Grilled ${fish.species}</section> \n
            </article> \n`
    }
    return htmlString
}

module.exports = { fishMenu }



