let a = 20,
  b = 30;

function sum(x, y) {
  let z = x + y;
  return z;
}

let c = sum(a, b);
console.log(c);

const abc = function () {
  console.log("Hello world");
};
console.log(abc);
abc();

let add = function (a, b) {
  return a + b;
};
console.log(add);

console.log(add(4, 6));

const arrowfun = () => {
  console.log(" I am arrow function");
};
arrowfun();

const addarrow = (a, b) => a + b;

console.log(addarrow(5, 6));
