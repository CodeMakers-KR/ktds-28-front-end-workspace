// 비동기의 동기화
// Callback을 최소화 시키는 방법.
clear();

const process = new Promise(function(resolve, reject) {
    // resolve ==> 비동기 함수가 성공했을 때 동작할 코드
    // reject  ==> 비동기 함수가 실패했을 때 동작할 코드
    
    // promise 함수 내에는 비동기 함수를 동작시켜야 한다.
    setTimeout(function() {
        console.log("함수가 실행되었습니다.")
        // 비동기 함수가 반환시킬 값을 resolve의 파라미터로 전달한다.
        //resolve("완료됨!");
        reject("실패!");
    }, 2000);
    
});

process
    // 프로미스의 비동기함수에서 resolve를 호출했을 때 실행됨.
    .then( function(returnValue) {
        return new Promise(function (resolve, reject) {
            setTimeout(function() {
                if (returnValue === "완료됨!") {
                    resolve("다음 작업 진행하세요.");
                } else {
                    reject("이전 작업이 올바르게 종료되지 않았습니다.");
                }
            }, 2000);
        });
    })
    .then( function(returnValue) {
        console.log(returnValue);
    })
    .catch( function(errorMessage) {
        console.log(errorMessage);
    });