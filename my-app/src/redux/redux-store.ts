import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {tasksReducer} from "./tasks-reducer"; 
import {employeeReducer} from "./employees-reducer"; 
import type { Reducer } from '@reduxjs/toolkit';

let reducers = combineReducers({
    tasks: tasksReducer,
    employees: employeeReducer
});

let store = configureStore({reducer: reducers});

export default store;