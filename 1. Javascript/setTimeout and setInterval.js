 
/* function print(){

 	console.log("Hi There!")
 }

console.log("Timer started....")
 setTimeout(print, 2000)
*/

// setInterval(print, 1000)  // repeatedly prints with 1 sec delay


var intervalId;
var counter = 0;

function count(){

	counter++;
	
	if(counter > 8)
	{
		clearInteval(intervalId);
	}

	console.log(counter);
}

console.log("Counting started");

intervalId = setInterval(count, 1000)