import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponce} from "../../types/response/AithRespose";
import {Project} from "../../types";
import {projects} from "../../store/state";

export default class ProjectsService {
    static /* async */ fetchProjects() : Project[] /* Promise<AxiosResponse<Project[]>> */ {
        // storageProjects.setProjects(projects);
        return projects;
        // return $api.get<Project[]>('/projects')
    }

    static /* async */ fetchProject(project_id: string | undefined) : Project /* Promise<AxiosResponse<Project[]>> */ {
        // storageProjects.setProjects(projects);
        return projects.filter(p => String(p.id) == project_id)[0];
        // return $api.get<Project[]>('/projects')
    }

    static /* async */ pushProject(project_id: string, name: string, description: string) : Project /* Promise<AxiosResponse<Project[]>> */ {
        // storageProjects.setProjects(projects);

        return {} as Project; // projects.filter(p => String(p.id) == project_id)[0];
        // return $api.get<Project[]>('/projects')
    }
}