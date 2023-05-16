import {Project, Employee, Task, Sprint, Comment} from "../types";
import data from './data.json';
export const defaultProjects: Project[] = data.projects;
export const defaultTasks: Task[] = data.tasks;

export const defaultSprints: Sprint[] = data.sprints;

export const defaultComments: Comment[] = data.comments;

export const defaultUsers: Employee[] = data.users;
