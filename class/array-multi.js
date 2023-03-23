// Array
const container = [
    'parent first', //0
    'parent second', //1
    [               //2
        'nested first', //0
        'nested second' //1
    ]
]

// Construct

// Log
console.log('container:', container)
console.log('container 2nd:', container[1])
console.log('container 3rd:', container[2])
console.log('container - child 2nd:', container[2][1])


