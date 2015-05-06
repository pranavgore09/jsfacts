
// Object.create
// retrieve
// reference -> deep copy.

var empty = {}

var point = {
  x:100,
  y:200,
  z:300
}

var anotherPoint = {
  x: point.x,
  y: point.y,
  z: 400
}

var books = {
  "main title": "Javascript Ninja",
  "sub-title": undefined,
  author:{
    'name': 'John Resig',
    'description': 'Creator of $'
  }
}

var obj = new Object()
var cars = new Array()
var today = new Date()

var information = new Object({'parentVariable': true}) // will create with given prototype

// Accessing values, like associative arrays in some cases
console.log(books["main title"]);
console.log(books.author);
console.log(books.author.name);
console.log('salute ', books.author.name);

books.author.description += ', thats JQuery.'
console.log(books.author.description);

// testing hasOwnProperty and canInumerate ?
console.log(books.hasOwnProperty('title'))
console.log(books.hasOwnProperty('author'))

console.log(books.propertyIsEnumerable('title'))
console.log(books.propertyIsEnumerable('author'))

// serializing
stringOfObject = JSON.stringify(books)
backToOriginal = JSON.parse(stringOfObject)
console.log(stringOfObject)
console.log(backToOriginal)


// delete operator deletes only reference and not memory as C++
delete books['author']
console.log(books)

// 2 ends

var x1 = {a:100}
var x2 = x1
delete x1
console.log(x2)
// delete operator deletes only reference and not memory as C++

// Everything is reference

var a = {}, c = {}, c = {}
var a,b,c={}

// "TYPEOF"

why things work the way they work-> http://perfectionkills.com/understanding-delete/


