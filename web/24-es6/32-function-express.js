var obj = {
    foo: function () {
        console.log('foo')
    },
    bar: function () {
        this.foo();
    }, // trailing comma is legal in ES5
}