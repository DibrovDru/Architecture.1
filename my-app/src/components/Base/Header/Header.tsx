import React from "react";
import base_styles from "../Base.module.css";
import styles from "./Header.module.css";
import logo from "../logo.svg";
import { type } from "os";

type NavBarButtonState = {
  isOpenNavBar: boolean;
  changeStateButton: Function;
};

function ButtonNavBar(props: NavBarButtonState) {
  return (
    <span
      className={styles.button_navbar}
      onClick={() => {
        if (props.isOpenNavBar) {
          props.changeStateButton(false);
        } else {
          props.changeStateButton(true);
        }
      }}
    >
      nav bar
    </span>
  );
  // return (
  //   <div>
  //     <input
  //       type="checkbox"
  //       id={styles.nav_trigger}
  //       className={styles.nav_trigger}
  //     />
  //     <label htmlFor={styles.nav_trigger}></label>
  //   </div>
  // );
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

export function Header(props: NavBarButtonState) {
  return (
    <div className={styles.header}>
      <div className={styles.part_header}>
        <ButtonNavBar
          changeStateButton={props.changeStateButton}
          isOpenNavBar={props.isOpenNavBar}
        />
        <Logo />
        <button>Create</button>
      </div>
      <Profile />
    </div>
  );
}
