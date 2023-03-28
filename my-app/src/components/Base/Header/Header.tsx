import React from "react";
import base_styles from "../Base.module.css";
import styles from "./Header.module.css";
import logo from "../logo.svg";

function ButtonNavBar() {
  return <span className={styles.button_navbar}>nav bar</span>;
}

function Logo() {
  return <img src={logo} className={styles.logo} />;
}

function Profile() {
  return (
    <div className={styles.part_header}>
      <text>profile</text>
      <img src={logo} className={styles.logo} />
    </div>
  );
}

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.part_header}>
        <ButtonNavBar />
        <Logo />
        <button>Create</button>
      </div>
      <Profile />
    </div>
  );
}
