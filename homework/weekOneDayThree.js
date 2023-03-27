// function multiplyTwoNums(num1, num2) {
//     return num1 * num2
// }
// const result = multiplyTwoNums(4, 5)
// console.log(result)

///////////////////////////////////////

// function assignGrade(grade) {
//     let letterGrade
//     if (grade >= 90) {
//         letterGrade = "A"
//     } else if (grade >= 80) {
//         letterGrade = "B"
//     } else if (grade >= 70) {
//         letterGrade = "C"
//     } else if (grade >= 60) {
//         letterGrade = "D"
//     } else { 
//         letterGrade = "F"
//     } return letterGrade
//  } 

function assignGrade2 (grade) {
    let letterGrade2
    switch(true) {
        case (grade >= 90):
            letterGrade2 = 'A'
            break
        case (grade >= 80):
            letterGrade2 = 'B'
            break
        case (grade >= 70):
            letterGrade2 = 'C'
        case (grade >= 60):
            letterGrade2 = 'D'
            break
        default:
            letterGrade2 = 'F'
            console.log(grade)
            break
        }
        return letterGrade2
    
}
console.log(assignGrade2(60))


// let finalGrade = assignGrade(70)
// console.log(finalGrade)

// ///////////////////////////////////////////

// const sports = [
//     "soccer",
//     'football',
//     'hockey',
//     'basketball'
// ]

// function getFirstElement(array) {
//     return array[0]
// }
// firstElement = getFirstElement(sports)
// console.log(firstElement)