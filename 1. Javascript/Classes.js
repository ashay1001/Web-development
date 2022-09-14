class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  isAdult() {               //this function will be present in Person.prototype
    return this.age >= 18
  }
}

let p1 = new Person('John Doe', 22)
let p2 = new Person('Jane Doe', 15)

console.log(typeof Person) // this is "function" & there is NO new datatype called 'class'

console.log(Person)
console.log(p1)

console.log("Person.prototype: ", Person.prototype)
console.log("p1.__proto__: ", p1.__proto__)

console.log(p1.__proto__ == Person.prototype) // true

console.log(p1.__proto__.__proto__ == Object.prototype) // true 

console.log("Calling isAdult via p1: ",p1.isAdult())
console.log("Calling isAdult via p2: ",p2.isAdult())

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }
}

let s1 = new Student('Harry Potter', 13, 5)
let s2 = new Student('Hermoine Granger', 14, 6)

console.log(s1.__proto__ == Student.prototype)
console.log(s1.__proto__.__proto__ == Person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)

// inheritance chain 
// Object.prototype -> Person.prototype -> Student.prototype

// no inheritance between the classes (actually they are functions) i.e  Object -xxx-> Person -xxx-> Student  