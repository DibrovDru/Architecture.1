import React, {useContext, useEffect} from 'react';

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


import {BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {PROJECTS_URL, TASKS_URL} from "./logic/http";
import { useParams } from 'react-router-dom';




function App() {
    const { storageCurrentState } = useContext(Context);

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         storageCurrentState.checkAuth();
    //     }
    // }, []);

    return (
        <Router>
            <Routes>
                {storageCurrentState.isAuth ? (
                    <Route
                        path="/*"
                        element={
                            <>
                                <Navigate to="/projects" />
                            </>
                        }
                    />
                ) : (
                    <Route
                        path="/*"
                        element={
                            <>
                                <Navigate to="/login" />
                            </>
                        }
                    />
                )}
                <Route path="/login" element={<AutorisationPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:project_id" element={<InfoProjectPage />} />
                <Route path="/projects/:project_id/tasks" element={<TasksPage />} />
                <Route path="/projects/:project_id/employees" element={<EmployeesPage />} />
                <Route path="/projects/:project_id/sprints" element={<SprintsPage />} />
            </Routes>
        </Router>
    );
}

export default observer(App);
