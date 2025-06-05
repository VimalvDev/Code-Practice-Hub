//Function to check if a number is prime
//Input: 7 → Output: true

function prime(num)
{
    if (num <= 1)
        return `Not prime`
    
    for (let i = 0; i <= num;i++)
    {
        if (num % i === 0)
        {
            return false
        } 
        
    }
    return true
}
console.log(prime(10))
