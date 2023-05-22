import {Employee, Project} from "../types";
import {makeAutoObservable} from "mobx";
import AuthService from "../logic/services/AuthService";
import axios from "axios";
import {AuthResponce} from "../types/response/AuthRespose";
import {API_URL} from "../logic/http";

export default class Projects {
    _storageProjects: Project[] = [];
    constructor() {
        // this.storageProjects = projects;
        makeAutoObservable(this);
    }

    setProjects(projects: Project[]) {
        this._storageProjects = projects;
    }

    get getProjects() {
        return this._storageProjects;
    }
}

