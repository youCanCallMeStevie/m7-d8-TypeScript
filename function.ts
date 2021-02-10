function add(n1: number, n2: number) {
  return n1 + n2;
}

function addAndHandle(n1: number, n2: number, callback:(num: number)=> void) {
    const result = n1 + n2;
    callback(result);
}

function printResult(num: number): void {
  //void means this function doesnt hava return statement, no error but doesnt return anything
  console.log("result: " + num);
}
printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
//combineValues = printResult //doesnt like it, because the function doesnt return a number as explictly asked for

console.log(combineValues(8,8))

addAndHandle(10,20, (result)=>{
    console.log(result)
})