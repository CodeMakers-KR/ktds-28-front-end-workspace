clear();

// 1. 함수는 변수에 할당 가능하다.
const fn = function add(a, b) {
    console.log(a + b);
}

// 2. 함수 표현식 (function expression)
//  이름이 없는 함수를 변수에 할당하는 방법.
//   함수를 변수에 할당할 때, 함수의 이름은 작성하지 않는다 (익명 함수)
const fn2 = function (a, b) {
    console.log(a + b);
}

// 3. 콜백 함수 (callback function)
// 어떤 작업 중에 실행되길 희망하는 함수
//   파라미터로 전달되는 함수
// 예> 1 부터 10000 까지 반복하며 더하는 과정 중 
//     더한 값이 5의 배수일 때, 특정 함수가 실행되길 바랄 때 사용하는 함수 작성 패턴

function addFromTo(from, to, callbackFunction) {
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;

        if (sum % 5 === 0) {
            callbackFunction(sum);
        }
    }
    return sum;
}

const printNum = function(num) {
    console.log("현재 값: ", num);
};