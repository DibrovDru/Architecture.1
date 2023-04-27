import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.module.css';
import TasksPage from "./pages/main_tasks_page/TasksPage";
import AutorisationPage from "./pages/reg_auth_page/AutorisationPage";
import RegistrationPage from "./pages/reg_auth_page/RegistrationPage";
import CreationProject from "./pages/creation_project/CreationProject";
import ProjectsPage from "./pages/projects_page/ProjectsPage";
import EmployeesPage from "./pages/main_employees_page/EmployeesPage";
import SprintsPage from "./pages/main_sprints_page/SprintsPage";

function App() {
    if (!true) {
        return (
            <TasksPage/>
        );
    } else {
        return (
            // <AutorisationPage/>
            // <RegistrationPage/>
            // <CreationProject/>
            // <ProjectsPage/>
            // <TasksPage/>
            // <EmployeesPage/>
            <SprintsPage/>
        );

    }
}

export default App;
