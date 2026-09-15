// ECMAScript 2015 이후 부터는 var를 사용하지 않는다.
// 대신 변수가 필요할 땐 let
//  상수가 필요할 땐 const
// let, const hoisting 현상이 발생 X
let number2 = 10;
//let number2 = 20; // Error!

console.log(result); // Error!
let result = 30;

console.log(number2);