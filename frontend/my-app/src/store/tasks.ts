import {Task} from "../types";
import {makeAutoObservable} from "mobx";


export default class Tasks {
    tasks: Task[] = [];
    constructor() {
        makeAutoObservable(this);
    }

    setTasks(tasks: Task[]) {
        this.tasks = tasks;
    }
}

