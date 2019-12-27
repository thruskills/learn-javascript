var fs = require("fs");

var doProcess = function(error, data){
    if(error){
        console.log('An error has occured '+ error);
    }
    console.log(data.toString());
};

fs.readFile('input1.txt', doProcess);


console.log("Program Ended");