
// []
// length property
// =============== /o\ What to use and where ? ============== //


var numbers = [1,2,3,4,5]

console.log(numbers.length)
console.log(typeof numbers)

var obj = {}

console.log(typeof numbers === typeof obj)

numbers[5000] = -1;
numbers[700] = 700;
numbers[15000] = -1;
console.log(numbers.length)

var matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(matrix[2][0])


for (var i=1; i<5; i++){
  $('#div_' + i).click(function(){
      console.log(i);
  });
}


for (var i=1; i<5; i++){
  (function(j) {
    $('#div_' + j).click(function(){
        console.log(j);
    });
  })(i); //IIFE
}


// 3 ends