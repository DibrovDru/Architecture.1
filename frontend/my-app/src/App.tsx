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
import InfoProjectPage from "./pages/main_info_project_page/InfoProjectPage";


import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';



function App() {
    const navigate = useNavigate();

    if (true) {
        navigate('/login');
    }

    return (
            <Router>
                <Routes>
                    <Route path="/login" element={<AutorisationPage />}/>

            {/*// <RegistrationPage/>*/}
            {/*// <CreationProject/>*/}
            {/*// <ProjectsPage/>*/}
            {/*// <TasksPage/>*/}
            {/*// <EmployeesPage/>*/}
            {/*// <SprintsPage/>*/}
            {/*// <InfoProjectPage/>*/}
                </Routes>
            </Router>
        );
}

export default App;
