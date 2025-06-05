//Count vowels in a string
//Input: "hello" → Output: 2

function way1(string) {
  let splitTxt;
  let count = 0;
  splitTxt = string.toLowerCase().split("");

  for (let i = 0; i < splitTxt.length; i++) {
    if (
      (splitTxt[i] == "a") ||
      (splitTxt[i] == "e") ||
      (splitTxt[i] == "i") ||
      (splitTxt[i] == "o") ||
      (splitTxt[i] == "u")
    ) {
      count++;
    }
  }
  return count;
}
// console.log(way1("hEllo"))

function way2(string) {
  let count = 0;
  let vowels = "aeiou";
    let str = string.toLowerCase()
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(way2("hellOo"));
