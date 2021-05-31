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
    10: 32246,
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