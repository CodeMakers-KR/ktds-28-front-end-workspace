clear();

function Person(name) {
    this.name = name;
}
Person.prototype.birthYear = 1985;
Person.prototype.introduce = function() {
    // console.log("ProtoType에서 출력한 this", this);
    console.log("이름", this.name);
    console.log("출생연도", this.birthYear);
};

console.log(Person);
console.dir(Person);

const me = new Person("장민창");
console.log(me);
console.log(me.name);
console.log(me.birthYear);
me.introduce();

clear();
console.log("String prototype 확인");
console.dir(typeof "abc");
console.dir("abc".__proto__);

let name = "장민창";
String.prototype.appendPrefix = function(prefix) {
    return prefix + this;
};

name = name.appendPrefix("이름은 ");
console.log(name);

