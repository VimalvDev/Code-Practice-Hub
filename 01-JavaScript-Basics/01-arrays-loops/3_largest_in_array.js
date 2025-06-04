//Find the largest number in an array	
//Input: [4, 1, 9, 3] → Output: 9

function way1(){
    let array = [4, 9, 2, 1]
    let nextNum;
    let highest = array[0];
    for (let i = 0; i < array.length;i++)
    {
        nextNum = array[i]
        if(highest<nextNum)
        {
            highest = nextNum
        }

    }
    return highest
}
// console.log(way1());

function way2(arr) {
    let highest = arr[0];
    let i;
    for (i = 0; i < arr.length; i++)
    {
        if(arr[i]>highest)
        {
            highest = arr[i]
        }
    }
    return highest
}
console.log(way2([4,2,12,5,2,6,3,2,5,6,4,11,2]))