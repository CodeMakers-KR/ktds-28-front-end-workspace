clear();

let negativeNum = 0;
let negativeString = "";
let negativeArray = [];
let negativeObject = {};
let negativeBoolean = false;
let negativeUndefined = undefined;
let negativeNull = null;

if ( ! negativeNum ) {
    console.log("숫자가 0 입니다.");
}

if ( ! negativeString ) {
    console.log("문자열이 비어 있습니다.")
}

if (negativeArray) {
    console.log("배열의 아이템이 존재합니다.");
}

if (negativeObject) {
    console.log("객체가 존재합니다.");
}