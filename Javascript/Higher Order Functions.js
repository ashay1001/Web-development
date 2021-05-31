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

