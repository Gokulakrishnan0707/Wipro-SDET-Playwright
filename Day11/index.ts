// TS Code Practice
// 1. The Generic API Wrapper
async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data: T = await response.json();
    return data;
}
interface Album {
    userId: number,
    id: number,
    title: string
}

async function getAlbum() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    const album = await fetchData<Album>(url);

    console.log(`Album ID: ${album.id}`)
    console.log(`Album Title: ${album.title}`)
}

getAlbum();


// 2. Record Mapping for Configuration
enum UserRole {
  Admin1 = "Admin",
  Editor = "Editor",
  Guest = "Guest"
}

const PermissionMap: Record<UserRole, boolean> = {
  [UserRole.Admin1]: true,
  [UserRole.Editor]: true,
  [UserRole.Guest]: false
};

console.log(PermissionMap);


// 3. Exhaustiveness Checking (never Type)
// added the archived in 45 and 63 line for the testing part so that it won't thrown an error
type TaskStatus = "Open" | "InProgress" | "Closed" | "Archived";

function handleTask(status: TaskStatus) {
  switch (status) {
    case "Open":
      console.log("Task is open");
      break;

    case "InProgress":
      console.log("Task is in progress");
      break;

    case "Closed":
      console.log("Task is closed");
      break;
    
// test part
    case "Archived":
      console.log("Task is archived");
      break;

    default:
      const check: never = status;
      console.log(check);
  }
}

handleTask("Open");
handleTask("InProgress");
handleTask("Closed");
handleTask("Archived");

// 4. Recursive Navigation Type
type FolderNode = {
  name: string;
  files?: string[];
  subFolders?: FolderNode[];
};

// 5. Template Literal Types for CSS
type MarginValue =
  | `${number}px`
  | `${number}rem`
  | `${number}vh`;

// Valid
let margin1: MarginValue = "10px";
let margin2: MarginValue = "2rem";
let margin3: MarginValue = "50vh";


// 6. Conditional types and infer keyword
// Utility Type
type UnwrapPromise<T> =
  T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>;
type B = UnwrapPromise<Promise<number>>;
type C = UnwrapPromise<boolean>;

console.log("Conditional Types Example");


// 7. Union manipulation Puzzle
type AllEvents =
  | "click"
  | "dbclick"
  | "submit"
  | "reset"
  | "keypress";

// Extract
type MouseEvents =
  Extract<AllEvents, "click" | "dbclick">;

// Exclude
type NonFormEvents =
  Exclude<AllEvents, "submit" | "reset">;

console.log("Union Manipulation Example");


// 8. Async higher-order function (HOP)
// Higher Order Function
function safeExecute<T extends (...args: any[]) => Promise<any>>(fn: T) {
  return async (...args: Parameters<T>) => {

    try {
      const result = await fn(...args);
      return result;

    } catch (error) {
      console.log("Error:", error);
      return null;
    }
  };
}

// 9. Index signatures for dynamic metedata
interface UserMetadata {
  createdAt: Date;
  [key: string]:
    | string
    | number
    | boolean
    | Date;
}

// 10. Mapped types with key remapping
// Interface
interface Car {
  make: string;
  model: string;
}

// Mapped Type
type ApiResponse<T> = {
  [K in keyof T as `DATA_${Uppercase<string & K>}`]:
    T[K];
};

// Result Type
type CarApiResponse = ApiResponse<Car>;

// Example Object
const carData: CarApiResponse = {
  DATA_MAKE: "Ford",
  DATA_MODEL: "Skoda"
};

console.log(carData);