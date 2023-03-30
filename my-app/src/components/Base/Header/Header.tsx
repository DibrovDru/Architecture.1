import styles from "./Header.module.css";
import logo from "../logo.svg";

import { NavBarButtonState } from "../../../types";
import { Dispatch } from "react";

function ButtonNavBar({ isOpenNavBar, changeStateButton }: NavBarButtonState) {
  return (
    <span
      className={styles.button_navbar}
      onClick={() => {
        if (isOpenNavBar) {
          changeStateButton(false);
        } else {
          changeStateButton(true);
        }
      }}
    >
      nav bar
    </span>
  );
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

function Header({
  NavBarButtonState,
  addTask,
}: {
  NavBarButtonState: NavBarButtonState;
  addTask: Dispatch<any>;
}) {
  // console.log(addTask);
  // debugger;

  return (
    <div className={styles.header}>
      <div className={styles.part_header}>
        <ButtonNavBar
          changeStateButton={NavBarButtonState.changeStateButton}
          isOpenNavBar={NavBarButtonState.isOpenNavBar}
        />
        <Logo />
        <button onClick={addTask}>Create</button>
      </div>
      <Profile />
    </div>
  );
}

export default Header;
