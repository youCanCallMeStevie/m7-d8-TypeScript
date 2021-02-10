const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Stephanie",
  age: 35,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};
//console.log(person.nickname) // error, as there is no nickname
console.log(person.name);
person.role.push("admin"); // this error in changing the length is not thrown, be careful!
//person.role[1] = 10; // number is not in the second spot of the array

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map()) //can't use map, as you can't map strings
}

//1
// function combine(input1: number | string, input2: number | string){
//   let result;
//   if (typeof input1==="number" && typeof input2==="number" ) {
//       result =input1+input2;
//   } else{
//       result = input1.toString() + input2.toString();
//   }
//       return result;
//   }

//2
// function combine(input1: number | string, input2: number | string, resultConversion: string){
//   let result;
//   if (typeof input1==="number" && typeof input2==="number" || resultConversion ==="as-number" ) {
//       result = +input1 + +input2;
//   } else{
//       result = input1.toString() + input2.toString();
//   }
//   }
//   const combinedAges =combine(30,26, "as-number");
//   const combinedNames = combine("Arthur", "Mimi", "as-string")

//3
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
}
const combinedAges = combine(30, 26, "as-number");
const combinedNames = combine("Arthur", "Mimi", "as-text");
