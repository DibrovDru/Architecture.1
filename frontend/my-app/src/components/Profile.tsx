import Card from "react-bootstrap/Card";
import app_styles from "../App.module.css";
import React from "react";
import base_styles from "./base/base.module.css";

function Profile() {
    return (
        <div style={{display: 'flex', marginTop: '5px'}}>
            <img src={require('../images/profile.png')} className={base_styles.profile} />
            <text style={{whiteSpace: 'nowrap'}}>
                Sophia Golovanova
            </text>
        </div>
    );
}

export default Profile;
