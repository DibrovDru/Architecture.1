import {ADD_TASK} from '../ActionCreators/';

let initial_state = [
        {
            name: "frontend",
            executor: "Andrey",
          },
          {
            name: "backend",
            executor: "Andrey",
          },
          {
            name: "Technical description",
            executor: "Sveta",
          },
          {
            name: "disgn",
            executor: "Sonya",
          },
    ]

function tasksReducer(state = initial_state, action: any) {
    // debugger;
    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                name: "bruh",
                executor: "Vasya"
            }
            // state.tasks.push(newTask);
            return [...state, newTask];
        default:
            return state;
    }
}



export default tasksReducer;