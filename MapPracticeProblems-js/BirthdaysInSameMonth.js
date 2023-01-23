let myMap=new Map();
for(let x=1;x<=12;x++)
{
    myMap.set(x,parseInt(0));
}
for(let y=1;y<=50;y++)
{
    let month=Math.ceil(Math.random()*12);
    let updatePersons=myMap.get(month);
    myMap.set(month,(updatePersons+1));
}
console.log("In a total of 50 people -");
for(let [key,value] of myMap)
{
    console.log(value+" people have their birthdays on month no. "+key);
}