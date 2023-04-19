import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import MainPage from "./pages/MainPage";
import AutorisationPage from "./pages/AutorisationPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
    if (!true) {
        return (
            <MainPage/>
        );
    } else {
        return (
            // <AutorisationPage/>
            <RegistrationPage/>
        );
    }
}

export default App;
