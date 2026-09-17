/** @format */

const name = "ABC";
let age = 15;

function sum(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

let arrays = [1, 2, 3];

function addNumbers(number) {
  arrays.push(number);
}

function removeNumber(number) {
  arrays = arrays.filter((n) => n != number);
}

function printNumbers() {
  arrays.forEach((n) => console.log(n));
}

function getNumbers() {
  return arrays;
}
