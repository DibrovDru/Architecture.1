import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import MainPage from "./pages/MainPage";
import AutorisationPage from "./pages/AutorisationPage";
import RegistrationPage from "./pages/RegistrationPage";
import CreationProject from "./pages/CreationProject";
import Projects from "./pages/Projects";

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
