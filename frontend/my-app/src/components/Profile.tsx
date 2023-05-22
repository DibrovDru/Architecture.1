import Card from "react-bootstrap/Card";
import app_styles from "../App.module.css";
import React, {FC, useContext} from "react";
import base_styles from "./base/base.module.css";
import {DropdownButton} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import {Context} from "../index";
import {Employee} from "../types";
import {useNavigate} from "react-router-dom";


const Profile: FC<Employee> = (employee) => {
    const {storageCurrentState} = useContext(Context);
    const navigate = useNavigate();

    const logout = () => {
        storageCurrentState.logout();
        navigate("/login");
    }

    return (
        <div style={{display: 'flex', marginTop: '5px'}} >
            <img src={require('../images/profile.png')} className={base_styles.profile} />
            {/*<text style={{whiteSpace: 'nowrap'}}>*/}
            {/*    Sophia Golovanova*/}
            {/*</text>*/}

            <DropdownButton
                id="dropdown-button"
                title={employee.name}
            >
                <Dropdown.Item onClick={logout}>Выйти</Dropdown.Item>
            </DropdownButton>

        </div>
    );
}

export default Profile;
