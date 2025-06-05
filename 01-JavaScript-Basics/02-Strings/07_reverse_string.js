//Reverse a string
//Input: "cat" → Output: "tac"

function way1(string) {
    let reverseString = [];
    //dont need to split string because we are already accessing each character with string[i]
    for (let i = 0; i < string.length;i++)
    {
        reverseString.unshift(string[i])
    }
    return reverseString.join("")
}
console.log(way1("HeLoLo"))

function way2(string)
{
    //Need to split because we are accessing whole string, not each character unlike way1
    return string.split("").reverse().join("")
}
console.log(way2("Developer"))
