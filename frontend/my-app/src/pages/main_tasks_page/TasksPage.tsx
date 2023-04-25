import React, { useState } from 'react';
import MyHeader from "../../components/base/Header";
import MyFooter from "../../components/base/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "../../components/base/Menu";
import Tasks from "../../components/Tasks";
import app_styles from '../../App.module.css';
import main_page_styles from './TasksPage.module.css';
import base_styles from '../../components/base/base.module.css';
import main_pages_styles from "./TasksPage.module.css";
import Profile from "../../components/Profile";
import {tasks} from "../../state/state";

function TasksPage() {



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
                        <h3 className={`${main_pages_styles.title} ${app_styles.header_weight} ${app_styles.margin_top_from_header}`}>
                            Автор
                        </h3>
                        <Profile/>
                    </Col>
                </Row>
            </Container>
            <MyFooter/>
        </div>
    );
}

export default TasksPage;
