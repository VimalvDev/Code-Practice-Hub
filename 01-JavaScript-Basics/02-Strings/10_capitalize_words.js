//Capitalize first letter of each word
//Input: "hello world" → Output: "Hello World"


function way1(string) {
  let splitedString = string.split(" ");
    for (let i = 0; i < splitedString.length; i++) {
        splitedString[i] = splitedString[i][0].toUpperCase() + splitedString[i].slice(1).toLowerCase()
    }
    return splitedString.join(" ")
}

console.log(way1("hello world"));
