setTimeout(function(){
    console.log("Hello World");
},1000);
function *foo() {
    yield 1;
    return 2;
}
var it = foo();

console.log( it.next() ); // { value:1, done:false }
console.log( it.next() ); // { value:2, done:true }