import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponce} from "../../types/response/AithRespose";
import {Project} from "../../types";
export default class ProjectsService {
    static async fetchProjects() : Promise<AxiosResponse<Project[]>> {
        return $api.get<Project[]>('/projects')
    }
}