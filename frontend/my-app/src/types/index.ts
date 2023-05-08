import internal from "stream";

export enum ProjectCreateionStage {
    naming = 0,
    adding_employees = 1,
    creating_hierarchy = 2
}

export interface Project {
    id: number,
    name: string,
    description: string,
    creator: Employee
}

export enum TaskType {
    ToDo = 0,
    InProgress = 1,
    Done = 2
}

export interface Task {
    id: number,
    name: string,
    description: string,
    type: TaskType,
    creator: Employee,
    executor: Employee,
    sprint: Sprint
}

export interface Employee {
    id: number,
    name: string,
    surname: string,
    login: string
}

export interface Relation {
    id: number,
    boss: string,
    employee: string
}

export interface Comment {
    id: number,
    timestamp: string,
    author: Employee,
    text: string
}

export interface Sprint {
    id: number,
    name: string,
    date_start: string,
    date_end: string,
    is_actual: boolean,
    description: string,
}

export interface Error {
    code: number,
    message: string
}