import { Task } from './../types';
export const ADD_TASK = 'ADD-TASK';
export const ADD_EMPLOYEE = 'ADD-EMPLOYEE';




export function addTaskActionCreator(task: Task) {
    return {
        type: ADD_TASK,
        task
    }
}

export function addEmployeeActionCreator() {
    return {type: ADD_EMPLOYEE}
}