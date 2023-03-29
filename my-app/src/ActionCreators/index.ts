export const ADD_TASK = 'ADD-TASK';
export const ADD_EMPLOYEE = 'ADD-EMPLOYEE';




export function addTaskActionCreator() {
    return {type: ADD_TASK}
}

export function addEmployeeActionCreator() {
    return {type: ADD_EMPLOYEE}
}