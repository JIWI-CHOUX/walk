//문제 1
const greeting = "Hello";
const name = "World";

console.log(greeting.concat(name));
console.log(greeting + " " + name);

//문제 2
const lion = {
    name : "심바",
    age : 3,
    hero : true,
    script : "하쿠나마타타"
}

//문제 3
const sentence = "Learning JavaScript is fun!";

const newSentence = "Coding"


console.log(sentence.replace("JavaScript", "Coding"));

//문제 4

function incrementAge(lion) {
    return lion.age = lion.age + 1;
}

console.log(incrementAge(lion));