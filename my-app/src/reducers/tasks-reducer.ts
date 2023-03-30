import {ADD_TASK} from '../ActionCreators/';
import { Task, Employee } from '../types';

let initial_state: Array<Task> = [
          {
            type: "DONE",
            name: "frontend",
            executor: {name:"Andrey"}
          },
          {
            type: "DONE",
            name: "backend",
            executor: {name:"Vasya"}
          },
          {
            type: "TODO",
            name: "design",
            executor: {name:"Sonya"}
          },
    ]

function tasksReducer(state = initial_state, action: any) {
    switch (action.type) {
        case ADD_TASK:
            // let newTask = {
            //     type: "INPROGRESS",
            //     name: "bruh",
            //     executor: {name:"Vasya"}
            // }
            // state.tasks.push(newTask);
            return [...state, action.task];
        default:
            return state;
    }
}



export default tasksReducer;