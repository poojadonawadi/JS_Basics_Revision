// Global Scope :
//The variable declared anywhere out the function can be accessed anywhere in the program
//var keyword is Gobal scoped
var a = 10;
let b = 20;
const c = 30;
function checkVar(){
    console.log(a);
    console.log(b);
    console.log(c);
}
checkVar();

//Local Scope:
function localScope(){
    let a = 10;
    console.log(a);
}

//block scope
{
    let a = 10;
    console.log(a);
}
// console.log(a); // cannot be accessed here

//Function Scope
function scope(){
    let z = 30;
    let x = 25;
    console.log(z);
    console.log(x);
}
scope();

