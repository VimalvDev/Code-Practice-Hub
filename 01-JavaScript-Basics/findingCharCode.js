// let message = "Im a human"
// let index = 3

// let asciiCode = message.charCodeAt(index)

// console.log(`The index of ${message[3]} is ${asciiCode}`)

let asciiCodeFun = x => {
    let asciicode = [];
    for (let i = 0; i < x.length;i++)
    {
        asciicode.push(x.charCodeAt(i))
    }
    return asciicode
}
console.log(asciiCodeFun("abc"))