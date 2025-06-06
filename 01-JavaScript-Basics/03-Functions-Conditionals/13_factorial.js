//Function to return factorial of number
//Input: 5 → Output: 120

function factorial(num)
{
    //Factorial of 0! is 1, so the result will always be result>=1, also if we multiply something with 0, the result will be zero which we dont want

    let result = 1;
    for (let i = 1; i <= num;i++)
    {
        result*=i
    }
    return result
}
console.log(factorial(3))
