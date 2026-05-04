// Logging Names (forEach method)
const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => {
    console.log(`Hello, ${name}`);
});

// Temperature Conversion (map method)
const temps = [0, 10, 20, 30];
const fahrenheit = temps.map(c => c * 1.8 + 32);
console.log(fahrenheit);

// Finding Adults (filter method)
const users = [
    { name: 'Li', age: 16 },
    { name: 'Dan', age: 22 },
    { name: 'Sarah', age: 17 }
];
const adults = users.filter(user => user.age >= 18);
console.log(adults);

//String Lengths (filter method)
const words = ["apple", "banana", "kiwi", "strawberry", "grape"];
function getLongStrings(arr) {
    return arr.filter(word => word.length > 5);
}
console.log(getLongStrings(words));

// Total Cost (reduce method)
const prices = [19.99, 5.50, 3.99, 25.00];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);

// Counting Occurrences (reduce method)
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
const count = fruits.reduce((acc, item) => {
    return item === "apple" ? acc + 1 : acc;
}, 0);
console.log(count);

// Array Transformation (filter and map methods)
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * num);
console.log(result);

// Object Extraction (map method)
const products = [
    { id: 1, title: 'Laptop' },
    { id: 2, title: 'Mouse' }
];
const titles = products.map(p => p.title);
console.log(titles);

//  The Average (reduce method)
const scores = [80, 90, 70, 100];
const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(avg);

// Flattening Arrays (reduce method)
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat);