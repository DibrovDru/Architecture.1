import React, { useState } from 'react';
import MyHeader from "../../components/base/Header";
import MyFooter from "../../components/base/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "../../components/base/Menu";
import Tasks from "../../components/Tasks";
import app_styles from '../../App.module.css';
import main_page_styles from './MainPage.module.css';

function MainPage() {

    return (
        <div>
            <MyHeader/>
            <Container>
                <Row>
                    <Col sm={2}>
                        <Menu/>
                    </Col>
                        <Tasks/>
                    <Col sm={1}>
                        <h3 className={`${app_styles.header_weight} ${main_page_styles.title}`}>
                            Автор
                        </h3>
                    </Col>
                </Row>
            </Container>
            <MyFooter/>
        </div>
    );
}

export default MainPage;
