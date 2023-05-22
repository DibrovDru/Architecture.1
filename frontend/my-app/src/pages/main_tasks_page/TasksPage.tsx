import React, {useContext, useEffect, useState} from 'react';
import MyHeader from "../../components/base/Header";
import MyFooter from "../../components/base/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "../../components/base/Menu";
import Tasks from "../../components/tasks/Tasks";
import app_styles from '../../App.module.css';
import main_page_styles from './TasksPage.module.css';
import base_styles from '../../components/base/base.module.css';
import main_pages_styles from "./TasksPage.module.css";
import Profile from "../../components/Profile";
import {defaultTasks} from "../../store/ts_objects";
import {Context} from "../../index";
import {Project, Task} from "../../types";
import {useNavigate} from "react-router-dom";

function TasksPage() {
    const {storageCurrentState } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('Token')) {
            navigate("/login");
        }
    }, [])

    console.log(storageCurrentState.user.surname);

    return (
        <div>
            <MyHeader/>
            <Container>
                <Row>
                    <Col sm={2}>
                        <Menu/>
                    </Col>
                    <Col sm={8}>
                        <Tasks/>
                    </Col>
                    <Col sm={2}>
                        <h3 className={`${main_pages_styles.title} ${app_styles.header_weight} ${app_styles.margin_top_from_header}`}>
                            Автор
                        </h3>
                        <Profile
                            id={storageCurrentState.user.id}
                            name={storageCurrentState.user.name}
                            surname={storageCurrentState.user.surname}
                            login={storageCurrentState.user.login}
                        />
                    </Col>
                </Row>
            </Container>
            <MyFooter/>
        </div>
    );
}

export default TasksPage;
