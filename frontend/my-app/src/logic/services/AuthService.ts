import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponce} from "../../types/response/AithRespose";
export default class AuthService {
    static async login(email: string, password: string) : Promise<AxiosResponse<AuthResponce>> {
        return $api.post<AuthResponce>('/login', {email, password})
    }

    static async registrate(email: string, password: string, name: string) : Promise<AxiosResponse<AuthResponce>> {
        return $api.post<AuthResponce>('/registration', {email, password, name})
    }

    static async logout() : Promise<AxiosResponse<AuthResponce>> {
        return $api.post<AuthResponce>('/logout')
    }
}