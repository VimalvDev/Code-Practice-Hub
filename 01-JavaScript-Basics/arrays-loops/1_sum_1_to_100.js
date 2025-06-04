//Print all even numbers from 1 to 100
function way1() {
    let startingPoint = 1
    let endingPoint = 100
    let sum = 0;
    
    for (let i = startingPoint; i <= endingPoint;i++)
    {
        if(i%2 === 0)
        {
            sum += i;
        }
    }
    
    console.log(sum)
}

//Another way
function way2() {
    let endingPoint = 100
    let sum = 0;
    
    for (let i = 2; i <= endingPoint;i+=2)
    {
        sum+=i
    }
    console.log(sum)
}

// function based

function evenSum(start,end)
{
    let sum = 0;
    for (let i = start; i <= end; i++)
    {
        if(i%2=== 0)
        sum+=i
    }
    return sum
}
console.log(evenSum(1,100))

