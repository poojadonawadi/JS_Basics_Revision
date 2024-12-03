// Array methods
//1. Array length()
// Original Array
/*let courses = ["TypeScript", "Node", "JavaScript", "React"];
console.log(courses.length); // 4

//2. Array toString()
let array = ["TypeScript", "Node", "JavaScript", "React"];
console.log(array.toString()); //TypeScript,Node,JavaScript,React

//3. Array join()
let elements = ["TypeScript", "Node", "JavaScript", "React"];
let res = elements.join("|"); 
console.log(res); //TypeScript|Node|JavaScript|React

//4. Array delete()
let topics = {
    first : "JavaScript",
    second : "Java",
    third : "NodeJS"
};
console.log(delete topics.first); //

//5. Array concat()
let arr1 = [11, 12, 13];
let arr2 = [14, 15, 16];
let arr3 = [17, 18, 19];

let newArr = arr1.concat(arr2, arr3);
console.log(newArr);

//6. Array flat()
let arr4 = [2, 3, [4, 6, 7], 5, 6, 17];

console.log(arr4.flat()); 

//7. Array push()
let courses1 = [10, 20, 30, 40, 50];
courses1.push(60, 20);
console.log(courses1); 

//8. Array unshift() : adds an element at the front
let table = [6, 9, 12, 15, 18];
table.unshift(3);
console.log(table); //[ 3, 6, 9, 12, 15, 18 ]

//9. Array pop() used to remove element fron the end of an array
let table1 = [2, 4, 6, 8, 10, 12];
table1.pop();
console.log(table1); //[ 2, 4, 6, 8, 10 ]

//10. Array shift() : remove 1st element from an array
let removeElement = [6, 9, 12, 15, 18];
removeElement.shift(3);
console.log(removeElement);

//11. Array splice() : is used to Insert and Remove elements in between the Array.
//Syntax : Array.splice (start, deleteCount, item 1, item 2….) 
let replace = [6, 9, 12, 15, 18];
replace.splice(1, 2, 20, 30);
console.log(replace); //[ 6, 20, 30, 15, 18 ]

//12. Array slice() : returns a new array containing a portion of the original array, based on the start and end index provided as arguments
//Syntax: Array.slice (startIndex , endIndex);
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = newArray.slice(1, 3);
console.log(result); //[ 2, 3 ]

//13. Array some()
function isGreaterThan5(element, index, array) {
    return element > 5;
}

let array = [2, 5, 8, 1, 4];

// Checking for condition in array
let value = array.some(isGreaterThan5);

console.log(value); //true

//14. Array reduce() : used to reduce an array to a single value
let arr = [21, 34, 13, 15, 30];
 let sub = arr.reduce(perform);
 function perform(total, num){
    return total - num;
 }
 console.log(sub); // 3

 //15. Array map():
let arr2 = [4, 9, 16, 25];
let result1 = arr2.map(Math.sqrt);
console.log(result1);

//16. Array Reverse
let myArray = [1, 2, 3, 4, 5, 6, 7];
console.log(myArray.reverse()); */

//17. Array values()
const fruits = ["Apple", "Banana", "Cherry"];

// Get the iterator object
const iterator = fruits.values();
for(let value of iterator){
console.log(value); //Apple Banana Cherry
}