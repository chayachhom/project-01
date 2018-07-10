//function - input(argument), code, output(return value)


//challenge

let tempConverter = function (num) {
    let fahrenheightConverter = (num - 32) * 5 / 9;
    return fahrenheightConverter;
}

let tempOne = tempConverter(68);
let tempTwo = tempConverter(32);

console.log(tempOne);
console.log(tempTwo);