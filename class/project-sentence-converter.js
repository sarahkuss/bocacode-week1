/*
objective: create a function that converts a string to a friendly sentence
-string method: toLowerCase(), trim()
-arrow function: 
*/

const convertSentence = (text) => {
    const newText = text.toLowerCase()
    const newText2 = newText[0].toUpperCase()
    const finalText = newText2 + newText.substring(1)
    return finalText
}
const sentence = 'type Better PleAse'
const result = convertSentence(sentence)
console.log('original:', sentence)
console.log(result)