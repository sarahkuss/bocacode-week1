// Challenge 1: Convert Fahrenheit to Celsius
function convertTemperature (numFahrenheit) {
  const firstStep = numFahrenheit - 32
  const secondStep = (firstStep * (5/9)).toFixed(1)
  return console.log(`Today is ${numFahrenheit}F (${secondStep}C).`)
}
convertTemperature(80)

// Challenge 2: Convert Yen to Dollars
function convertCurrency (yen) {
  const dollars = (yen * 0.0077).toFixed(2)
  return console.log(`${yen} Yen is ${dollars} US Dollars.`)
}
convertCurrency(2000)

// Challenge 3: Get largest number from array
const largestInt = [2, 5, 7, 1337, 13, 21, 22, 55, 66, 13, 14551, 41]
// function getLargestNum (array) {
//   return console.log(Math.max(...array))
// }
// getLargestNum(largestInt)

function largest (arr) {
  let max = arr[0]
  for (let i =0; i < arr.length; i++) { //need < because .length will add the length of the array to the array
    if (arr[i] > max)
    max = arr[i]
  }
  return max
}
console.log(largest(largestInt))

// another way to write it
let biggest = 0
for(let i =0; i< largestInt.length; i++) {
  if (largestInt[i] < largestInt[i+1]) {
    biggest = largestInt[i+1]
  }
}
console.log(biggest)

// // Challenge 4: Sum of array
// const sumInt = [6,1,643,234,123,4,7,9]
// const sumArray = sumInt.reduce()

const sumInt = [6,1,643,234,123,4,7,9]

let sum = 0
for (let i = 0; i < sumInt.length; i++) {
  sum += sumInt[i] 
}
console.log(sum)
