import {Employee, Project, Task} from "../types";
import {makeAutoObservable} from "mobx";
import AuthService from "../logic/services/AuthService";
import axios from "axios";
import {AuthResponce} from "../types/response/AithRespose";
import {API_URL} from "../logic/http";

export default class Store {
    _user = {id: 0, name: 'Sophia', surname: 'Golovvanova', login: 'sonyalogin'}; //{} as Employee
    _isAuth = false;

    _currentProject: Project = {} as Project;
    // _tasks: Task[] = [];

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

    setProject(project: Project) {
        console.log("setting current project");
        console.log(project);
        this._currentProject = project;
        console.log(this.currentProject.name);
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

