// readonly
// const user = {
//     id: 21,
//     name: "Gokul",
//     age: 21
// } as const;

// // user.name = "Yady"
// console.log(user);


interface Task {
    readonly title: string;
    completed: boolean;
}

// readonly<T>
const myTask: Readonly<Task> = {
    title: "Do Homework",
    completed: true
}

const myTask1: Task = {
    title: "Do Homework",
    completed: true
}

// myTask.completed = false;

console.log(myTask);
console.log(myTask1);

// readonly array
const scores: ReadonlyArray<number> = [10, 20, 30];
console.log(scores[0]);
