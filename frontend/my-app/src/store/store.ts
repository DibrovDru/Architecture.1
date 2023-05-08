import {Employee, Project} from "../types";
import {makeAutoObservable} from "mobx";
import AuthService from "../logic/services/AuthService";
import axios from "axios";
import {AuthResponce} from "../types/response/AithRespose";
import {API_URL} from "../logic/http";
import {projects} from "./state";

export default class Store {
    user = {} as Employee
    isAuth = false;

    currentProject: Project = {} as Project;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: Employee) {
        this.user = user;
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



    setProject(project: Project) {
        console.log("aaaaaaaaaaaaaa");
        console.log(project);
        this.currentProject = project;
    }
}

