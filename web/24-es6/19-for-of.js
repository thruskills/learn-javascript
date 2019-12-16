var array = ['a', 'b', 'c'];
for (const elem of array) {
    console.log(elem);
}

for (const [index, elem] of array.entries()) {
    console.log(index+'. '+elem);
}