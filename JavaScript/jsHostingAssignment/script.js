console.log(a); // undefined
var a = 10;


// console.log(b); // undefined
// var b = 20;
// console.log(b);

console.log(x); 
let x = 5;


console.log(y); //  Error: Cannot access 'y' before initialization
const y = 10;


greet(); //  Works

function greet() {
    console.log("Hello!");
}


sayHi(); //  Error: Cannot access 'sayHi' before initialization

var sayHi = function() {
    console.log("Hi!");
};



console.log(fun); // undefined
var fun = function() {
    console.log("Function Expression");
};
fun(); // Works after initialization


{
    console.log(num); //  Error: Cannot access 'num' before initialization
    let num = 100;
}


console.log(a); // undefined
var a = 10;

console.log(b); //  Error
let b = 20;


// var
console.log(v); // undefined
var v = "Var Example";

// let/const
// console.log(l); //  Error
let l = "Let Example";

// function declaration
hello(); //  Works
function hello() {
    console.log("Function Declaration Example");
}


