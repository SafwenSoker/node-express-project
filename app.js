const amount = 12;
if (amount < 10) {
    console.log("Small number")
}
else {
    console.log("Big numbber")
}
const names = require("./names")
const alternative = require("./alternative")
require("./automatic-running-function")
console.log(alternative)
const sayHi = (name) => {
    console.log(name)
}
sayHi("Amine")
sayHi(names.safwen)
sayHi(names.amine)