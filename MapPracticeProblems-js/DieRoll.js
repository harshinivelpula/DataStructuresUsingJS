var count1 =0;
var count2=0;
var count3 =0;
var count4=0;
var count5 =0;
var count6=0;
var Value=0;
var Dict = {1:count1,2:count2,3:count3,4:count4,5:count5,6:count6};
function RollDice()
{
    while((count1 < 10) && (count2 < 10) && (count3 < 10) && (count4 < 10) && (count5 < 10) && (count6 < 10))
    {
        Value = Math.floor(1+(Math.random() * 6));
        if(Value == 1)
        {
            count1++;
            Dict[1]= count1;
        }
        else if(Value == 2)
        {
            count2++;
            Dict[2] = count2;
        }
        else if(Value == 3)
        {
            count3++;
            Dict[3]= count3;
        }
        else if(Value == 4)
        {
            count4++;
            Dict[4]= count4;
        }
        else if(Value == 5)
        {
            count5++;
            Dict[5] = count5;
        }
        else if(Value == 6)
        {
            count6++;
            Dict[6] = count6;
        }
    }
    console.log(count1,count2,count3,count4,count5,count6)
    for(let i=1;i<=6;i++)
    {
        console.log("Value in Dictionary : "+Dict[i]);
    }

}
RollDice();