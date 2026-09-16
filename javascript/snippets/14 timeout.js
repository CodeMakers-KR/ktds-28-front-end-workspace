function process1() {
    // 대표적인 비동기 함수
    // setTimeout(실행할 함수, 함수의 실행을 지연시킬 시간(ms));
    setTimeout(function() {
        console.log("process1"); 
    }, parseInt(Math.random() * 10000));
}
function process2() {
    setTimeout(function() {
        console.log("process2"); 
    }, parseInt(Math.random() * 10000));
}
function process3() {
    setTimeout(function() {
        console.log("process3"); 
    }, parseInt(Math.random() * 10000));
}
function process4(cbFunction) {
    setTimeout(function() {
        console.log("process4"); 

        setTimeout(function() {
            console.log("process4 종료됨");
            cbFunction();
        }, parseInt(Math.random() * 10000));
    }, parseInt(Math.random() * 10000));
}

function run() {

    function afterFunction2() {
        console.log("작업이 완료되어 고객에게 전화를 합니다.");
    }
    
    function afterFunction() {
        setTimeout(function() {
            console.log("작업이 종료되었습니다.");
            afterFunction2();
        }, parseInt(Math.random() * 10000));
    }
    
    console.log("run 시작됨");
    process1();
    process2();
    process3();
    process4(afterFunction);
    console.log("run 종료됨");
}

clear();
run();