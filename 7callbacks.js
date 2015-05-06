// Explain callback architecture with example

http://code.danyork.com/2011/01/25/node-js-doctors-offices-and-fast-food-restaurants-understanding-event-driven-programming/


function _do_callback(bool, cb){
  if(bool){
    if(typeof cb === 'function'){
      cb();
    }
  }
}

_do_callback(true, function(){console.log("Who called me ?")})

_do_callback(true, "hello")

_do_callback(false)


// 7 ends