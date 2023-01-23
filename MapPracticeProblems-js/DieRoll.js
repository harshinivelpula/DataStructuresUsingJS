let myMap=new Map();
let limit =0;
let mostNum=0;
myMap.set(1,parseInt(0));
myMap.set(2,parseInt(0));
myMap.set(3,parseInt(0));
myMap.set(4,parseInt(0));
myMap.set(5,parseInt(0));
myMap.set(6,parseInt(0));

while(limit<=55)                       
{
    let dice =Math.ceil(Math.random()*6);
    let result=myMap.get(dice);
    let diceResult=result+1;
    myMap.set(dice,diceResult);
    if(diceResult==10)
    {
        mostNum=dice;
        break;
    }
    limit++;

}
let leastNum=myMap.get(1);
let KeyLeast=1;
for(let [key,value] of myMap)
{
    if(value<=leastNum)
    {
        least=value;
        KeyLeast=key;
    }
    console.log(key+" = "+value);
}
console.log("Least number of times "+KeyLeast);
console.log("Most number of times "+mostNum);