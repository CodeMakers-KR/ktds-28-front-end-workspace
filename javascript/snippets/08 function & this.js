// function과 this와의 관계에 대해 설명.
// function을 클래스 처럼 사용할 때의 this ()
function Certificate(date, name, org) {
    this.date = date;
    this.name = name;
    this.org = org;
}

// function 자체의 this 
function callFunction() {
    console.log(arguments);
    console.log(this);
    console.dir(this);
}
