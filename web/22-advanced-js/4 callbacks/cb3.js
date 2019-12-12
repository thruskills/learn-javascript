function createQuote(quote, functionToCall) { 
    var myQuote = "Like I always say, " + quote;
    functionToCall(myQuote);
}