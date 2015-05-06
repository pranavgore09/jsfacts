// var
// this
// variable hoisting
// context/subject of a function depends upon how we call the function
// passing context to the function bind, call, apply

var a = 100;

function first(){
  var a = 200;
  console.log(a);
}
first()
console.log(a);
console.log('--------------------->');
// ---------------------> 200, 100

var b = 100;

function second(b){
  console.log(b);
}

second(99);
console.log(b);
console.log('--------------------->');
// ---------------------> 99, 100

var c = 100;

function third(){
  c = 1000;
  console.log(c);
}

third();
console.log(c);
console.log('--------------------->');
// ---------------------> 1000, 1000

var d = 100

function four(){
  var d = 500;
  return function(){
    console.log(d);
  }
}

five = four();
five();
console.log(d);
console.log('--------------------->');
// ---------------------> 500, 100


var e = 100

function six(){
  e = 500;
  return function(){
    console.log(e);
  }
}

seven = six();
seven();
console.log(e);
console.log('--------------------->');
// ---------------------> 500, 500


// Deal with the DON 'this'
// http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/


function person(){
  var firstName = "Don";
  var lastName = "Corleone";
  this.fullName = function () {
      console.log(this.firstName + " " + this.lastName);
      console.log(firstName + " " + lastName);
  }
}

var p = new person()
p.fullName()

console.log('--------------------->')
// ---------------------> undefined undefined \n Don Corleone

function secondPerson(){
  this.firstName = "Michael";
  this.lastName = "Corleone";
  this.fullName = function () {
      console.log(this.firstName + " " + this.lastName);
      // console.log(firstName + " " + lastName);
  }
}

var p = new secondPerson()
p.fullName()

console.log('--------------------->')
// ---------------------> Michael Corleone \n Error


var firstName = "Tom", lastName = "Hanks"
window.globalFullName = function(){
  console.log(this.firstName + " " + this.lastName);
}
window.globalFullName()
console.log('--------------------->')
// ---------------------> Tom Hanks

var p1 = new person()
p1.fullName.apply(new secondPerson());
console.log('--------------------->')
// ---------------------> michael Corleone, Don Corleone

var p2 = new person();
functionRef = p2.fullName.bind(new secondPerson());
functionRef();
console.log('--------------------->')
// ---------------------> michael Corleone, Don Corleone


// Variable Hoisting
// function eight(){
//   console.log(xyz);
//   xyz=100;
//   console.log(xyz);
// }
// eight()
// console.log('--------------------->')
// // ---------------------> ERROR..

function eight(){
  console.log(xyz);
  var xyz=100;
  console.log(xyz);
}
eight()
console.log('--------------------->')
// ---------------------> undefined, 100


function nine(){
  console.log(this);
}

// Change Function Context == this object according to the need
nine() // window/global obj
console.log('--------------------->')
p1.fullName() // object owning method
console.log('--------------------->')
new nine() // empty object
console.log('--------------------->')
nine.apply(p1)
console.log('--------------------->')

// 5 ends

// store deeply nested objects to local variables if used more than once
// e.g> var m = window.all.elements[0].target_object
// e.g> var target_ele = $('#someID').data.particular
