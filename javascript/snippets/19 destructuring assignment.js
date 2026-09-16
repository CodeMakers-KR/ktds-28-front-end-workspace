// 구조 분해 할당
// 배열 생성
//             0    1    2
const arr = [ "a", "b", "c" ];
// 인덱스 별로 값을 가져오려면?
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

clear();

//      0  1  2
const [ a, b, c ] = arr;
console.log(a);
console.log(b);
console.log(c);

clear();

const obj = {
    name: "abc",
    age: 40,
    address: "korea",
    sex: "male"
};
// const name = obj.name;
// const age = obj.age;

const {name = "무명", age, job = "학생"} = obj;
console.log(name);
console.log(age);
console.log(job);

function print( {a, b, d = "DD"} ) {
    console.log(a);
    console.log(b);
    console.log(d);
}

print( {a: "AA", b: "BB", c: "CC"} );