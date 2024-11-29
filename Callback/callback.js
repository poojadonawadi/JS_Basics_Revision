//Example 1:  
/*function mainFunction(callback){
    console.log("Performing operation");
    setTimeout(() => {
        callback("Opeation completed");
    }, 2000);
}
function callbackFunction(result){
    console.log("Result: "+result);
} 
mainFunction(callbackFunction);

//example 2:
let a = [2, 4, 7, 8, 3];
function mainFunction(callback){
    console.log("Performing operation");
    a.forEach(callback);
}
function callbackFunction(number){
    console.log("Result: "+number);
}
mainFunction(callbackFunction);  */

// Create a function processData that takes an array and a callback. 
//The callback should determine whether each number in the array is even or odd.
function processData(arr, callback){
    for(let i=0; i<arr.length; i++){
        callback(arr[i]);
    } 
}
function processed(num){
   if(num%2 === 0){
    console.log(num+" is even number");
   }
   else{
    console.log(num+" is odd number");
   }
}
let array = [23, 13, 34, 27, 49];
processData(array, processed);

