const var1 = require("./file1")
// const{a:a3,add:add3,b:b3} =require("./file3") aliasing
const{a,add,b} =require("./file3")



// console.log(a);
// console.log(b);
// console.log(add(5,9));
// console.log(add(a,b));
console.log(a);
console.log(b);
console.log(add(5,9,3));
console.log(add(a,b,2));

console.log(var1.a);
console.log(var1.b);
console.log(var1.add(9,3));
// console.log(var1.add(a,b));

// console.log(module);

