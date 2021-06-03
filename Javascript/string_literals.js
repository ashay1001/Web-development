let s1 = 'He said, "This is is awesome!"'
console.log("s1:",s1)

let s2 = "He said, \"This is is awesome!\""
console.log("s2:",s2)

let s3 = "He said, 'This is is awesome!'"
console.log("s3:",s3)

let s4 = `He said, 'This is is awesome!'`
console.log("s4:",s4)

let s5 = "This string is \n in multiple lines"
console.log("s5:",s5)

let s6 = `
    This string
    is in multiple lines
`
console.log("s6:",s6)

let name = 'John'
let g1 = 'Good Morning ' + name
console.log("g1:",g1)

let g2 = `Good Morning ${name}`     //$ will only work with ` `, it will not work with " " or ' '
console.log("g2:",g2)

let s7 = `10 + 2 = ${10 + 2}`
console.log("s7:",s7)