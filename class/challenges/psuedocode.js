// write a function that takes a number of adults, a number of children, and
// the number of beds in a vacation home and returns true if there are enough
// beds for everyone and false if not. Assume that adults will sleep 2 to a bed

// what are number of parameters you need? -> 3
function enoughBeds(numAdults, numKids, numBeds) {
    // step 1: Divide number of adults by 2
    const adultBeds = numAdults / 2
    // step 2: Add that to the number of kids
    totalBedsNeeded = adultBeds + numKids
    // step 3: Is that result <= number of beds
    return (totalBedsNeeded <= numBeds) 
    // the line above is the same as these below
    // if (totalBedsNeeded <= numBeds) {
    // return true
    // } return false
}

const canWeFit = enoughBeds(8, 4, 5)
console.log('Can we fit? ', canWeFit)