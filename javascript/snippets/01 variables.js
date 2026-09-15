var a = 10.123;
console.log(a);

// javascript는 타입이 존재하지 않는다.
// 변수에 할당된 값에 따라서 타입을 추론할 뿐이다.
// 변수 a의 타입은 무엇일까?
console.log( typeof a );

var b = true;
console.log(b, typeof b);

var c = 'abcd';
console.log(c, typeof c);

var d = "abcdefg";
console.log(d, typeof d);

var e = `장민창`;
console.log(e, typeof e);

var f = [1,2,3,4];
console.log(f, typeof f);