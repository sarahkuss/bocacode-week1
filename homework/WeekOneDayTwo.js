const animal = "cow"
switch(animal) {
    case "cow":
        console.log("moo")
        break
    case "lion":
        console.log("roar")
        break
    case "duck":
        console.log("quack")
}

function fruitColor(fruit) {
    if (fruit === "strawberry") {
        console.log("red")
    } else if (fruit === "blueberry") {
        console.log("blue")
    } else if (fruit === "orange") {
            console.log("orange")
    } else if (fruit === "banana") {
        console.log("yellow")
    }
}
fruitColor("blueberry")

function addTwoNumbers(number1, number2) {
    const result = number1 + number2
    console.log(result)
}

addTwoNumbers(17, 12)


function fruitColor(fruit) {
    let color
    if (fruit === "strawberry") {
        color = 'red'
    } else if (fruit === "blueberry") {
        color = 'blue'
    } else if (fruit === "orange") {
        color = 'orange'
    } else if (fruit === "banana") {
        color = 'yellow'
    } 
    return color
}

let response = fruitColor('orange')
console.log(response)