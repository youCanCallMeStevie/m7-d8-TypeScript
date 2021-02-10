"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
function printResult(num) {
    //void means this function doesnt hava return statement, no error but doesnt return anything
    console.log("result: " + num);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
//combineValues = printResult //doesnt like it, because the function doesnt return a number as explictly asked for
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
