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

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json()) // res -> string -> json)
    .then(data => data.filter(d => d.id % 2 === 0))
    .then(data => data.map(d => (d.title = "Aaryan " + d.title)))
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));
 
// getData().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.error("Error:", error);
// });