//1번 문제

function printFruits(a, b) {
    return "제가 좋아하는 과일은" + a + "," + b + "입니다";
}

console.log(printFruits("사과", "오렌지"));

//2번 문제

function checkAge(age) {
    if (age > 19) {
        console.log("안녕하세요");
    } else {
        console.log("나가세요");
    }
}

checkAge(19);

//3번 문제

function repeatWorld(str, n) {
    for (let i = 0; i < n; i++) {
        console.log(str);
    }
}

repeatWorld("hello", 5);

//4번 문제

const members = [
    {
        name: "최원장",
        role: "tutor"
    },
    {
        name: "윤창식",
        role: "tutor"
    },
    {
        name: "김병연",
        role: "tutor"
    },
    {
        name: "박가현",
        role: "tutor"
    },
    {
        name: "김멍멍",
        role: "student"
    },
    {
        name: "이야옹",
        role: "student"
    },
];

function getStudents () {
    for(let i = 0; i < members.length; i++) {
        if(members[i]["role"] === "tutor") {
            console.log(members[i]["name"]);
        }
    }
}

getStudents();