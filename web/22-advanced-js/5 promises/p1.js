var promise = new Promise(function(resolve, reject) {
    // do thing, then…
    if (/* everything worked */) {
        resolve("See, it worked!");
    }
    else {
        reject(Error("It broke"));
    }
});