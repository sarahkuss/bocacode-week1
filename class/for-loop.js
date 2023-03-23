
// 1/2 declare function
function loopNumber(char, total) {
    for (let i = 0; i < total; i++) {
        const result = i + '=' + char
        console.log(result)
    }
}
// 2/2 invoke the function
loopNumber('🤪', 30)