import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponce} from "../../types/response/AithRespose";
import {Project, Task} from "../../types";
import {defaultTasks} from "../../store/state";
import {projects, tasks} from '../../index';

export default class TasksService {
    static fetchTasks(project_id: number) : Task[] {
        if (tasks.getTasks.length == 0) {
            return defaultTasks
        }
        return tasks.getTasks;
    }

    // static async fetchProjects() : Promise<AxiosResponse<Project[]>>  {
    //     const response = await $api.get<Project[]>('/projects');
    //     return response;
    // }

    static /* async */ fetchTask(task_id: number) : Project /* Promise<AxiosResponse<Project[]>> */ {
        return tasks.getTasks.filter(task => task.id == task_id)[0];
        // return $api.get<Project[]>('/projects')
    }

    static /* async */ pushTask(project_id: string, name: string, description: string) : Project /* Promise<AxiosResponse<Project[]>> */ {
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