const obj = {
    foo() {
        console.log('foo')
    },
    bar() {
        this.foo();
    },
}