"use strict";
var person = {
    name: "Stephanie",
    age: 35,
    hobbies: ["sports", "cooking"],
    role: [2, "author"],
};
//console.log(person.nickname) // error, as there is no nickname
console.log(person.name);
person.role.push("admin"); // this error in changing the length is not thrown, be careful!
//person.role[1] = 10; // number is not in the second spot of the array
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()) //can't use map, as you can't map strings
}
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
}
var combinedAges = combine(30, 26, "as-number");
var combinedNames = combine("Arthur", "Mimi", "as-text");
