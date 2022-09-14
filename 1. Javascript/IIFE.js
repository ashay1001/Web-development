// immediately invoked function expression 

function hello(){

	console.log("Hello There...!!!")
}

//hello()


/*
(function() {
	console.log("Hello There!!")
})()
*/


/*
(function (){

console.log("2^3", Math.pow(2,3))
console.log("sqrt(4)", Math.sqrt(4))
console.log("Tan(22/7)",Math.tan(22/7))
})()
*/

(function (p, q, r, s){

p("2^3 = ", q(2,3))

p("sqrt(4) = ", r(4))

p("Tan(22/7) = ", s(22/7))

})(console.log, Math.pow, Math.sqrt, Math.tan)