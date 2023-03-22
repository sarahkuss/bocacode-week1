// write a function that takes in the number of adults and returns the number of pizzas
// required to feed them. Assume 8 slices per pizza and each adult will eat 3 slices
// round up to the nearest pie

function howManyPizzas (numAdults) {
    const totalSlices = numAdults * 3
    const totalPizzas = totalSlices / 8
    return Math.ceil(totalPizzas)
}

// Can also write it shorter like this but not as clear what you're doing
function howManyPizzas2 (numAdults) {
    return Math.ceil((numAdults * 3) / 8)
}

// this lets you change num of slices per person and per pizza as well
function howManyPizzas3 (numAdults, numSlicesPerAdult, numSlicesPerPizza) {
    const numPizzas = (numAdults * numSlicesPerAdult) / numSlicesPerPizza
    return Math.ceil(numPizzas)
}

const pizzas = howManyPizzas(10)
console.log(pizzas)

console.log(howManyPizzas3(10, 3, 8))
