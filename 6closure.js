// closure
// do not do "var that=this" use IIFE
// curring
// private attributes


function Student(){
  var privateA = 100;
  // err = 1;
  return {
    name : "abcd",
    info : function(){
      console.log(privateA);
    }
  }
}

var s1 = new Student();
s1.info();
console.log(s1.name)
console.log(s1.privateA)
s1.info()

// console.log(err);


// currying

function outer(val1){
  return function(val2){
    return val1 + val2;
  }
}

inner = outer(100);
console.log(inner(10));


inner = outer(200);
console.log(inner(5));
console.log(inner(-5));


// do not do that=this

// variation 1 : that=this
// var user = {
//   name: "Obama",
//   data: [
//     {'exam': 'GRE', 'score': 100}
//   ],

//   clickHandler: function(event){
//     var that = this;
//     this.data.forEach(function(o){
//       console.log( this.name + " scored " + o.score + " in exam " + o.exam);
//       console.log( that.name + " scored " + o.score + " in exam " + o.exam);
//     })
//   }
// }

// user.clickHandler();


// variation 2 : use bind
// var user = {
//   name: "Obama",
//   data: [
//     {'exam': 'GRE', 'score': 100}
//   ],

//   clickHandler: function(event){
//     // var that = this;
//     this.data.forEach(function(o){
//       console.log( this.name + " scored " + o.score + " in exam " + o.exam);
//       // console.log( that.name + " scored " + o.score + " in exam " + o.exam);
//     }.bind(this))
//   }
// }

// user.clickHandler();


// IIFE

(function(v1){
  console.log(v1);
})(100);

// 6 ends