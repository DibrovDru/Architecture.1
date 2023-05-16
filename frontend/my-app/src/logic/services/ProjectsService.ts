import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponce} from "../../types/response/AuthRespose";
import {Project} from "../../types";
import {defaultProjects} from "../../store/ts_objects";
import {projects} from '../../index';

export default class ProjectsService {
    static fetchProjects() : Project[] {
        if (projects.getProjects.length == 0) {
            return defaultProjects
        }
        return projects.getProjects;
    }
    // static async fetchProjects() : Promise<AxiosResponse<Project[]>>  {
    //     const response = await $api.get<Project[]>('/projects');
    //     return response;
    // }

    static /* async */ fetchProject(project_id: string | undefined) : Project /* Promise<AxiosResponse<Project[]>> */ {
        return projects.getProjects.filter(p => String(p.id) == project_id)[0];
        // return $api.get<Project[]>('/projects')
    }

    static /* async */ pushProject(project_id: string, name: string, description: string) : Project /* Promise<AxiosResponse<Project[]>> */ {
        for (var i = 0; i < projects.getProjects.length; i++) {
            if (project_id == String(projects.getProjects[i].id)) {
                projects.getProjects[i].name = name;
                projects.getProjects[i].description = description
            }
        }
        return {} as Project; // projects.filter(p => String(p.id) == project_id)[0];
        // return $api.get<Project[]>('/projects')
    }
}