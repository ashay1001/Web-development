/*
A function that accepts and/or returns another function is called a higher-order function.
*/
function sayHello(str)
{
    function sayName(name)
    {
        console.log(str, name())
    }
    return sayName          //return sayName()
}

function getInput()
{
    return document.getElementById('inputTxt').value
}

let x1 = sayHello("Hello")
let x2 = sayHello("Hi")
//console.log(x)

//x1("Rahul")
//x2("Shubham")

//##############################################

function outer(arg1){
    let var1 = 10;

    function inner(arg2){
        let var2 = 20;
        console.log(arg1, var1, arg2, var2)
    }
    return inner
}

let g1 = outer("outer parameter")
g1("inner parameter")