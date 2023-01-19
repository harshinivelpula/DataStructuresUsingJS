var array = [];
var maximum=100;
var minimum=999;
let largestNum;
let secondLargestNum = 0;
let SmallestNum;
let secondSmallestNum=0;

console.log("ten Random 3 digit Numbers are :");
function SecondLargestSmallest(min, max) {
    for(let i = 0;i<10;i++)
    {
        array[i] = Math.floor(Math.random() * (max - min)) + min;
        console.log(array[i]);
        if(array[i]>maximum)
        {
            maximum=array[i];
        }
        if(array[i]<minimum)
        {
            minimum=array[i];
        }
    }
    let largestNum = array[0];
    let SmallestNum = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i] > largestNum) {
        secondLargestNum = largestNum;
        largestNum = array[i];  
        }
      else if (array[i] !== largestNum && array[i] > secondLargestNum) {
      secondLargestNum = array[i];
      }
    };
    console.log("Largest Number in the array is " + largestNum);// 1 2 3 4
    let secondSmallestNum = maximum;
    for(let i = 1; i < array.length; i++) {
        if(array[i] < SmallestNum) {
            secondSmallestNum = SmallestNum;
            SmallestNum = array[i];  
        }
      else if (array[i] !== SmallestNum && array[i] < secondSmallestNum) {
        secondSmallestNum = array[i];
      }
    };

    console.log("Smallest Number in the array is " + SmallestNum);
    console.log("Second smallest Number in the array is " + secondSmallestNum);
  }
SecondLargestSmallest(100,999);
console.log("Second Largest Number in the array is " + secondLargestNum);