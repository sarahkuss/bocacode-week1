function message(firstName) {
    console.log('hello ' + firstName)
}

function getMeow() {
    console.log('meow')
}


function getSumTotal(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber
    console.log(result)
}

function makePie(quantity) {
    const pie = '🥧'.repeat(quantity)
    console.log(pie)
}

function makeAnimal(animal, quantity) {
    const happyResult = animal.repeat(quantity)
    return happyResult
}

// message('Sarah')
// message("cat who are you?")
// getSumTotal(2, 5)
// getSumTotal(12000, 1200000)
// getSumTotal("sym", "phony")
// makePie(4000) 
const renderResult = makeAnimal('🐼', 953)
console.log(renderResult)