function checkThis() {
    console.log(this)
  }
  
  let obj = {
    "a": 10,      // values inside object are stored as key value pair and key is always a string
    b: 'asdsa',
    c: true,
    d: function () {
      console.log(this)   // "this" here will point to object "obj"
    },
    10: 32246,      //we can not access this as obj.10 as 10 is not a string
    true: 'asdasd',
    e: {            // "e" is an object inside an object
        l: 234,
        m: 'sdgsdg',
        n: function () {
        console.log(this)      // "this" here will point to object "e"
        },
    },
  }

  console.log(obj.c)
  console.log(obj['c'])  // we can also access members in this way

//console.log(obj.10)   this will not work as 10 is not a string
console.log(obj['10'])  //this will work

obj.d()  // "this" inside d() will point to obj itself as it as called with obj

let z = obj.d
z()   // this will point to window. 
      //though z and d are same same function z() is called in scope of window 
      //hence "this" from z will return window

