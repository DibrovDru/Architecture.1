import React from "react";
import "./App.css";

import { Tasks } from "./components/Tasks/Tasks";
import { Employees } from "./components/Employees/Employees";
import { NavBar } from "./components/Base/NavBar/NavBar";
import { Header } from "./components/Base/Header/Header";
import { Route, NavLink, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
