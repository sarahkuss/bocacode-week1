console.log('initialize')
console.log('declare')

/////////////////////////////

console.log('invoke')

/////////////////////////////

const student = {
    school: 'Boca Code',
    class: 'JavaScript',
    homework: true
}

/////////////////////////////

let favoriteFruits = ['mango', 'lychee', 'strawberry', 'papaya']

const addFruit = (array, fruit) => {
    array.shift()
    return array.push(fruit)
}
addFruit(favoriteFruits, 'kiwi')
console.log(favoriteFruits)


// another way to write it but then can't access favoriteFruits2 outside function

const addFruit2 = (fruit2) => {
    let favoriteFruits2 = ['mango', 'lychee', 'strawberry', 'papaya']
    favoriteFruits2.shift()
    favoriteFruits2.push(fruit2)
    return console.log(favoriteFruits2)
}
addFruit2('kiwi')

