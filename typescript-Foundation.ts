// TypeScript

// TypeScript is an advanced version of JavaScript developed by Microsoft that adds datatype checking and improves code safety.
// It is a superset of javascript.
// semicolon is must in typescript.

// Variable typing was used to define specific datatypes like string and number.
let userage: number = 21;
let username: string = "Gokul";

// Union types (|) (or) were used to allow multiple datatypes in a single variable.
let result: number | string;
result = 45;
result = "success";
console.log(username, result);

// Function parameter typing was used to restrict input values to numbers.
// Function return typing was used to ensure the function returns a string value.

function addNumbers(a: number, b: number): string {  // : string should return a string 
    return "Sum: " + (a + b);
}
console.log(addNumbers(5, 10));


// Interface 
// It is used to define the structure of an object.
// It tells what properties and datatypes an object should contain.
interface Person {
   id: number;
   name: string;
}

const person1: Person = {
   id: 1,
   name: "Gokul"
};

console.log(person1);

// Interface Merging
// Same interface name can be reused to add extra properties.
interface Person {
   id: number;
}
interface Person {
   name: string;
}

const person2: Person = {
   id: 1,
   name: "Gokul"
};

console.log(person2);

// Enum
// It is used to store fixed constant values.
// Mostly used for roles, status, categories etc.
enum Role {
   User = "USER",
   Admin = "ADMIN"
}

console.log(Role.User);

// Optional property (?)
// Optional property is not compulsory inside object.
interface AdminUser {
    name: string;
    isAdmin?: boolean;
}

const adminUser: AdminUser = {   
    name: "Gokul"
};

console.log(adminUser);

// Tuple
// It stores fixed datatype values in fixed order.
let coordinates: [number, string] = [40.7128, "-74.0060"];
console.log(coordinates);

// Array Typing
// This restricts array values datatype.
let array: number[] = [1, 2, 3];
console.log(array);

// Generics
// It create reusable functions for different datatypes.
function identityValue<T>(value: T): T {
   return value;
}

console.log(identityValue<number>(10));
console.log(identityValue<string>("Hello"));

// Generic Class
// Generic class works with multiple datatypes.
class DataStorage<T> {
   private items: T[] = [];

   // addItems()
   // Adds value into array.
   addItems(item: T): void {
      this.items.push(item);
   }

   // getItem()
   // Gets value using index.
   getItem(index: number): T {
      return this.items[index]!;
   }
}

// Using Generic Class
const names = new DataStorage<string>();
names.addItems("Gokul");
console.log(names.getItem(0));

// Object Typing
// Object must follow interface structure and datatype rules.
interface Student {
   id: number;
   name: string;
}

const partialstudent: Student = {
   id: 1,
   name: "Rohan"
};

console.log(partialstudent);

// Interface with Length Property
// Here, HasLength interface tells that the datatype must contain a length property.
// Any datatype having length property can use the generic function.
interface HasLength {
    length: number;
}

// Generics with Constraints
// Generics with constraints restrict generic values using extends keyword.
// It allows only datatypes that satisfy specific conditions.

function checkLength<T extends HasLength>(arg: T): void {
    console.log(arg.length);
}

// String contains length property.
checkLength("Gokul");

// Array also contains length property.
checkLength([1, 2, 3]);

// Number does not contain length property.
// logLength(10); // error


// TYPE ALIAS
// type is used to create custom datatypes.
type Emp = {
   id: number;
   name: string;
};

// UNION TYPE (|)
// Allows multiple datatypes in one variable.
let id: number | string;
id = 10;
id = "abc";

// INTERSECTION TYPE (&)
// Combines multiple types into one.
type User = {
   name: string;
};

type Admin = {
   role: string;
};

type SuperUser = User & Admin;

// ARRAY WITH MULTIPLE TYPES
// Array can store multiple datatypes.
let list: (number | string)[] = [1, "Hello"];

// FUNCTION WITH TYPED PARAMETERS
// Function parameters must follow datatype rules.
function add(a: number, b: number) {
   return a + b;
}

console.log(add(5, 10));

// KEYOF
// keyof gets object keys as datatype.
const points = { x: 10, y: 20 };
type PointKeys = keyof typeof points;

// TYPEOF
// typeof gets datatype from existing object.
type PointType = typeof points;



// =====================================
// GENERIC FUNCTION
// Generic function works with multiple datatypes.

function identity<T>(value: T): T {
   return value;
}

console.log(identity<string>("Hello"));

// GENERIC CONSTRAINTS
// extends restricts generic datatype.
interface HasLength {
   length: number;
}

function logLength<T extends HasLength>(arg: T) {
   console.log(arg.length);
}

logLength("Hello");

// PARTIAL<T>
// Makes all properties optional.
interface Student {
   id: number;
   name: string;
}

const student: Partial<Student> = {
   name: "Gokul"
};

// DEEP PARTIAL
// DeepPartial makes nested object properties optional.
interface Employee {
   address: {
      city: string;
      country: string;
   }
}

type DeepPartial<T> = {
   [P in keyof T]?:
   T[P] extends object
   ? DeepPartial<T[P]>
   : T[P];
};

const emp: DeepPartial<Employee> = {
   address: {
      country: "India"
   }
};

console.log(emp);

// OMIT<T>
// Removes specific properties.
interface UserData {
   id: number;
   password: string;
}

type UserPreview = Omit<UserData, "password">;

// READONLY
// Prevents value modification.
interface Task {
   readonly title: string;
}

// TYPE NARROWING
// Identifies datatype during runtime.
// TYPE GUARD
// Type guard checks datatype during runtime.
function format(input: string | number) {
   if(typeof input === "string") {
      return input.toUpperCase();
   } else {
      return input.toFixed(2);
   }
}

console.log(format("hello"));
console.log(format(12.456));

// CUSTOM TYPE GUARD
// Custom type guard validates object type.
// in operator checks whether property exists inside object.
interface Bird {
   fly: () => void;
}

function isBird(animal: any): animal is Bird {
   return "fly" in animal;
}

const bird = {
   fly: () => console.log("Flying")
};

console.log(isBird(bird));


// Express project
// Express.js is a Node.js framework used to create backend servers and APIs.

// IMPORTING EXPRESS
// require() imports the Express package.

// CREATING EXPRESS APP
// express() creates the server application.

// PORT
// PORT is used to run the server on specific number.

// GET METHOD
// app.get() handles GET requests from browser.

// REQUEST (req)
// req stores request data from client/browser.

// RESPONSE (res)
// res sends response back to client/browser.

// JSON RESPONSE
// res.json() sends data in JSON format.

// ROUTE PARAMETER
// req.params gets values from URL.

// TEMPLATE LITERALS
// Backticks (` `) allow dynamic string values.

// SERVER LISTEN
// app.listen() starts the server.

// .gitignore
// Prevents unnecessary files from uploading to GitHub.
// node_modules
// package-lock.json