import React from "react";
import Nav from 'react-bootstrap/Nav';
import app_styles from '../../App.module.css';
import base_styles from './base.module.css';

function Footer() {
    return (
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            style={{border: 'solid 1px',
                    position: 'fixed',
                    left: '10%',
                    right: '10%',
                    bottom: 0,
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            className={app_styles.white}
        >
            <Nav.Item>
                <div className={base_styles.footer_left_part}>
                    <img src={require('../../images/logo.png')} className={app_styles.logo}/>
                <text>
                    © 2023 AO “Deta”
                </text>
                </div>
            </Nav.Item>
            <Nav.Item className={`${base_styles.footer_center_part} ${app_styles.header_weight}`}>
                <Nav.Link eventKey="link-1" style={{color: 'black'}}>FAQ</Nav.Link>
                <Nav.Link eventKey="link-2" style={{color: 'black'}}>Связаться</Nav.Link>
                <Nav.Link eventKey="link-3" style={{color: 'black'}}>Покупка</Nav.Link>
            </Nav.Item>
            <Nav.Item className={base_styles.footer_right_part}>
                <img src={require('../../images/youtube.png')} />
                <img src={require('../../images/vk.png')} />
            </Nav.Item>
        </Nav>
    );
}

export default Footer;