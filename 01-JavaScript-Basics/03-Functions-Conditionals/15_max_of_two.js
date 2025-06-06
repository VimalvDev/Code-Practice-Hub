//Return the greater of 2 numbers
//Input: 10, 20 → Output: 20

function maxOf(num) {
    let currentNum = num[0];
    let nextNum = num[1];

    if (currentNum > nextNum) return currentNum;
    else return nextNum;
}

console.log(maxOf([10,20]))
