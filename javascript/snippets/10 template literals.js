clear();

let a = 10;
let b = 2222;
const message = `${a} + ${b} = ${a + b}`;
console.log(message);

function add(a, b) {
    return a + b;
}

const result = `${a} + ${b} = ${add(a, b)}`;
console.log(result);