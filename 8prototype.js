// prototype and inheritance

function xyz(){
}
console.log(xyz.prototype.addition);

Function.prototype.addition = function(a,b){
  return a+b;
}

console.log(xyz.prototype.addition);


var Person = function() {
  this.canTalk = true;
  this.greet = function() {
    if (this.canTalk) {
      console.log('Hi, I\'m ' + this.name);
    }
  };
};


var Customer = function(name) {
  this.name = name;
};
Customer.prototype = new Person();

var mark = new Customer('Mark');
mark.greet();


var Employee = function(name) {
  this.name = name;
};
Employee.prototype = new Person();
var david = new Customer('David');
david.canTalk = false;
david.greet();

