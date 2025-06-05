//Replace all spaces with `-`
//Input: "a b c" → Output: "a-b-c"

function way1(string) {
  let replacedString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      replacedString += "-";
    } else {
      replacedString += string[i];
    }
    }
    return replacedString
}

// console.log(way1("hell o m y nam e"))

function way2(string){
  return string.split(" ").join("-")
}
console.log(way2("hell o m y nam e"))

function way3(string)
{
  return string.replaceAll(" ","-")
}
console.log(way3("hell o m y nam e"))
