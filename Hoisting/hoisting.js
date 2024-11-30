//variable hoisting

function codeHoist() {
    a = 10; // implicitly it is var and can be accessed globally 
    let b = 50; //local to the fucntion
}
codeHoist();

console.log(a); // 10
//console.log(b); // ReferenceError : b is not defined

// var code (global)
console.log(id); // undefined
var id = 101;

// function hoisting
fun() //function declaration is fully hoisted
function fun(){
    let name = "Tom";
    console.log(name);//Tom
} 
// function expression with let keyword
//hoist() reference error :  Cannot access 'hoist' before initialization
/*let hoist = () => {
    console.log("flower");
}

//function expression with var keyword
perform() // referencre error
var performance = function(){
    console.log("Singing");
}
*/
