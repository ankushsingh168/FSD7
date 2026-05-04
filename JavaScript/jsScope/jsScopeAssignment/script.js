var globalVar = "I am global";
console.log(globalVar);

var globalVar = "I am global";

function showGlobal() {
  console.log(globalVar);
}
showGlobal();

function localExample() {
  var localVar = "I am local";
  console.log(localVar);
}
localExample();

function localExample() {
  var localVar = "I am local";
  console.log(localVar);
}
localExample();

console.log(localVar);

function blockExample() {
  if (true) {
    let blockVar = "I am block variable";
    console.log(blockVar);
  }
}
blockExample();

if (true) {
  let blockVar = "Inside block";
  console.log(blockVar);
}
console.log(blockVar);

if (true) {
  const constVar = "Const inside block";
  console.log(constVar);
}

if (true) {
  const constVar = "Const inside block";
  console.log(constVar);
}
console.log(constVar);

var globalVar = "Global";

function testScope() {
  var localVar = "Local";
  if (true) {
    let blockVar = "Block";
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
    console.log(blockVar); // Accessible
  }
}
testScope();

function scopeDemo() {
  if (true) {
    var varVar = "I work in entire function";
    let letVar = "I work only inside block";
    const constVar = "I also work only inside block";
  }
  console.log(varVar); 
  console.log(letVar); 
  console.log(constVar); 
}
scopeDemo();
