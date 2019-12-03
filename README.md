# learn-javascript

## Day 8

function handleClick(event){
    // implement the click functionality here
    // event - event.target
}

var btn = document.getelementbyId('btn');
btn.onclick = handleClick;

// anonymous function
var btn = document.getelementbyId('btn');
btn.onclick = function(){
    /// 
}

// event handling

function sum(a,b){ // parameters a and b
    return a+b;
}

sum(10,30);// 10 and 30 are reference