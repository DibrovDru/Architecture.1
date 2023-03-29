import {ADD_EMPLOYEE} from '../ActionCreators';

let initial_state = {
    employees: [
        {
            name: "Andrey",
            surname: "Borovets",
          },
          {
            name: "Andrey",
            surname: "Dibrov",
          },
          {
            name: "Ivan",
            surname: "Petrov",
          },
          {
            name: "kek",
            surname: "popov",
          },
    ]
}

function employeeReducer(state = initial_state, action: any) {
    switch (action.type) {
        case ADD_EMPLOYEE:
            let newEmployee = {
                name: "lol",
                executor: "lol"
            }
            // state.tasks.push(newTask);
            return {employees : [...state.employees, newEmployee]};
        default:
            return state;
    }
}



export default employeeReducer;