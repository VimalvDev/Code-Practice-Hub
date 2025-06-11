let stringFing = (string, char) => string.indexOf(char) === -1 ? `Character not found` : `character found`

let output = stringFing("hello, my name is vimal","v")
console.log(output)