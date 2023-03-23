function loopWhile(){
    let i = 0
    const end = 5

    while (i < end) {
        const result = i + ' ' + 'hello'
        console.log(result)
        i++
    }
}

loopWhile()

// let n = 0
// const end2 = 5
// while (n < end2) {
//     n++
//     const result2 = n + ' hello'
//     console.log(result2)
// }


function madLib(name, car, color) {
    const sentence = `Hello your name is ${name}. You drive a ${car} which is ${color}`
    console.log(sentence)
}
madLib('sloth', 'kia', 'black')