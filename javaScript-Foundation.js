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

//Promises
    function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

//Fetch API
fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(arr => arr.filter(p => p.id <= 10))
  .then(arr => arr.map(p => p.url))
  .then(data => console.log("Photo URLs:", data));

  // async/await method 
// async method is used to declare a function as asynchronous, allowing you to use the await keyword inside it. it makes synchronous code look and behave more like synchronous code, making it easier to read and understand. 
// await method is used to wait for a promise to resolve before proceeding with the execution of the code. It can only be used inside an async function.
async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
getUsers();

// stringify and parse methods
// stringify method converts a JavaScript object into a JSON string. This is useful when you want to send data to a server or store it in a file.
// parse method converts a JSON string back into a JavaScript object. This is useful when you receive data from a server or read it from a file and want to work with it in your code.
const obj = {
    name: "Hrithicka",
    age: 22,
    city: "New York"
}
console.log(JSON.stringify(obj)); // object -> string
console.log(JSON.parse('{"name":"Hrithicka","age":22,"city":"New York"}')); // string -> object

// cleartimeout and clearInterval methods
// clearTimeout is a built-in JavaScript function that allows you to cancel a timeout that was previously set using setTimeout. It takes the timeout ID returned by setTimeout as an argument and prevents the associated function from being executed after the specified delay.
// clearInterval is a built-in JavaScript function that allows you to cancel an interval that was previously set using setInterval. It takes the interval ID returned by setInterval as an argument and stops the associated function from being executed repeatedly at the specified intervals.
const timeoutId = setTimeout(() => {
    console.log("This will not be logged");
}, 5000);
clearTimeout(timeoutId);

const intervalId = setInterval(() => {
    console.log("This will not be logged repeatedly");
}, 3000);
clearInterval(intervalId);


// oops concepts in JavaScript
// oops stands for Object-Oriented Programming System. It is a programming paradigm that uses objects and classes to organize code and data. The main concepts of OOPS in JavaScript include:
// 1) Constructor function: A special function used to create and initialize objects in JavaScript. It is called when a new instance of an object is created using the new keyword.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

const dog = new Animal("Jhonny");
const cat = new Animal("Whiskers");
dog.speak();
cat.speak();

// 2) Encapsulation: The bundling of data and methods that operate on that data within a single unit (class or object).
class BankAccount {
    #balance = 0; // private variable | Access modifier
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const GokulAccount = new BankAccount();
GokulAccount.deposit(1000);
GokulAccount.withdraw(200);
// GokulAccount.balance = 10000;
console.log(`Final Balance: ₹${GokulAccount.getBalance()}`);
 
const yadyAccount = new BankAccount();
yadyAccount.deposit(500);
yadyAccount.withdraw(1000);
console.log(`Final Balance: ₹${yadyAccount.getBalance()}`);

// 3) Inheritance: The ability of a new class (child class) to inherit properties and methods from an existing class (parent class).
class User {
    constructor(name) {
        this.name = name;
    }
    logIn() {
        console.log(`${this.name} has logged in.`);
    }
}
class Admin extends User {
    constructor(name, role) {
        super(name); // call the parent class constructor
        this.role = role;
    }
    logIn() {
        super.logIn(); // call the parent class method
        console.log(`${this.name} has admin privileges as a ${this.role}.`);
    }
}
 
const user1 = new User("Alice");
const admin1 = new Admin("Bob", "Super Admin");
 
user1.logIn(); // Alice has logged in.
admin1.logIn(); // Bob has logged in. Bob has admin privileges as a Super Admin.

// 4) Polymorphism: The ability of different classes to be treated as instances of the same class through a common interface.
class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}
class Square extends Shape {
    draw() {
        console.log('Drawing a square');
    }
}
 
const shapes = [new Circle(), new Square()];
 
shapes.forEach(shape => shape.draw());

// 5) Abstraction: The process of hiding the internal details of an object and exposing only the necessary features to the user.
class CoffeMachine {
    #waterTemperature = 90;
    #boilWater() {
        return `Boiling water to ${this.#waterTemperature} degrees.`;
    }
    #grindBeans() {
        return "Grinding beans.";
    }
    brew() {
        const boilMessage = this.#boilWater();
        const grindMessage = this.#grindBeans();
        return `${boilMessage} ${grindMessage} Brewing coffee.`;
    }
}
 
const myCoffeMachine = new CoffeMachine();
console.log(myCoffeMachine.brew());

//Flight Booking Data Cleaner

//Used .map() for parsing and object creation.
//Used array destructuring with .split().
//Used Number() for type conversion.
//used isNaN() for validation.
//Used .filter() to filter flight prices.
//Used .sort() for ascending order sorting.
//Used JSON.stringify() for JSON output.

//Question 2 — E-Commerce Discount Applicator

//Used callback function (isEligible) for eligibility checking.
//Used .map() for transformation.
//Applied 10% discount using arithmetic operators.
//Added new property isDiscounted.
//Used Template Literal for summary message.
//Used setTimeout() for delayed output.

//Question 3 — Movie Stream Analytics

//Used .map() for parsing and object creation.
//Used .split() and array destructuring.
//Used Number() and isNaN() for validation.
//Used .filter() for genre and view filtering.
//Used .sort() for descending order sorting.
//Used JSON.stringify() for final output.

//Question 4 — Automated Payroll Processor

//Used callback function (taxLogic) for tax calculation.
//Used .map() for employee processing.
//Calculated tax and net salary using arithmetic operators.
//Used if/else condition for employee status.
//Used Template Literal for payroll summary.
//Used setTimeout() for delayed return. 

// Prototype inheritance
// It is a mechanism by which objects can inherit properties and methods from other objects. 
// In JavaScript, every object has a prototype, which is another object that it inherits properties and methods from.
// When you create a new object using a constructor function, the new object inherits properties and methods from the constructor's prototype. 
// This allows you to define shared behavior for all instances of a constructor function without having to duplicate code for each instance.
function person(name) {
    this.name = name;
}
person.prototype.sayHi = function() {
    console.log('hello ' + this.name);
}
const me = new person("Gokul");
const you = new person("you");
me.sayHi();
you.sayHi();
console.log(Object.getPrototypeOf(me) === person.prototype); // true
console.log(me.sayHi === you.sayHi); // true


// Callback function
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// give different  simple examples
function greetUser(name, callback) {
    console.log('Hello ' + name);
    callback();
}
function sayGoodbye() {
    console.log('Goodbye!');
}
greetUser('Gokul', sayGoodbye);


// stack and heap
// Stack is a data structure that follows the Last In First Out (LIFO) principle. 
// Heap is a memory area used for dynamic memory allocation where variables are stored as objects.
// Primitive types (like numbers and strings) are stored in the stack, while objects and arrays are stored in the heap.
let age = 21; // number --> Stack
let name = "Gokul"; // string --> Stack
let user = { // object --> Heap
    name: "Gokul",
    age: 21
}

// Primitive copy (Stack) 
let x = 5;
let y = x; // copy of value of x is stored in y

// Reference copy (Heap)
let obj1 = { name: "Gokul" }; // heap
let obj2 = obj1;
obj2.name = "yathesh";
console.log(obj1.name); // obj1 and obj2 are referencing the same object in heap, so change in obj2 reflects in obj1


// spread operator
// The spread operator (...) allows you to expand an iterable (like an array or object) into individual elements. It is commonly used for copying arrays or objects, merging arrays, and passing elements as function arguments.
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // creates a new array with the same elements as arr1
console.log(arr2); // [1, 2, 3]

let obj1 = { name: "Gokul", age: 21 };
let obj2 = { ...obj1 }; // creates a new object with the same properties as obj1
console.log(obj2); // { name: "Gokul", age: 21 }

// hoisting
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. 
// This means that you can use variables and functions before they are declared in the code. 
// However, only the declarations are hoisted, not the initializations. 
// For example, if you declare a variable using var, it will be hoisted and initialized with undefined, while let and const declarations are hoisted but not initialized, resulting in a ReferenceError if accessed before declaration.
console.log(greet); // undefined due to hoisting of var
var greet = "Hello, World!";
console.log(greet); // "Hello, World!"

// function hoisting
// Function declarations are hoisted, meaning you can call the function before its declaration in the code.
sayHi(); // "Hello, World!"
function sayHi() {
    console.log('Hello, World!');
}

// arrow function hoisting
// Arrow functions are not hoisted in the same way as function declarations. If you try to call an arrow function before it is defined, you will get a ReferenceError because the variable that holds the arrow function is not initialized until the code execution reaches that line.
sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization
var sayHi = () => {
    console.log('Hello');
}

// Object creation and manipulation
// In JavaScript, you can create objects using object literals, constructor functions, or classes.
// Object literals
const car = {
        brand: "Tesla",
        start: () => console.log("VroomVroom")
    }
// Constructor function
function start() {
    console.log("VroomVroom")
}
const c1 = new start();
const c2 = new start();
start.prototype.stop = function() {
    console.log("Stop");
}

// car {start} --> prototype {stop}
// c1 --> start
// c2 --> start
// c1.stop(); // Stop

// Prototype chaining
// Prototype chaining is a mechanism in JavaScript where objects can inherit properties and methods from other objects through a chain of prototypes. 
// When you access a property or method on an object, JavaScript first looks for it on the object itself. 
// If it doesn't find it there, it looks for it on the object's prototype, and if it's not found there, it continues up the prototype chain until it either finds the property/method or reaches the end of the chain (null).
const animal = { eats: true };
const rabbit = Object.create(animal); // creates a new object rabbit with prototype animal
rabbit.carrot = () => console.log("He is eating carrot");
console.log(rabbit.eats); // inherited from animal
console.log(rabbit.hasOwnProperty('eats')); // false, because eats is inherited from animal
console.log(rabbit.hasOwnProperty('carrot')); // true, because carrot is a property of rabbit
console.log(rabbit.toString()); // toString is inherited from Object.prototype

// array methods
// sort() method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings in ascending order. 
// reverse() method reverses the order of the elements in an array in place and returns the reversed array.
const arr = [1, 2, 3, -1];
arr.sort(); // sorts the array in ascending order (as strings)
console.log(arr); // [-1, 1, 2, 3]

arr.reverse(); // reverses the order of the elements
console.log(arr); // [3, 2, 1, -1]

// closure function
// It is a function that "remembers" the environment in which it was created.
// It allows an inner function to access variables from an outer function's scope even after the outer function has finished executing.
let sum = 0; // 2
function f() {
    function increment() {
        sum++;
        
        function inner2() {
            sum++;
            console.log(sum);
        }
        return inner2();
    }
    return increment();
}
f();
console.log(sum);
