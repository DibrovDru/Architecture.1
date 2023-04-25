import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import app_styles from '../../App.module.css';
import base_styles from './base.module.css';
import Profile from "../Profile";

function Header() {
    return (
        <Navbar expand="lg" className={`${app_styles.white} ${base_styles.myheader}`}>
            <Container fluid>
                <Button className={`${app_styles.white} ${base_styles.button}`}>
                    <img src={require('../../images/burger.png')}/>
                </Button>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <img className={`${app_styles.logo} ${base_styles.header_logo_margin}`} src={require('../../images/logo.png')} />
                        <NavDropdown title={<span className={`${app_styles.white} ${app_styles.header_weight}`}>Проекты</span>} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span className={`${app_styles.text_white} ${app_styles.header_weight}`}>Создать</span>} id="navbarScrollingDropdown" className={`${app_styles.main_color} ${app_styles.border_radius}`}>
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        {/*<img src={require('../../images/profile.png')} className={base_styles.profile}/>*/}
                        <Profile/>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;