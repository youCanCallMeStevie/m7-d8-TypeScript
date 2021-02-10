"use strict";
var i;
i = 10;
var x;
var y;
var n;
var array;
//let array: Array<string>
array = ["stefano", "riccardo"];
// const addition = (n1, n2) => {
//   if (typeof n1 === "number" && typeof n2 === "number") {
//     return n1 + n2;
//   } else {
//     return "there are not both numbers";
//   }
// }; THIS IS VANILLA JS
var addition = function (n1, n2) {
    return n1 + n2;
};
console.log(addition(2, 3));
//THIS IS TYPESCRIPT
var addition2 = function (n1, n2) {
    return n1 + n2;
};
console.log(addition2("two", 3));
var addition3 = function (n1, n2) {
    return n1 + n2; //don't want + for concat strings
};
console.log(addition3("two", 3));
//THIS IS TYPESCRIPT WITH A BESPOKE TYPE
var addition4 = function (n1, n2) {
    return n1 + n2;
};
console.log(addition4(2, 3));
//interface is like type, but only for objects and can be extended
var obj = {
    shape: "round",
    color: "green",
    size: 100
};
obj.size = "large";
var striveTutors = [
    {
        name: "Stefano",
        age: 33,
        role: "FE Teacher"
    },
    {
        name: "Stefano",
        age: 31,
        role: "CSS"
    },
    {
        name: "Diego",
        role: "Founder"
    },
];
console.log(striveTutors[3].age || null);
