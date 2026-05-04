for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 7; i++) {
    if (i === 4) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
    break;
}

for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}

function add(a, b) {
    return a + b;
}
console.log(add(5, 7)); // 12


function totalPrice(price, tax) {
    return price + tax;
}
console.log(totalPrice(100, 18)); // 118



function demo() {
    return "Hello";
    console.log("This will never run");
}
console.log(demo()); // Hello




for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // loop ends completely
    }
    console.log("Break Example:", i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // skips only 3
    }
    console.log("Continue Example:", i);
}



for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        break;
    }
    console.log(i);
}
console.log("Loop ended, control is here!");