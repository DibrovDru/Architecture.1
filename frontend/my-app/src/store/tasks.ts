import {Task} from "../types";
import {makeAutoObservable} from "mobx";


export default class Tasks {
    _tasks: Task[] = [];
    constructor() {
        makeAutoObservable(this);
    }

    setTasks(tasks: Task[]) {
        this._tasks = tasks;
    }

    get getTasks() {
        return this._tasks;
    }
}

