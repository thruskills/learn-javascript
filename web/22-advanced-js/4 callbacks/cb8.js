//Use the Call or Apply Function To Preserve this

//Note that we have added an extra parameter for the callback object, called "callbackObj"
function getUserInput(firstName, lastName, callback, callbackObj)  {
    // Do other stuff to validate name here

    // The use of the Apply function below will set the this object to be callbackObj
    callback.apply (callbackObj, [firstName, lastName]);
}

/*
With the Apply function setting the this object correctly, we can now 
correctly execute the callback and have it set the fullName property 
correctly on the clientData object:
*/

/* 
We pass the clientData.setUserName method and the clientData object as 
parameters. The clientData object will be used by the Apply function 
to set the this object
*/

getUserInput ("Barack", "Obama", clientData.setUserName, clientData);

// the fullName property on the clientData was correctly set
console.log (clientData.fullName); // Barack Obama

/*

Call takes the value to be used as the this object inside the function as 
the first parameter, and the remaining arguments to be passed to the function 
are passed individually (separated by commas of course). 

The Apply function’s first parameter is also the value to be used as 
the this object inside the function, while the last parameter is an 
array of values (or the arguments object) to pass to the function.

*/