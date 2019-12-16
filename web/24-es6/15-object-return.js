var obj = { foo: 123 };
var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
var writable = propDesc.writable;
var configurable = propDesc.configurable;
console.log(writable, configurable); // true true