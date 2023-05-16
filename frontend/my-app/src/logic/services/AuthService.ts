import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponce} from "../../types/response/AuthRespose";
export default class AuthService {
    static async login(email: string, password: string) : Promise<AxiosResponse<AuthResponce>> {
        return {} as Promise<AxiosResponse<AuthResponce>> // $api.post<AuthResponce>('/login', {email, password})
    }

    static async registrate(email: string, password: string, name: string) : Promise<AxiosResponse<AuthResponce>> {
        return $api.post<AuthResponce>('/registration', {email, password, name})
    }

    static async logout() : Promise<AxiosResponse<AuthResponce>> {
        return $api.post<AuthResponce>('/logout')
    }
}