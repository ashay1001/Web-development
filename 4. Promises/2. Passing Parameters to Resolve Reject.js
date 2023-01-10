var loginStatus = true;

var promise = new Promise( (resolve, reject) => {

    //wait for 1 second
    setTimeout( () => {
        if(loginStatus)
        {
            resolve("User Logged in");
        }
        else{
            reject("User not Logged in");
        }
    }, 1000);
})

promise.then( (sucMsg) => {
    console.log(sucMsg);
}).catch( (errMsg) => {
    console.log(errMsg);
});
