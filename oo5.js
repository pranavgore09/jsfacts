function Person (p) {
    this.gender = p.gender || "female";
    this.fname = p.fname || (this.gender == "female" ? "Eve" : "Adam");
    this.lname = p.lname || "";
    this.age = p.age || 0;
    return this;
}
Person.prototype.is_male = function() {
  if (this.gender != "female") {
    return true;
  }
}
Person.prototype.is_female = function() {
    return !is_male();
}
Person.prototype.full_name = function() {
  var name = this.fname;
  if (this.lname != "") {
    name += " " + this.lname;
  }
  return name;
}

function Employee (p) {
  Person.call(this,p);
  this.salary = p.salary;
  return this;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.bonus = function() {
    var multiplier = this.is_male() ? 0.25 : 0.3;
    return this.salary * multiplier;
}

// Create a 'child class' object
a = new Employee({ gender : "male", age : 100, salary: 25000 });
console.log(a.full_name() + " will get a bonus of Rs. " + a.bonus().toString());
