const m1 = require("./MyModules/mod1.js")

const m2 = require("./MyModules/mod2.js")

const m3 = require("./MyModules/mod3.js")

const m4 = require("./MyModules/mod4.js")
console.log(m1);


let total = m1.sum();

console.log(total);

console.log(m2);

console.log(m3);

console.log(m3.div(10, 5));
console.log(m3.mul(10, 5));
console.log(m3.sub(10, 5));
console.log(m3.sum(10, 5));

console.log(m4);