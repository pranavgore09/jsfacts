// This method adds the equivalent of ruby's responds_to?
// This is also to show the prototypal inheritance supported natively
// by JS. The following will make the 'has_method' method a part of every
// Object
//
Object.prototype.has_method = function(method_name) {
  return (typeof this[method_name]) == "function"
}

// Our own OO, built from scratch using closures

var Person = function(p) {
  // The following vars are 'private' properties, available
  // only via the functions below, since the functions form
  // closures around the vars they refer to
  var gender = p.gender || "female";
  var fname = p.fname || (gender == "female" ? "Eve" : "Adam");
  var lname = p.lname || "";
  var age = p.age || 0;

  // Our object that we will send out into the world
  var that = {};
  that.age = age;
  that.is_male = function() { if(gender != "female") { return true;} }
  that.is_female = function() { return !is_male(); }
  that.full_name = function() { 
    var name = fname;
    if(lname != "") {
      name += " " + lname;
    }
    return name;
  }

  return that;
}


var Employee = function(p) {
  // Inherit from an object or ad onto it
  // See example of usage below
  var that = p.person || Person(p);
  var salary = p.salary;

  // Add our own public method
  that.bonus = function() {
    var multiplier = this.is_male() ? 0.25 : 0.3;
    return salary * multiplier;
  }
  return that;
}

// Create a 'child class' object
a = Employee({ gender : "male", age : 100, salary: 25000 });
console.log(a.full_name() + " will get a bonus of Rs. " + a.bonus().toString());


// Create a parent class object
p = Person({ gender : "female", age : 100});

// Create a child class object directly from the parent object
a = Employee({ person : p,  salary: 25000 });
console.log(a.full_name() + " will get a bonus of Rs. " + a.bonus().toString());
