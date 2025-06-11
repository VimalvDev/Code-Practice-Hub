let sumOfNumbers = (min, max) => {
    let sum = 0; 
    for (let i = min; i <= max; i++)
        sum += i;
    return sum
}
let output = sumOfNumbers(1,20)
console.log(output)