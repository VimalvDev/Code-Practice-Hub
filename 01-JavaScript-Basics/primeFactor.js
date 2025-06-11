let primeFactor = (num) => {
  let result = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      result.push(i);
      num /= i;
    }
  }
  return result.join(" ");
};
let output = primeFactor(200);
console.log(output);
