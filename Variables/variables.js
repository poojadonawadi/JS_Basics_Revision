// Javascript variables are var, let and cost
//example on var, let and const 

var a = 10;
var a = 20; // using var we can reinitialise the variable
let b = 10;
//let b = 30; // This is not possible using let
//const c; // only declaration is not possible with const
const c = 15;
console.log(a); // 20
console.log(b); // 10
console.log(c); // 15

//var can be accessed outside the block but we cannot access with let and const
if(true){
    var x = 10;
}
console.log(x); // can be accessible out side the scope

// we can changes the values of array and objects even if we declare with const keyword
const array = [1, 2, 3, 4, 5];
array[2] = 7;
console.log(array); // [1, 2, 7, 4, 5]

//for objects
const student = {
    name: "Tom",
    id: "101"
};
student.id = 202;
console.log(student.id);

