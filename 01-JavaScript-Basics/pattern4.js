let s = "Hello"
let p = "llo"

for (let i = 0; i < s.length; i++) {
    if (p.includes(s[i])) {
      console.log("Includes")
    }
    else {
        console.log(-1)
    }
}
