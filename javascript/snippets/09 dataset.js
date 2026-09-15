clear();

// 1. 모든 .package를 가져온다.
const packages = document.querySelectorAll(".package");
console.log(packages);

const hawaii = packages[0];
const olando = packages[1];
const japan = packages[2];

// hawaii의 data-price 변수를 가져온다.
console.log(hawaii);
console.dir(hawaii);

const hawaiiPrice = hawaii.dataset.price;
console.log(hawaiiPrice);

// japan 에 비행시간(data-flight-time)을 추가하고 싶다.
//   데이터변수에 "-" 가 포함될 경우 문법 오류 발생
// hawaii.dataset.flight-time = "1시간 30분";
hawaii.dataset.flightTime = "1시간 30분";