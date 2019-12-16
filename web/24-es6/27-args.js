function logAllArguments(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}
logAllArguments('abcd', 123);