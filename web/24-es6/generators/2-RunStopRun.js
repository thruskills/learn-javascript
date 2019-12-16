// With ES6 generators, we have a different kind of function, 
// which may be paused in the middle, one or many times, 
// and resumed later, allowing other code to run during 
// these paused periods.

function *foo() {
    var x = 1 + (yield "foo");
    console.log(x);
}

var it = foo();
var message = it.next();
console.log(message); // { value:1, done:false }

// yield ___ is called a "yield expression" (and not a statement) 
// because when we restart the generator, we will send a 
// value back in, and whatever we send in will be the computed 
// result of that yield ___ expression.