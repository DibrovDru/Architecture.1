//////////////////////////////    TASKS    //////////////////////////////////////////////
// type TS~ using in C++
export type Task = {
    name: string,
    description?: string,
    type: string,
    creator?: Employee,
    executor: Employee
};
// export type Tasks = Array<Task>;

// type SimpleTask = {
//     name: string,
//     type: string,
//     creator: Employee
// };
// type SimpleTasks = Array<SimpleTask>;



//////////////////////////////    EMPLOYEES    //////////////////////////////////////////////
export type Employee = {
    name: string,
    surname?: string,
    login?: string,
    grade?: string
};
// export type Employees = Array<Employee>;



//////////////////////////////    COMMENTS    //////////////////////////////////////////////
export type Comment = {
    created: string,
    author: Employee,
    text: string
}
// export type Comments = Array<Comment>;


//////////////////////////////    DOCUMENTS    //////////////////////////////////////////////
export type Document = {
    created: string,
    name: string,
    author: Employee,
    text?: string
}
// export type Documents = Array<Document>;










/////////////////////////////////////////////////////////////////////////////////////////

// let isCompleed: boolean = false;

// const a: number = 6;
// const b: number = 6.3;

// const bruh: string = "adsvvads";
// const pep: string = `hello, ${bruh}`;

// const U: undefined = undefined;
// const n: null = null;


// const greetUser = (): void => {
//     alert("Hello, bro!");
// }


// let list: number[] = [1, 2, 3];
// let llll: Array<number> = [1, 2, 3];
// let t: [string, number] = ["asdf", 10];

// let mmmm: Array<any> = [1, 2, 3, "asfwe", true];

// enum Directions {
//     Up = 2,
//     Down = 4,
//     Left = 6,
//     Right
// }
// Directions.Up; // 2
// Directions.Down; // 4
// Directions.Left; // 6
// Directions.Right; // 7
// Directions[2]; // "Up"


// const create = (o: object | null): void => { };
// const createPassword = (name: string = "Max", age: number | string = 20): string => `${name}${age}`;

// let myFunc: (firstArg: string) => void;
// function oldFunc(name: string): void {
//     alert(`hello, ${name}, nice....`);
// };
// myFunc = oldFunc;




// type Person = {
//     name: string,
//     age: number,
//     nickName?: string,
//     getPass?: () => string
// }

// let user: Person = {
//     name: 'andrey',
//     age: 21,
//     nickName: 'avborovets'
// }

// let admin: Person = {
//     name: 'andrey',
//     age: 21,
//     // getPass: () => {
//     //     return "qwert";
//     // },
//     getPass(): string {
//         return "qwert";
//     },
// };


// class User {
//     static secret = 12345;

//     name: string;
//     age: number = 21;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     getPass(): string {
//         return `${this.name}${this.age}`;
//     }

//     setAge(age: number) {
//         this.age = age;
//     }
//     set myAge(age: number) {
//         this.age = age;
//     }
// }
// const andrew = new User('Andrey', 21);
// andrew.myAge = 31;
// andrew.setAge(12);


// class Andrey extends User {

//     name: string = 'Andrey';

//     constructor(age: number) {
//         super("Andrey", age);
//     }

// }

// const A = new Andrey(31);






// interface UserI {
//     readonly name: string,
//     age?: number;
//     nickname: string
// };

// type UserT = {
//     name: string,
//     age?: number
// };



// interface UserII {
//     readonly name: string,
//     age: number;
//     [propName: string]: any
// };

// const asdf: UserII = {
//     name: 'asdf',
//     age: 31,
//     nickname: 'asdf',
//     justTest: 'asdsd'
// }