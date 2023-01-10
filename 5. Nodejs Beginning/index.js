

console.log("Hello World!!");

function add(a, b){
    return a + b;
}

console.log("Addition is: ", add(2, 5));

console.log(add);

console.log("process.argv:",process.argv);

var args = process.argv.slice(2);

console.log("Addition is: ", add(parseInt(args[0]), parseInt(args[1])));


const operations = require('./operations')
console.log("Addition from operation module: ", operations.add(4,6));
console.log("Multiplication from operation module: ", operations.multiply(4,6));

/*

node index.js

node index.js 3 5
*/