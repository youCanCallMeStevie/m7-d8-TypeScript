let i: number;

i = 10;
let x: string;
let y: boolean;
let n: any;
let array: string[];
//let array: Array<string>
array = ["stefano", "riccardo"];

// const addition = (n1, n2) => {
//   if (typeof n1 === "number" && typeof n2 === "number") {
//     return n1 + n2;
//   } else {
//     return "there are not both numbers";
//   }
// }; THIS IS VANILLA JS

const addition = (n1: number, n2:number) => {
      return n1 + n2;
  };
console.log(addition(2, 3));
//THIS IS TYPESCRIPT

const addition2 = (n1: number | string, n2:number | string) => {
            return n1 + n2;
} 
console.log(addition2("two", 3));
//THIS IS TYPESCRIPT

type ValidType = number | string
const addition3 = (n1: ValidType, n2:ValidType) => {
            return n1 + n2; //don't want + for concat strings
} 
console.log(addition3("two", 3));
//THIS IS TYPESCRIPT WITH A BESPOKE TYPE

const addition4 = (n1, n2): number => {
    return n1 + n2;
};
console.log(addition4(2, 3));
//functions returns can be decalred too!!!



// type InventoryObject = {
//     shape: string
//     color: string,
//     size: ValidType
// }

interface InventoryObject {
    shape: string,
    color: string,
    size: ValidType
}

interface newInventoryObject extends InventoryObject {
    itemId: number
}
//interface is like type, but only for objects and can be extended

const obj:InventoryObject ={
    shape: "round",
    color: "green",
    size: 100
}
obj.size="large"

interface StriveStaff{
    name: string
    age?: number
    role: string
}

let striveTutors: Array<StriveStaff>=[
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
]

console.log(striveTutors[3].age || null)