import React, { useState } from "react";
import "./App.css";

import { Tasks } from "./components/Tasks/Tasks";
import { Employees } from "./components/Employees/Employees";
import { NavBar } from "./components/Base/NavBar/NavBar";
import { Header } from "./components/Base/Header/Header";
import { Route, NavLink, Routes } from "react-router-dom";
import { ConfigureStoreOptions } from "@reduxjs/toolkit";

function App() {
  let [isOpenNavBar, changeStateButton] = useState(true);

  let VirtualNavBar;
  if (isOpenNavBar) {
    VirtualNavBar = <NavBar />;
  } else {
    VirtualNavBar = <div></div>;
  }

  return (
    <div className="App">
      <Header
        changeStateButton={changeStateButton}
        isOpenNavBar={isOpenNavBar}
      />
      <div className="navbar_content">
        {VirtualNavBar}
        <Routes>
          <Route
            path="/tasks"
            element={<Tasks isOpenNavBar={isOpenNavBar} />}
          />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
