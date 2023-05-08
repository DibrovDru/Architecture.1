import Card from "react-bootstrap/Card";
import app_styles from "../App.module.css";
import React, {useContext} from "react";
import base_styles from "./base/base.module.css";
import {DropdownButton} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import {Context} from "../index";


function Profile() {
    const {storageCurrentState} = useContext(Context);
    return (
        <div style={{display: 'flex', marginTop: '5px'}} >
            <img src={require('../images/profile.png')} className={base_styles.profile} />
            {/*<text style={{whiteSpace: 'nowrap'}}>*/}
            {/*    Sophia Golovanova*/}
            {/*</text>*/}

            <DropdownButton
                id="dropdown-button"
                title="Sophia Golovanova"
            >
                <Dropdown.Item href="#/action-1" onClick={() => storageCurrentState.logout()}>Выйти</Dropdown.Item>
            </DropdownButton>

        </div>
    );
}

export default Profile;
