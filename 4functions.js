// first class citizens
// function invocations
// new keyword
// has prototype

var add = function(x, y){
  return x+y;
}

add(10, 20);
// Invocation patterns.
// 1. function call
// 2. method invocation
// 3. new operator
// 4. apply, call, bind


var books = function(){
  this.name = "JS : The good parts";
  this.getName = function(){
    console.log(this.name);
    return this.name;
  };
  this.setName = function(name){
    this.name = name;
  }
}

var original = new books();
original.getName();

var newBook = new books();
newBook.setName("modified");

original.getName.apply(newBook);

function argsExample(){
  console.log(arguments.length, arguments);
}
argsExample(1,2,3)
argsExample()

// 4 ends

// https://github.com/aharris88/javascript-the-good-parts-exersises

// case ONE -

// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <title>JS Bin</title>
// </head>
// <body>
// <button id="test_1">1</button>
// <button id="test_2">2</button>
// <button id="test_3">3</button>
// <button id="test_4">4</button>

// </body>
// </html>

// window.onload = function(){

//   for (var i=1; i<5; i++){
//     console.log(i)
//   document.getElementById('test_' + i).onclick = function(){
//       alert(i);
//   };
// };

// };


// case TWO

// window.onload = function(){
//   for (var i=1; i<5; i++){
//     (function(j){
//       document.getElementById('test_' + j).onclick = function(){
//           alert(j);
//       };
//     })(i);
// };
// };


