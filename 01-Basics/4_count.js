//Count how many times a number appears in array	Input: [1, 2, 1, 3], target: 1 → Output: 2
function way1() {
  let count = 0;
  let target = 2;
  let i;
  let array = [1, 2, 1, 3];
  for (i = 0; i < array.length; i++) {
    if (target == array[i]) {
      count++;
    }
  }
  console.log(count);
}

function way2 (arr,target)
{
    let count = 0
    for (let i = 0; i < arr.length; i++)
    {
        if (target == arr[i])
            count++
    }
    return count
}
console.log(way2([2,5,3,6,3,0],4))