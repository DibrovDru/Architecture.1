import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AutorisationCard from "../../components/AutorisationCard";
import {CreationProjectInfo, AddingEmployeesToProject, CreationHierarchy} from "../../components/CreationProjectInfo";
import {ProjectCreateionStage} from "../../types";
import app_styles from "../../App.module.css";
import ImgCard from "../../components/ImgCard";
import MyHeader from "../../components/base/Header";
import Menu from "../../components/base/Menu";
import Tasks from "../../components/tasks/Tasks";
import main_page_styles from "../main_tasks_page/TasksPage.module.css";
import base_styles from "../../components/base/base.module.css";
import MyFooter from "../../components/base/Footer";
import main_pages_styles from "../main_tasks_page/TasksPage.module.css";
import Profile from "../../components/Profile";



function EmployeesPage() {
    return (
        <div>
            <MyHeader/>
            <Container>
                <Row>
                    <Col sm={2}>
                        <Menu/>
                    </Col>
                    <Col sm={7}>
                        <h3 className={`${main_pages_styles.title} ${app_styles.header_weight} ${app_styles.margin_top_from_header}`}>
                            Иерархия
                        </h3>
                        <CreationHierarchy/>
                    </Col>
                    <Col sm={3}>
                        <h3 className={`${main_pages_styles.title} ${app_styles.header_weight} ${app_styles.margin_top_from_header}`}>
                            Автор
                        </h3>
                        <Profile/>

                        <h3 className={`${main_pages_styles.title} ${app_styles.header_weight} ${app_styles.margin_top_from_header}`}>
                            Участники
                        </h3>
                        <Profile/>
                        <Profile/>
                        <Profile/>
                        <Button variant="primary" type="submit" className={`${app_styles.max_width} ${app_styles.main_color}`}>
                            Добавить
                        </Button>
                    </Col>
                </Row>
            </Container>
            <MyFooter/>
        </div>
    );
}

export default EmployeesPage;
