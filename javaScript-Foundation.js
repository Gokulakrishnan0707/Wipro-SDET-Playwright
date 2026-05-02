// String Operations
let str = "Hello, World!";
console.log("String:", str);
console.log("Length of string:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring (0-5):", str.substring(0, 5));

// Array Operations
let colors = ["red", "green", "blue"];
console.log(colors.indexOf("yellow")); 
console.log(colors.includes("yellow")); 
console.log(colors.length); 
console.log(colors[colors.length - 1]); 
colors.push("yellow"); 
colors.pop(); 
colors.unshift("purple"); 
colors.shift(); 

// Operators (Mathematical and Logical)
let a = 10;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("a > b:", a > b); 
console.log("a < b:", a < b); 
console.log("a == b:", a == b); 
console.log("a != b:", a != b); 
console.log("a >= b:", a >= b); 
console.log("a <= b:", a <= b);

// Statements (if-else, switch)
let i = 0;
let j = 10;

if(i > j) {
    console.log("i is greater");
} else {
    console.log("j is greater");
}

let choice = "a";

switch(choice) {
    case "A":
        console.log("Choice is A");
        break;
    case "B":
        console.log("Choice is B");
        break;  
    default:
        console.log("Invalid choice");
}

// Loops
// For loop
let arr = [1, "Gokul", 3, true, 5];
let arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr2.length; i++) {  
    console.log("Element at index after * 2 ", i, ":", arr2[i] * 2);
}

// while loop
let count = arr2.length - 1;
while (count >= 0) {
    console.log("Element at index after * 2 ", count, ":", arr2[count] * 2);
    count--;
}

// forEach loop
 arr2.forEach(function(x) {
    console.log("Element after * 2 ", x, ":", x * 2);
 });

 // Using filter and map
 let arr = [1, 2, 3, 4, 5, "Gokul"];
arr.filter(function(x) {
    return typeof x === "number";
}).map(function(y) {
    return y * 2;
});

// Using Arrow functions
let sum1 = sum(5, 10);
let sum = (x, y) => x + y; 
console.log("Sum of 5 and 10:", sum(5, 10)); 

// Using callback functions
arr.map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2));

// Random and Floor function
console.log(Math.floor(Math.random() * 100) + 1);

// == / ===
console.log(5 == "5");
console.log(5 === "5");

// Type Conversion
let strnum = "5";
console.log(Number(strnum));
console.log(String(5));

//Parse methods
let val = "0.6";
console.log(parseInt(val));
console.log(parseFloat(val));

// template literals
let name = "Gokul";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting);

// splice method
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // Removes 1 element at index 2
console.log(arr); 

// reduce method 
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of array elements:", sum);