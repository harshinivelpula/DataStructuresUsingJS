var array = [];
console.log("ten Random 3 digit Numbers are");
function SecondLargestSmallestBySorting(min, max) {
    for(let i = 0;i<10;i++)
    {
        array[i] = Math.floor(Math.random() * (max - min)) + min;
        console.log(array[i]);
    }
    array.sort();
    console.log("Sorted array Values");
    for(let i=0;i<10;i++)
    {
        console.log(array[i]);
    }
    let secondSmallestNum = array[0];
    let secondLargestNum = array[9];
    console.log("Second smallest Number in the array is " + secondSmallestNum);
    console.log("Second Largest Number in the array is " + secondLargestNum);
}
SecondLargestSmallestBySorting(100,999);