import axios from 'axios';
import {AuthResponce} from "../../types/response/AithRespose";

export const API_URL = `https://e464-176-214-100-148.ngrok-free.app`;



export const PROJECTS_URL = (project_id: string = '') =>
    `/projects/${project_id}`;
export const SPRINTS_URL = (project_id: string, sprint_id: string = '') =>
    `/projects/${project_id}/sprints/${sprint_id}`;
export const EMPLOYEES_URL = (project_id: string, relation: boolean = false) =>
    `/projects/${project_id}/employees/${relation ? 'relation' : ''}`;
export const TASKS_URL = (project_id: string, sprint_id: string, task_id: string = '') =>
    `/projects/${project_id}/tasks/sprints/${sprint_id}/${task_id}`;
export const COMMENTS_URL = (project_id: string, sprint_id: string, task_id: string, comment_id: string = '') =>
    `/projects/${project_id}/tasks/sprints/${sprint_id}/${task_id}/comments/${comment_id}`;




const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest.isRetry = true;
        try {
            const responce = await axios.get<AuthResponce>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', responce.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('пользоватлье не авторизован!!!')
        }
    }
    throw error;
})


export default $api;