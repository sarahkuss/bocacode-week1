// Challenge 1: Convert Fahrenheit to Celsius
function convertTemperature(numFahrenheit) {
  const firstStep = numFahrenheit - 32
  const secondStep = (firstStep * (5 / 9)).toFixed(1)
  return console.log(`Today is ${numFahrenheit}F (${secondStep}C).`)
}
convertTemperature(80)

// Challenge 2: Convert Yen to Dollars
function convertCurrency(yen) {
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

const negativeInt = [-1, -4, -6]

let max = 0
function largest(arr) {
  for (let i = 0; i < arr.length; i++) { //need < because .length will add the length of the array to the array
    if (arr[i] > max)
      max = arr[i]
  }
  return max
}
console.log(largest(negativeInt))

function largest2(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max)
      max = arr[i]
  }
  return max
}
console.log(largest2(largestInt))

// another way to write it
let biggest = 0
for (let i = 0; i < largestInt.length; i++) {
  if (largestInt[i] < largestInt[i + 1]) {
    biggest = largestInt[i + 1]
  }
}
console.log(biggest)

// // Challenge 4: Sum of array
// const sumInt = [6,1,643,234,123,4,7,9]
// const sumArray = sumInt.reduce()

const sumInt = [6, 1, 643, 234, 123, 4, 7, 9]

let sum = 0
for (let i = 0; i < sumInt.length; i++) {
  sum += sumInt[i]
}
console.log(sum)


function sumInt2() {
  let curSum = 0
  for (i = 0; i < sumInt.length; i++) {
    curSum = curSum + sumInt[i]
  }
  return curSum
}
console.log(sumInt2())

// Function that gets odd numbers in array
let countNumber = [1, 3, 7, 6, 13, 20, 2, 5, 33, 9, 14]

// function getOdd(array) {
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       console.log(array[i])
//     }
//   }
// }
// getOdd(countNumber)

function getOdd2 (array) {
  const newArray = []
  for (i=0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      newArray.push(array[i])
    }
  } return newArray
}
console.log(getOdd2(countNumber))

// Challenge 6 Multiplication Table
// let result = ' X '
// for (let i = 0; i < 11; i++) {

//     for (let j = 0; j < 11; j++) {

//         if(i === 0 && j > 0){
//           result += '[' + j + ']'
//         } 
//         else if(j === 0 && i>0){
//           result += '[' + i + '] '
//         } 
//         else if(i>0 && j>0){
//         result += (i*j) + ' '
//         }
//     }
//     result += '\n'
// }

// console.log(result)

let palindrome = 'Racecar'
let newStr = ''
for (i = palindrome.length - 1; i >= 0; i--) {
    newStr += palindrome[i]
  } 
if (newStr === palindrome) {
  console.log('This is a palindrome')
} else {console.log('This is not a palindrome')}
console.log(palindrome)
console.log(newStr)
  
  
// let str = 'JavaScript Reverse String Example';

// let newString = '';
// for (let i = str.length - 1; i >= 0; i--) {
//   newString += str[i];
// }

// console.log(newString)