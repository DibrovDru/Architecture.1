import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


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
        >
            <Nav.Item>
                <div style={{margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <img src={require('../images/logo.png')} style={{height: '30px', objectFit: 'scale-down'}}/>
                <text>
                    © 2023 AO “Deta”
                </text>
                </div>
            </Nav.Item>
            <Nav.Item style={{display: 'flex', margin: 'auto'}}>
                <Nav.Link eventKey="link-1" style={{color: 'black'}}>FAQ</Nav.Link>
                <Nav.Link eventKey="link-2" style={{color: 'black'}}>Связаться</Nav.Link>
                <Nav.Link eventKey="link-3" style={{color: 'black'}}>Покупка</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{display: 'flex', margin: 'auto 30px'}}>
                <img src={require('../images/youtube.png')} style={{height: '30px', margin: '10px'}}/>
                <img src={require('../images/vk.png')} style={{height: '30px', margin: '10px'}}/>
            </Nav.Item>
        </Nav>
    );
}

export default Footer;