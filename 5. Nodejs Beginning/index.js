console.log("Hello World!!");

function add(a, b){
    return a + b;
}

console.log("Addition is: ", add(2, 5));

console.log(add);

console.log(process.argv);

var args = process.argv.slice(2);

console.log("Addition is: ", add(parseInt(args[0]), parseInt(args[1])));




/*

node index.js

node index.js 3 5
*/