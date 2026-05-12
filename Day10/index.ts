// Advanced TypeScript
// Types in TS
// ENUM
enum Role {
    Adminn = "Admin",
    Userr = "User",
    SuperUser = "SuperUser"
}
enum Priviledge {
    Read = "Read",
    Write = "Write",
    Delete = "Delete"
}

// type alias (union type(|), intersection type(&))
type Emp = { id: number | string, name: string, role: Role }; // keyof -> "id" | "name" | "role"
type Admin = { priviledges: Priviledge[] };
type SuperUser = Emp & Admin;

// array with multiple types
let list: (Emp | Admin | SuperUser)[] = []; // any -> anything
function addEmp(emp: Emp | Admin | SuperUser): void {
    list.push(emp);
}

// function with typed parameters
function getEmp(index: number) {
    console.log(list[index]);
}

addEmp({ id: 10, name: "Gokul", role: Role.Userr });
addEmp({ id: "xyz", name: "yady", role: Role.Userr });
addEmp({ id: 20, name: "Dilip", role: Role.Adminn, priviledges: [Priviledge.Read, Priviledge.Write] });
getEmp(0);
getEmp(1);
getEmp(2);

// keyof & typeof
const points = {x: 10, y: 20};
type PointKeys = keyof typeof points; // Result "x" | "y"

// generic function
function getProperty<T, K extends keyof T>(obj: T, key: K) { // keyof "id" | "username" | "email"
    return obj[key];
}

const user = { id: 1, username: "hellion", email: "xyz@example.com" }
// console.log(getProperty(user, "email"));
// console.log(getProperty(user, "username"));
// console.log(getProperty(user, "id"));