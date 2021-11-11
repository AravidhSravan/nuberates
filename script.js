let y=Math.floor(Math.random()*100 + 1);
console.log(y);
let count = 10;
function check(x)
{
    console.log('this is num :',x);
    if(count>1)
    {
        if(x == y)
        {
            location.href="won.html";
        }
        else
        {
            count = count -1;
        }
        document.getElementById("attempts").innerHTML=count;
    }
    else 
    {
        location.href="loss.html";
    }
}
