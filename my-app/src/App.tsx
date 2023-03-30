import React, { useState } from "react";
import "./App.css";

import Tasks from "./components/Tasks/ContainerTasks";
import { Employees } from "./components/Employees/Employees";
import { NavBar } from "./components/Base/NavBar/NavBar";
import Header from "./components/Base/Header/ContainerHeader";
import { Route, NavLink, Routes } from "react-router-dom";

import { NewTaskPanel } from "./components/Tasks/Tasks";

function App() {
  let StateNavBar = useState(true);

  let StateNewTaskPanel = useState(false);

  let VirtualNavBar;
  if (StateNavBar[0]) {
    VirtualNavBar = <NavBar />;
  } else {
    VirtualNavBar = <div></div>;
  }

  return (
    <div className="App">
      {StateNewTaskPanel[0] ? <NewTaskPanel /> : <></>}
      <Header StateNavBar={StateNavBar} StateNewTaskPanel={StateNewTaskPanel} />
      <div className="navbar_content">
        {VirtualNavBar}
        <Routes>
          <Route
            path="/tasks"
            element={<Tasks isOpenNavBar={StateNavBar[0]} />}
          />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
