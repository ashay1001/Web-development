// Promise is a javascrpt object that links producing code and consuming code.
// "Producing code" is code that can take some time and "Consuming code" is code that must wait for the result

let loginStatus = true

let promise = new Promise((resolve, reject) => {

	setTimeout( () => {
		
		if(loginStatus){
			resolve()
		}
		else{
			reject()
		}

	}, 2000)

})


promise.then( () => {					// resolve callback
	console.log("User is logged in")
}).catch( () => {						// reject callback
	console.log("User is not logged in")
})


// Passing parametres to resolve and reject
//  we generally wrap promise inside the function and it returns the promise

let check = true

function checkStatus(){

	let promise2 = new Promise((resolve, reject) => {

	setTimeout( () => {

			if(check)
			{
				resolve("check variable is set to true")
			}
			else{
				reject("check variable is set to false")
			}
		}, 3000)
	})

	return promise2
}

checkStatus().then( (msg) => {
	console.log(msg)
}).catch( (msg) => {
	console.log(msg)
})


// we can also use the chain of promises like checkUserLogin().then(fetchFriends).then(fetchMessages)........