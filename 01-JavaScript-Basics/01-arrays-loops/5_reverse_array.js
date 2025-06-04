//Reverse an array (without using .reverse())
//Input: [1, 2, 3] → Output: [3, 2, 1]

let array = [1, 2, 3]
let reverseArray = []

for (let i = array.length-1; i >= 0;i--)
{
    reverseArray.push(array[i])
}

console.log(reverseArray)