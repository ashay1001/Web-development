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

let letters = ["A","b","c","D","E","f"]

for(let i=0; i<letters.length;i++)
{
    console.log(letters[i])
}

letters.push("G")
console.log("after push('G') letters: ",letters)

letters.pop()
console.log("after pop() letters: ",letters)

console.log("Index of e: ",letters.indexOf("e"))
console.log("Index of E: ",letters.indexOf("E"))

console.log("Calling letters.shift()", letters.shift())
console.log("letters after shift()",letters)

console.log("Calling letters.unshift('Z')", letters.unshift("Z"))
console.log("letters after unshift('Z')",letters)


//################## Objects ################

/*
javascript allows to create objects without creating class.
given below is one way of creating javascript object.
it is Javascript object notation (JSON).
*/
var bird = {
    x: 100,
    y: 200,
    name: "pigion",
    arr: ["white","black","red","grey"],

    fly: function(){
        console.log("Inside bird object:", this.arr[3], this.name, "Flying at: ",this.x, this.y)
    }
}

console.log("bird.x =", bird.x)
bird.fly()

//######## another way of creating an object #########

function fruit(taste, color)
{
    this.color = color
    this.taste = taste
}

let apple = new fruit("sweet","red")
let banana = new fruit("sweet","yello")

console.log(apple)
console.log("type of banana: ", typeof banana)

//####### class in javascript ########

//using class declaration (Not Hoisted)

class fruitClass1{
    constructor(color, taste)
    {
        this.color = color
        this.taste = taste
    }
}

let orange = new fruitClass1("orange", "sweet")
console.log("orange is: ", typeof orange, ",printing orange:", orange)

// using class expression (Not Hoisted)

let fruitClass2 = class{
    constructor(color, taste)
    {
        this.color = color
        this.taste = taste
    }
}

let kiwi = new fruitClass2("green", "sour")
console.log("kiwi is: ", typeof kiwi, ",printing kiwi:", kiwi)
