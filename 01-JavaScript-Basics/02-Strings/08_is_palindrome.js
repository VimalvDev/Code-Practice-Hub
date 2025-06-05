//Check if a string is a palindrome
//Input: "madam" → Output: true

function way1(string) {
  //Array method
  let orignalString = string.toLowerCase();
  let reverseString = [];
  //Reversing the string
  for (let i = 0; i < string.length; i++) {
    reverseString.unshift(string[i]);
  }
  if (orignalString == reverseString.join("")) {
    return `The string is palindrome`;
  } else {
    return `The string isn't palindrome`;
  }
}
// console.log(way1("aba"));

//String method
function way2(string) {
    
  let str = string.toLowerCase();
  let reverseString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  if (str === reverseString) {
    return `The string is palindrome`;
  } else {
    return `The string isn't palindrome`;
  }
}
console.log(way2("abA"));
