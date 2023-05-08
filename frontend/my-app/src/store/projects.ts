import {Employee, Project} from "../types";
import {makeAutoObservable} from "mobx";
import AuthService from "../logic/services/AuthService";
import axios from "axios";
import {AuthResponce} from "../types/response/AithRespose";
import {API_URL} from "../logic/http";
import {projects} from "./state";

export default class Projects {
    storageProjects: Project[] = [];
    constructor() {
        this.storageProjects = projects;
        makeAutoObservable(this);
    }
}

