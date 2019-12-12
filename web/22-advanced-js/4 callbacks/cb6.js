function getInput(options, callback) {
    allUserData.push(options);

    // Make sure the callback is a function
    if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable
        callback(options);
    }
}