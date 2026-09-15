clear();

let arrays = [111];
let arrays2 = [10, 20, 30, 40];
let arrays3 = [1, true, false, 1.2, "aa", "bb"];

console.log("arrays", arrays);
console.log("arrays2", arrays2);
console.log("arrays3", arrays3);

console.log("arrays.length", arrays.length);
console.log("arrays2.length", arrays2.length);
console.log("arrays3.length", arrays3.length);

console.log("arrays[0]", arrays[0]);
console.log("arrays[-1]", arrays[-1]);
console.log("arrays2[0]", arrays2[0]);
console.log("arrays2[1]", arrays2[1]);
console.log("arrays2[2]", arrays2[2]);
console.log("arrays2[3]", arrays2[3]);
console.log("arrays2[4]", arrays2[4]);

for (let i = 0; i < arrays3.length; i++) {
    console.log(arrays3[i]);
}

// for - in (배열의 인덱스를 하나씩 가져와 반복)
for (let i in arrays3) {
    console.log(i, arrays3[i]);
}

// for - of (배열의 아이템(값)을 하나씩 가져와 반복)
for (let value of arrays3) {
    console.log(value);
}

clear();
// 배열에 아이템 추가.
// 배열.push(값); ==> 배열 가장 마지막에 추가.
// 배열.unshift(값); ==> 배열 가장 첫 번째에 추가.
let newArray = [];
newArray.push(1); // 0
newArray.push(2); // 1
console.log(newArray);

newArray.push(3); // 2
console.log(newArray);

newArray.unshift("A");
console.log(newArray);

newArray.unshift("B");
console.log(newArray);

// 아이템 제거
// 배열.pop(); ==> 가장 마지막에 있는 아이템 제거
// 배열.shift(); ==> 가장 처음에 있는 아이템 제거
// 배열.splice(n, m); ==> n번째 부터 m개 까지 제거.
// newArray ==> B, A, 1, 2, 3
//              0  1  2  3  4 
// 4번 인덱스 제거
let popValue = newArray.pop();
console.log(popValue, newArray);

// newArray ==> B, A, 1, 2
//              0  1  2  3 
// 0번 인덱스 제거
let shiftValue = newArray.shift();
console.log(shiftValue, newArray);

// newArray ==> A, 1, 2
//              0  1  2 
// 1번 인덱스부터 2번 까지 제거.
let spliceValue = newArray.splice(1, 2);
console.log(spliceValue, newArray);