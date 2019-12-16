setTimeout(function(){
    console.log("Hello World");
},1);

function foo() {
    // NOTE: don't ever do crazy long-running loops like this
    for (var i=0; i<=1E10; i++) {
        console.log(i);
    }
}

foo();

// Here, the for loop will take a fairly long time to complete, 
// well more than one millisecond, but our timer callback with 
// the console.log(..) statement cannot interrupt the foo() function 
// while it's running, so it gets stuck at the back of the line 
// (on the event-loop) and it patiently waits its turn.

// What if foo() could be interrupted, though? Wouldn't that cause havoc in our programs?

// That's exactly the nightmares challenges of multi-threaded programming, but we are quite 
// fortunate in JavaScript land to not have to worry about such things, because JS is 
// always single-threaded (only one command/function executing at any given time).