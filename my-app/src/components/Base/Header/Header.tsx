import styles from "./Header.module.css";
import logo from "../logo.svg";

import { NavBarButtonState } from "../../../types";
import { Dispatch } from "react";

function ButtonNavBar({
  StateNavBar,
}: {
  StateNavBar: [boolean, Dispatch<any>];
}) {
  let [isOpenNavBar, changeStateNavBar] = StateNavBar;
  // console.log("888888888");
  // console.log(props);
  // debugger;
  return (
    <span
      className={styles.button_navbar}
      onClick={() => {
        if (isOpenNavBar) {
          changeStateNavBar(false);
        } else {
          changeStateNavBar(true);
        }
      }}
    >
      nav bar
    </span>
  );
}

function NewTaskPanel({
  StateNewTaskPanel,
}: {
  StateNewTaskPanel: [boolean, Dispatch<any>];
}) {
  let [isOpenPanel, changeStatePanel] = StateNewTaskPanel;
  // console.log("888888888");
  // console.log(props);
  // debugger;
  return (
    <span
      className={styles.button_navbar}
      onClick={() => {
        if (isOpenPanel) {
          changeStatePanel(false);
        } else {
          changeStatePanel(true);
        }
      }}
    >
      Create
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

{
  /* <Header StateNavBar={StateNavBar}, 
StateNewTaskPanel={StateNewTaskPanel} /> */
}
function Header({
  StateNavBar,
  StateNewTaskPanel,
}: {
  StateNavBar: any;
  StateNewTaskPanel: any;
}) {
  // console.log(addTask);
  // debugger;

  return (
    <div className={styles.header}>
      <div className={styles.part_header}>
        <ButtonNavBar StateNavBar={StateNavBar} />
        <Logo />
        {/* <button onClick={addTask}>Create</button> */}
        {/* <button onClick={StateNewTaskPanel}>Create</button> */}
        <NewTaskPanel StateNewTaskPanel={StateNewTaskPanel} />
      </div>
      <Profile />
    </div>
  );
}

export default Header;
