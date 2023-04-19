import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import MainPage from "./pages/MainPage";
import AutorisationPage from "./pages/AutorisationPage";

function App() {
    if (!true) {
        return (
            <MainPage/>
        );
    } else {
        return (
            <AutorisationPage/>
        );
    }
}

export default App;
