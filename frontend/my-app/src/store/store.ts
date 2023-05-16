import {Employee, Project, Sprint, Task} from "../types";
import {makeAutoObservable} from "mobx";
import AuthService from "../logic/services/AuthService";
import axios from "axios";
import {AuthResponce} from "../types/response/AuthRespose";
import {API_URL} from "../logic/http";

export default class Store {
    _user = {id: 0, name: 'Sophia', surname: 'Golovvanova', login: 'sonyalogin'}; //{} as Employee
    _isAuth = false;

    _currentProject: Project = {} as Project;
    _currentSprint: Sprint = {} as Sprint;
    _currentTask: Task = {} as Task;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this._isAuth = bool;
    }

    setUser(user: Employee) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get currentProject() {
        return this._currentProject;
    }

    setCurrentProject(project: Project) {
        console.log("setting current project");
        console.log(project);
        this._currentProject = project;
        console.log(this.currentProject.name);
    }

    get currentSprint() {
        return this._currentSprint
    }

    setCurrentSprint(sprint: Sprint) {
        console.log("setting current sprint");
        console.log(sprint);
        this._currentSprint = sprint;
        console.log(this.currentSprint.name);
    }

    get currentTask() {
        return this._currentTask
    }

    setCurrentTask(task: Task) {
        console.log("setting current task");
        console.log(task);
        this._currentTask = task;
        console.log(this.currentTask.name);
    }



     async login(email: string, password: string) {
        try {
            const responce = await AuthService.login(email, password);
            localStorage.setItem('token', responce.data.accessToken);
            this.setAuth(true);
            this.setUser(responce.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
     }

    async registration(email: string, password: string, name: string) {
        try {
            const responce = await AuthService.registrate(email, password, name);
            localStorage.setItem('token', responce.data.accessToken);
            this.setAuth(true);
            this.setUser(responce.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const responce = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as Employee);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            const responce = await axios.get<AuthResponce>(`${API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', responce.data.accessToken);
            this.setAuth(true);
            this.setUser(responce.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

}

