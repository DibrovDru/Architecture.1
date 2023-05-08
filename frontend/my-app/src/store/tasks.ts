import {Employee, Project, Task} from "../types";
import {makeAutoObservable} from "mobx";
import AuthService from "../logic/services/AuthService";
import axios from "axios";
import {AuthResponce} from "../types/response/AithRespose";
import {API_URL} from "../logic/http";
import {projects, tasks} from "./state";

interface TasksObject {
    [key: number]: Task[]
}
export default class Tasks {
    storageTasks: TasksObject = {};
    constructor() {
        // this.storageTasks = tasks;

        makeAutoObservable(this);
    }
}

