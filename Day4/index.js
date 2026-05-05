function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 3000);
    });
}
 
getData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("Error:", error);
});
// setTimeout(() => {
//     console.log("Data received");
// }, 4000);
 
// setInterval(() => {
//     console.log("Checking for new data...");
// }, 2000);