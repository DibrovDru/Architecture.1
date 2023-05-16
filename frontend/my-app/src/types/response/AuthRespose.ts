import {Employee} from "../index";

export interface AuthResponce {
    accessToken: string;
    user: Employee
}