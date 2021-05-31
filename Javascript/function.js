var x = 10
console.log("var x = ",x, typeof x)

let y = 12.11
console.log("let y = ",y, typeof y)

/*################################################################## */

console.log("a is: ",a, "typeof a: ",typeof a)
console.log("calling function a():",a(), typeof a())

/*  we can call function a() here though it is defined later.
    This is because of hoisting. Hoisting is JavaScript's default behavior of moving declarations to the top.
    In other words; a variable can be used before it has been declared. 
*/

function a()
{
    return 100;
}

/*
Variables defined with let and const are hoisted to the top of the block, but not initialized.
Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
Using a let variable before it is declared will result in a ReferenceError.

name = "Mario"    --> Uncaught ReferenceError: Cannot access 'name' before initialization
console.log("Accessing let name: ", name)
let name;

*/

//console.log(square())  --> Uncaught ReferenceError: Cannot access 'square' before initialization (var square = function() --> this will also give reference error)

let square = function(){   
    return "Inside square function"
}
console.log(square())

let area = function(r,t){

    if(t == undefined)   // we can also write like if(t == null), if(typeof t == 'undefined') , if(!t) 
    {
        return Math.PI * r * r;
    }
    return r*t;
}

console.log("Calling area(20) with one parameter: ", area(20))
console.log("Calling area(10,16) with two parameteres: ", area(10,16))

/*
when we call function with some parameter then they are stored inside the 'arguments' array.
*/

let test = function(){
    console.log("Inside test() function arguments passed are: " , arguments[0], arguments[1],arguments[2], arguments[3])
}

test(1,2,"Hello", "Rahul")