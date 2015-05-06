// --------==========---------
// 1. Write a function that takes an argument and returns that argument.
function identity(x){
  return x
}
// console.log(identity(100)) //100




// --------==========---------
// 2. Write two binary functions, add and mul,
// that take two numbers and return their sum and their product.
function add(a, b){
  return a+b
}
function mul(a, b){
  return a*b
}
// console.log(add(3, 4)) // 7
// console.log(mul(3, 4)) // 12




// --------==========---------
// 3. Write a function that takes an argument and returns a function that returns that argument.
function identityf(arg){
  return function(){
    return arg
  }
}
// idf = identityf(3);
// console.log(idf())   // 3




// --------==========---------
// 4. Write a function that adds from two invocations
function addf(a){
  return function(b){
    return a+b
  }
}
// console.log(addf(3)(4)) // 7




// --------==========---------
// 5. Write a function that takes a binary function, and makes it callable with two invocations.
function applyf(binF){
  return function(a){
    return function(b){
      return binF.call(null, a, b)
    }
  }
}
// addf = applyf(add);
// console.log(addf(3)(4))      // 7
// console.log(applyf(mul)(5)(6))  // 30




// --------==========---------
// 6. Write a function that takes a function and an argument, and returns a
// function that can supply a second argument.
function curry(fun, arg){
  return function(b){
    return fun.call(null, arg, b)
  }
}
// add3 = curry(add, 3);
// console.log(add3(4))               // 7
// console.log(curry(mul, 5)(6))      // 30




// --------==========---------
// 7. Without creating any new functions, show three ways to create the inc function.
// inc = curry(add, 1)
// inc = applyf(add)(1)
inc = addf(1)
// console.log(inc(5))       //6
// console.log(inc(inc(5)))  //7




// --------==========---------
// 8. Write methodize, a function which converts a binary function to a method.
function methodize(fun){
  return function(b){
    return fun.call(null, this, b)
  }
}
Number.prototype.add = methodize(add);
// console.log((3).add(4))    // 7




// --------==========---------
// 9. Write demethodize, a function that converts a method to a binary function.
function demethodize(fun){
  return function(a, b){
    return fun.call(a, b)
  }
}
// console.log(demethodize(Number.prototype.add)(5, 6))  // 11




// --------==========---------
// 10. Write twice, a function which takes a binary function and
// returns a unary function that passes its argument to the binary function twice.
function twice(binF){
  return function(a){
    return binF.call(null, a, a)
  }
}
var doublee = twice(add);
// console.log(doublee(11))    // 22
var square = twice(mul);
// console.log(square(11))    // 121




// --------==========---------
// 11. Write composeu, a function which takes two unary functions
// and returns a unary function that calls them both.
function composeu(u1, u2){
  return function(a){
    return u2(u1(a))
  }
}
// console.log(composeu(doublee, square)(3))  // 36




// --------==========---------
// 12. Write composeb, a function which takes two binary functions
// and returns a function that calls them both.
function composeb(b1, b2){
  return function(a, b, c){
    return b2(b1(a, b), c)
  }
}
// console.log(composeb(add, mul)(2, 3, 5))  // 25




// --------==========---------
// 13. Write once, a function which takes a function
// and returns a function that can only be called once.
function once(fun){
  return function(a, b){
    if(typeof fun === 'function'){
      result = fun(a,b)
      fun = undefined
      return result
    }else
      throw 'You can call it only once'
  }
}
// add_once = once(add);
// console.log(add_once(3, 4))        // 7
// console.log(add_once(3, 4))        // throw!





// --------==========---------
// 14. Write a factory function that returns two functions that implement an up/down counter.
function counterf(val){
  return {
    inc: function(){
      return val++
    },
    dec: function(){
      return val--
    }
  }
}
// counter = counterf(10);
// console.log(counter.inc())    // 11
// console.log(counter.dec())    // 10




// --------==========---------
// Make a revocable function that takes a nice function,
// and returns a revoke function that denies access to the nice function,
// and an invoke function that can invoke the nice function until the nice funciton is revoked.
function revocable(fun){
  return {
    invoke: function(){
      if(typeof fun === 'function')
        fun.apply(null, arguments)
      else
        throw 'Already revoked'
    },
    revoke: function(){
      fun = 'undefined'
    }
  }
}
temp = revocable(alert);
temp.invoke(7);          // alert: 7
temp.revoke();
temp.invoke(8);          // throw!
