function createQuote(quote, myFunction){ 
    var myQuote = "Like I always say, " + quote;
    myFunction(myQuote); // callback
}

function logQuote(quote){
    console.log(quote);
}
createQuote("eat your vegetables!", logQuote); // 1

// Result in console: 
// Like I always say, eat your vegetables!