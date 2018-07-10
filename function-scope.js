//global scope (tempConverter, tempOne, tempTwo)
    //local scope (celsius, fahrenheit)
        //local scope (isFreezing)


let tempConverter = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;

    if (celsius <= 0) {
        let isFreezing = true;
    }

    return celsius;
}

let tempOne = tempConverter(68);
let tempTwo = tempConverter(32);

console.log(tempOne);
console.log(tempTwo);