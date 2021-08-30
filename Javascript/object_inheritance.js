let obj1 = {
    a: 10,
    b: 20, 
    c: 30
}

let obj2 = Object.create(obj1)
obj2.p = 'adg'
obj2.q = 'dgn'
obj2.r = 'dfn'

let obj3 = Object.create(obj2)

console.log(obj3)
console.log(obj3.__proto__)
console.log(obj3.__proto__.__proto__)
console.log(obj3.__proto__.__proto__.__proto__)

// if we check like "obj3.__proto__ == obj2" then output will be true.
// similarly --> obj3.__proto__.__proto__ == obj1

/* 
    obj2.a -> it will try to find a in obj2
        -> if not found, 
        -> it will try to find it in obj2.__proto__
        -> if not found,
        -> it will try to find it in obj2.__proto__.__proto__
        -> ... and so on... 
        -> till .__proto__ becomes null
*/