const shirt1 = {
    shirt: "t-shirt",
    color: "green",
    quantity: 1,
    size: "small",
    like: true
}

//bracket notation
const shirtSize = shirt1["size"]
//dot notation
const shirtLike = shirt1.like

console.log("size:", shirtSize)
console.log("like:", shirtLike)


const dragonRoll = {
    wrap: 'nori',
    carb: 'rice',
    protein: 'dragon',
    numVegetables: 3,
    yummy: true
}


// destructuring
const person = {
    firstName: 'Jiho',
    lastName: 'Sohn',
    age: 46,
    ethnicity: 'Korean',
    awesome: true,
    partner: {
        firstName: 'Ruth',
        age: 34,
        ethnicity: 'Jamaican',
        siblings: []
    }
}
const { firstName, lastName, age, ethnicity, awesome } = person