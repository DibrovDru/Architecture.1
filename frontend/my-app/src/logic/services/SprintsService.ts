import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponce} from "../../types/response/AuthRespose";
import {Project, Sprint, Task} from "../../types";
import {defaultSprints, defaultTasks} from "../../store/state";
import {projects, tasks, sprints} from '../../index';

export default class SprintsService {
    static fetchSprints(project_id: number = 1) : Sprint[] {
        if (sprints.getSprints.length == 0) {
            return defaultSprints
        }
        return sprints.getSprints;
    }

    // static async fetchProjects() : Promise<AxiosResponse<Project[]>>  {
    //     const response = await $api.get<Project[]>('/projects');
    //     return response;
    // }

    static /* async */ fetchSprint(sprint_id: number) : Sprint /* Promise<AxiosResponse<Project[]>> */ {
        return sprints.getSprints.filter(sprint => sprint.id == sprint_id)[0];
        // return $api.get<Project[]>('/projects')
    }

    static /* async */ pushSprints(sprint_id: number, name: string, description: string) : Sprint /* Promise<AxiosResponse<Project[]>> */ {
        for (var i = 0; i < sprints.getSprints.length; i++) {
            if (sprint_id == sprints.getSprints[i].id) {
                sprints.getSprints[i].name = name;
                sprints.getSprints[i].description = description
            }
        }
        return {} as Sprint; // projects.filter(p => String(p.id) == project_id)[0];
        // return $api.get<Project[]>('/projects')
    }
}