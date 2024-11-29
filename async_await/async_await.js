async function bookMovieTicket(){
    try{
        let movie = await selectMovie();
        console.log(movie);

        let seats = await checkAvailability();
        console.log(seats);

        let payment = await confirmPayment();
        console.log(payment);

    }
    catch(error){
        console.log("There was an in the process");
    }
}
function selectMovie(movie){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Movie is selected");
        }, 2000);
    })
}

function checkAvailability(){
    return new promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Seates are available")
        }, 3000);
    })
}

function confirmPayment(){
    return new promise((resolve, reject) => {
        setTimeout(() => {
            reject("Bank's technical Issue");
        }, 5000);
    })
}

bookMovieTicket();