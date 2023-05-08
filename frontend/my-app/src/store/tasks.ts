import {Employee, Project, Task, TasksPerSprint} from "../types";
import {makeAutoObservable} from "mobx";
import AuthService from "../logic/services/AuthService";
import axios from "axios";
import {AuthResponce} from "../types/response/AithRespose";
import {API_URL} from "../logic/http";
import {projects, tasks} from "./state";


export default class Tasks {
    tasks: TasksPerSprint = {};
    constructor() {
        makeAutoObservable(this);
    }

    setTasks(sprint_id: number, tasks: Task[]) {
        this.tasks[sprint_id] = tasks;
    }
}

