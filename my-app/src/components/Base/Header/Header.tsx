import styles from "./Header.module.css";
import logo from "../logo.svg";

import { NavBarButtonState } from "../NavBar/NavBar";

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

function Header(props: any) {
  // console.log(props.addTask);
  // debugger;

  return (
    <div className={styles.header}>
      <div className={styles.part_header}>
        <ButtonNavBar
          changeStateButton={props.changeStateButton}
          isOpenNavBar={props.isOpenNavBar}
        />
        <Logo />
        <button onClick={props.addTask}>Create</button>
      </div>
      <Profile />
    </div>
  );
}

export default Header;
