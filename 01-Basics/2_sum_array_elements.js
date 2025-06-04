//Sum all elements of an array
function way1() {
  let sum = 0;
  let array = [4, 2, 3];

  for (i = 0; i < 3; i++) {
    sum += array[i];
  }
  console.log(sum);
}

function arraySum(arr)
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        sum=sum+arr[i]
    }
    return sum
}
console.log(arraySum([1, 2, 5, 5,11]))
