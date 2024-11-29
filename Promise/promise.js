//example: 1
let promise = new Promise(function(resolve, reject){
    let success = true;
    if(success){
        resolve("The promise is resolved successfully");
    }
    else{
        reject("The promise is rejected");
    }
})

promise.then(function(message){
    console.log(message);
}).catch(function(error){
    console.log(error);
}); 

//example 2:
let promise2 = new Promise(function(resolve, reject){
    const x = "Thursday";
    const y = "Friday";
    if(x === y){
        resolve();
    }else{
        reject();
    }
})
promise2.then(function(){
    console.log("Promise is true");
}).catch(function(){
    console.log("The promise if false");
});

//example 3 :
function fetchAPI1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("the first data is fetched")
        }, 2000);
        setTimeout(() => {
            reject("The first data is not fetched")
        }, 3000);
    })
} 
let promise3 = fetchAPI1();
promise3.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

//example 4:
function withdrawAmount(amount){
    return new Promise((resolve, reject) => {
        let balance = 5000;
        if(amount < balance){
            resolve(amount+" Rupees withdrawn successfully");
        }
        else{
            reject("Insufficient balance");
        }
    })
}
let availableAmount = withdrawAmount(7000);
availableAmount.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});
    