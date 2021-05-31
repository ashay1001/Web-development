//###### variables #######

a = 10      //golabal scope
var b = 20  //function scope    
let c = 30  //block scope

let arr = [1,2,3,4,5]

console.log(arr)

function scopeTest()
{
    if(true)
    {
        var i = 20;
        console.log("Inside if block i =", i)
    }
    console.log("Outside if block i =", i)     //if i is declared as let i, then this line will give error as --> ReferenceError: i is not defined
}
scopeTest()

//console.log(i)   ReferenceError: i is not defined

//###### arrays #######