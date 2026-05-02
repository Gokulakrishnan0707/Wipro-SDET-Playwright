let a = "Gokul";
let b = "kumar";
let c = "yady"; 
let d = "Hello " + a + ", " + b + " and " + c + "!"; // Concatenation
// console.log(d);
// Using Template literals
let e = `Hello ${a}, ${b} and ${c}!`; // Template literals
let f = `The length of a is ${a.length * 2}`; // Using template literals to get length
// console.log(e);
// console.log(f);

function table(num) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        // console.log(num + " x " + i + " = " + (num * i)); // Using string concatenation
        result += `${num} x ${i} = ${num * i}\n`;
    }
    return result;
}
// console.log(table(5)); // Displays the multiplication table for 5
// function sum(a, b) {
//     return a + b;
// }

//Using Arrow function
// let sum1 = sum(5, 10);
let sum = (x, y) => x + y; // Arrow function for addition
console.log("Sum of 5 and 10:", sum(5, 10)); // 15


let arr = [1, 2, 3, 4, 5, "Gokul"];
// General method
// arr.filter(function(x) {
//     return typeof x === "number";
// }).map(function(y) {
//     return y * 2;
// }).forEach(function(abc) {
//     console.log("Element after * 2:", abc * 2);
// });

// Using Arrow functions
arr.filter(x => typeof x === "number").map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2));
// console.log(arr.find(x => x === "Gokul1")); // undefined
// console.log(arr.find(x => x === "Gokul")); // "Gokul"

// Using callback functions
arr.map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2));

// Random and Floor function
console.log(Math.floor(Math.random() * 100) + 1); // 1 to 100
// floor -> rounds down to the nearest integer 0.9 --> 0
// 0 --> 99.999 -> 99 [0 - 99]

// Math.random --> 0 - 1 * 10 --> 0 - 10
// Math.floor(x) --> 0.3 (0, 1) = 0, 1.6 (1, 2) = 1, 3.998 (3, 4) = 3
// floor(0.1, 9.999) -> [0, 9]

// == / ===
// console.log(5 == "5"); 
// console.log(5 === "5");

let strnum = "5";
console.log(Number(strnum));
console.log(String(5));

//Parse methods
let val = "0.6";
console.log(parseInt(val)); // 0
console.log(parseFloat(val)); // 0.6

// floor [int] -> Low int, parseInt -> type conversion (string -> int)

//Array methods
let colors = ["red", "green", "blue"];
console.log(colors.indexOf("yellow")); // -1
console.log(colors.includes("yellow")); // false
console.log(colors.length); // 3
console.log(colors[3]); // undefined
console.log(colors[colors.length - 1]); // "blue"
colors.push("yellow"); // Adds "yellow" to the end of the array
console.log(colors); // ["red", "green", "blue", "yellow"]
colors.pop(); // Removes the last element ("yellow")
console.log(colors); // ["red", "green", "blue"]
colors.unshift("purple"); // Adds "purple" to the beginning of the array
console.log(colors); // ["purple", "red", "green", "blue"]
colors.shift(); // Removes the first element ("purple")
console.log(colors); // ["red", "green", "blue"]

//Splice method
// remove by index, obj, [1, length - 2] --> math.random() * (length - 2)
console.log(colors.splice(0, 1));
console.log(colors.splice(1, 2));
console.log(colors.splice(1, 3));
// console.log(colors.splice(Math.floor(Math.random() * (colors.length - 2)), 1));
// let str = "Hello World";
// console.log(str.slice(0, 5)); // "Hello"

//Assignment code
//Guest list formatter code

function formatGuests(names) {
names.shift();
const formatted = names.map(name => `Guest: ${name}`);
 return formatted.join("\n");
}
console.log(formatGuests(["Alice", "Bob", "Charlie", "David"]));

//The logic gate code

const getHighNumbers = (arr) => {
  const threshold = Math.floor(Math.random() * 50) + 1;
  return arr
    .filter(item => typeof item === "number")
    .filter(num => num > threshold);
};
console.log(getHighNumbers([10, "20", 35, "hello", 60, 5]));

//Price calculator code

const prices = ["10.5", "20", "30.25", "5"]; 
const handlingFee = prices.pop();
const numericPrices = prices.map(price => Number(price));
const getTotal = arr => arr.reduce((sum, val) => sum + val, 0);
const total = getTotal(numericPrices);
console.log(`Total Price: $${total}`);