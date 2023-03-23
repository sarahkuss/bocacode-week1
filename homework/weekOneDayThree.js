function multiplyTwoNums(num1, num2) {
    return num1 * num2
}
const result = multiplyTwoNums(4, 5)
console.log(result)

///////////////////////////////////////

function assignGrade(grade) {
    let letterGrade
    if (grade >= 90) {
        letterGrade = "A"
    } else if (grade >= 80) {
        letterGrade = "B"
    } else if (grade >= 70) {
        letterGrade = "C"
    } else if (grade >= 60) {
        letterGrade = "D"
    } else { 
        letterGrade = "F"
    } return letterGrade
 } 

let finalGrade = assignGrade(50)
console.log(finalGrade)

///////////////////////////////////////////

const sports = [
    "soccer",
    'football',
    'hockey',
    'basketball'
]

function getFirstElement(array) {
    return array[0]
}
firstElement = getFirstElement(sports)
console.log(firstElement)