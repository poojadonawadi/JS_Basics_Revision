// Primitive Variables
// 1 String
let name = "Pooja";
console.log(typeof(name));

//2. Number
let perc = 80;
let cgpa = 7.5;
console.log(typeof(perc));
console.log(typeof(cgpa));

//3. BigInt
let adhaar = 12345678910n;
console.log(typeof(adhaar));

//4. Boolean
let success = true;
let failure = false;
console.log(typeof(success));
console.log(typeof(failure));

//5. Undefined
let x ;
console.log(x); //undefined

//6. Null
const y = null;
console.log(typeof y);

//7. Symbol
let sym = Symbol("id");
console.log(typeof sym);

//Non primitive data types
// 1. object
let student = {
    name : "Pooja",
    id : 101,
    loc: "Bangalore"
};
console.log(student.loc); // Bangalore

//2. Array
const array = [2, 4, 6, 8 ,10];
console.log(array[2]);

//3. Functions
function typechecking(){
    console.log("Non Primitive");
}
typechecking();
