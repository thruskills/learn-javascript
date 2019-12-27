var fs = require('fs');
console.log('Program starting...')
fs.readFile('input.txt', function(error, data){
    if(error){
        console.log('Error: ' + error);
    }else{
        console.log(data.toString());
    }
});
console.log('Program ended.');