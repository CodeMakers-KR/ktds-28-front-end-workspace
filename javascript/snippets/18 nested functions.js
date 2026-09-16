function a() {
    console.log("a");

    // private function
    function b() {
        console.log("b");
    }

    // immediatly execute function (즉시 실행 함수)
    // 함수를 생성함과 동시에 실행시키는 함수 생성 방법.
    (function (num) {
        console.log("즉시 실행 함수", num);
    })(100);
}

clear();
a();
//b();