// 배열 => Java의 List와 유사.

// 객체 리터럴 { key: value, key: value, .... }
// Java의 Map 유사. || python의 dict와 동일
clear();

let certificate = { 
    issuedDate: "2026-09-14", 
    name: "정보처리기사", 
    org: "q-net" 
};

console.log(certificate, typeof certificate);

console.log(certificate.issuedDate);
console.log(certificate.name);
console.log(certificate.org);
console.log(certificate.level);

console.log(certificate["issuedDate"]);
console.log(certificate["name"]);
console.log(certificate["org"]);
console.log(certificate["level"]);

// certificate 에게 level값을 추가.
certificate.level = "1급";

// certificate 에게 학점을 추가.
certificate["point"] = "4점";

console.log(certificate);

// 객체리터럴의 값으로 사용할 수 있는 데이터 타입의 종류: all
certificate.사용처 = ["대학", "대학원", "학원", "회사", "학교", "기관"];
console.log(certificate);

certificate.가산점 = {"대학": "1점", "대학원": "2점", "기관": "3점"};
console.log(certificate);

// 객체 반복 (for - in)
for (let key in certificate) {
    console.log( key, certificate[key] );
}

// 가산점 키를 삭제.
delete certificate.가산점;
console.log(certificate);

console.log("document", document);
console.dir(document);
console.dir("abc".__proto__);
console.log("window", window);