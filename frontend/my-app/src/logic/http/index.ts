import axios from 'axios';
import {AuthResponce} from "../../types/response/AithRespose";

export const API_URL = `http://localhost:5000/api`;

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