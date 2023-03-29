import { combineReducers } from 'redux'
import tasksReducer from './tasks-reducer'
import employeeReducer from './employees-reducer'

export default combineReducers({
  tasksReducer,
  employeeReducer
})