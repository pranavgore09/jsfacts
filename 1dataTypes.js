

 // Java is to JavaScript what Car is to Carpet

// Lets Discuss Javascript Facts

// This is not about -
// looping, variable declaration, usage, conditional flow
// push, pop, map, reduce...and all that stuff..


// This is going to be Conceptual Harrasement only.



/*
j================ Data Types ===============

      Simple (object like, immutable)
                  Number
                  String
                  Boolean
            Empty:-
                  Null
                  Undefined

      Everything else is Object - Functions, arrays, regular_expr, objects

*/

var all_types = {
  a : 100,
  b : "str",
  c : true,
  d : {},
  e : [],
  f : null,
  g : undefined
}

function logMe(item){
  console.log(typeof all_types[item], all_types[item]);
}

for (var property in all_types) {
    if (all_types.hasOwnProperty(property)) {
        logMe(property);
    }
}

var h;
console.log(h)

// 1 ends