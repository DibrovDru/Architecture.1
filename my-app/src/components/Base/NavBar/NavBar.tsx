import React from "react";
import base_styles from "../Base.module.css";
import styles from "./NavBar.module.css";
import logo from "../logo.svg";

type NavBarButtonState = {
  isOpenNavBar: boolean;
  changeStateButton: Function;
};

function Project() {
  return (
    <div className={styles.project}>
      <img src={logo} className={styles.project_picture} />
      <div className={styles.project_name}>Project Name</div>
    </div>
  );
}

export function NavBar() {
  return (
    <div className={styles.navbar}>
      <Project />
      <div className={styles.menu}>
        <li>
          <img src={logo} className={styles.menu_list} />
          <text>Tasks</text>
        </li>
        <li>
          <img src={logo} className={styles.menu_list} />
          <text>Employees</text>
        </li>
        <li>
          <img src={logo} className={styles.menu_list} />
          <text>Documents</text>
        </li>
      </div>
    </div>
  );
}
