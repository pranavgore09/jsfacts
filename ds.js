// 1.stack C style
// 2.stack JS style
// 3.Queue C style
// 4.Queue JS style
console.log('\n <==================>')
console.log('Example of C style Stack')
// Build stack('C' style) using linked list.
// we do not use pointer specific syntax because objects are reference.
var Stack = function(){
  this.node = function(data){
    this.data = data || {}
    this.next = undefined
  }
  this.head = undefined
  this.show = function (argument) {
    if(this.isEmpty()){
      console.log('Empty List')
      return
    }
    var traveller = this.head
    console.log('Elements in the list')
    while(traveller){
      console.log(traveller.data)
      traveller = traveller.next
    }
  }
  this.push = function(item){
    if(!this.head)
      this.head = new this.node(item)
    else{
      var traveller = this.head
      while(traveller.next)
        traveller = traveller.next
      traveller.next = new this.node(item)
    }
  },
  this.isEmpty = function(){
    return this.head === undefined
  },
  this.pop = function(item){
    if(this.isEmpty())
      return
    var traveller, prev
    traveller = prev = this.head
    while(traveller.next){
      prev = traveller
      traveller = traveller.next
    }
    console.log('last object is->', traveller.data)
    prev.next = undefined
  }
}
var s1 = new Stack()
s1.push(1)
s1.push(2)
s1.push(3)
s1.push(4)
s1.push(5)
s1.show()
s1.pop()
s1.show()
s1.push(5)
s1.push(6)
s1.show()
s1.pop()
s1.show()
console.log('\n <==================>')
console.log('Example of JS style Stack')
// Build stack('JS' style)
var JSStack = []
JSStack.push(1)
JSStack.push(2)
console.log(JSStack)
JSStack.pop()
console.log(JSStack)
JSStack.push(3)
console.log(JSStack)



console.log('\n <==================>')
console.log('Example of C style Queue')
var Q = function() {
  this.node = function(data){
    this.data = data || {}
    this.next = undefined
  }
  this.head = undefined
  this.end = undefined
  this.show = function (argument) {
    if(this.isEmpty()){
      console.log('Empty List')
      return
    }
    var traveller = this.head
    console.log('Elements in the list')
    while(traveller){
      console.log(traveller.data)
      traveller = traveller.next
    }
  }
  this.add = function(item){
    if(!this.head){
      this.head = new this.node(item)
      this.end = this.head
    }
    else{
      this.end.next = new this.node(item)
      this.end = this.end.next
    }
  },
  this.isEmpty = function(){
    return this.head === 'undefined'
  }
  this.remove = function(item){
    if(this.isEmpty())
      return
    console.log('First object is->', this.head.data)
    var newHead = this.head.next
    delete this.head
    this.head = newHead
  }
}
var q1 = new Q()
q1.add(1)
q1.add(2)
q1.add(3)
q1.show()
q1.add(4)
q1.show()
q1.remove()
q1.show()
console.log('\n <==================>')
console.log('Example of JS style Queue')
// Build queue('JS' style)
var JSQ = []
JSQ.push(10)
JSQ.push(40)
console.log("list is", JSQ)
var i = JSQ.shift()
console.log(i)
