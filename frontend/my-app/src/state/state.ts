import {Project, Employee} from "../types";
import data from './projects.json';
export const projects: Project[] = data;

// fetch(require('projects.json'))
//     .then(response => response.json())
//     .then((data: Project[]) => {
//         projects = data;
//     });

