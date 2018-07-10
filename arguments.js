let name = 'Jen';
let age = 33;
console.log(`Hey, my name is ${name}! I am ${age} years old.`);


//get tip challenge

let getTip = function (subTotal, tipPercent) {
    return subTotal * tipPercent;
}

let getTotal = function (subTotal, tipPercent) {
    return subTotal + tip;
}

let subTotal = 100;
let tipPercent = .5;

console.log(`The subtotal is ${"$" + subTotal}`);

let tip = getTip(subTotal, tipPercent);
console.log(`The tip amount is ${"$" + tip}`);

let total = getTotal(subTotal, tipPercent);
console.log(`The total amount is ${"$" + total}`);