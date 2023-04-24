import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.module.css';
import MainPage from "./pages/main_page/MainPage";
import AutorisationPage from "./pages/reg_auth_page/AutorisationPage";
import RegistrationPage from "./pages/reg_auth_page/RegistrationPage";
import CreationProject from "./pages/creation_project/CreationProject";
import Projects from "./pages/projects/Projects";

function App() {
    if (!true) {
        return (
            <MainPage/>
        );
    } else {
        return (
            // <AutorisationPage/>
            // <RegistrationPage/>
            // <CreationProject/>
            // <Projects/>
            <MainPage/>
        );

    }
}

export default App;
