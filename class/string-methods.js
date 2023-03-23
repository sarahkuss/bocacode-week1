// Length- counts the spaces as well
// function strLength () {
//     const string = "Great idea Megan!"
//     console.log(string.length)
//}

const strLength = () => {
    const string = "Great idea Megan!"
    console.log("str length:", string.length)
}
//Length invoke
strLength()

// To Uppercase
const toUpper = () => {
    const string = "local scope"
    console.log("str uppercase:", string.toUpperCase()) //need the () after toUpperCase
}

toUpper()

// Trim - negates the spaces before and after string
const strTrim = () => {
    const string = '   Hello this is Major Tom   '
    console.log('str trim:', string.trim())
}
strTrim()

// Replace
const strReplace = () => {
    const string = "I didn't sleep much last night"
    const subject = "sleep much"
    const replace = "eat anything"
    console.log("str replace:", string.replace(subject, replace))
}
strReplace()

// Substring - starts with number told and ends number before told
const strSub = () => {
    const string = 'I like big fonts and I cannot lie'
    console.log('subString1:', string.substring(7, 16))
    console.log('subString2:', string.substring(2))
}
strSub()

// split
const strSplit = () => {
    const string = 'I like star wars'
    console.log(string.split())
    console.log(string.split(' '))
}
strSplit()

// startsWith
// endsWith
// includes
// indexOf

