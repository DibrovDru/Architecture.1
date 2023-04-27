import React, {FC} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AutorisationCard from "../../components/AutorisationCard";
import {CreationProjectInfo, AddingEmployeesToProject, CreationHierarchy} from "../../components/CreationProjectInfo";
import {Project, ProjectCreateionStage} from "../../types";
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
import { Form } from 'react-bootstrap';
import {projects} from "../../state/state";


const InfoProjectCard: FC<Project>  = (project) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Наименование</Form.Label>
                <Form.Control
                    type="text"
                    value={project.name}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Описание</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={3}
                    type="text"
                    value={project.description}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Сохранить
            </Button>
        </Form>

    );
}


const InfoProjectPage = () => {
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
                            Проект
                        </h3>

                        <InfoProjectCard
                            id={projects[0].id}
                            name={projects[0].name}
                            description={projects[0].description}
                            creator={projects[0].creator}
                        />

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
                    </Col>
                </Row>
            </Container>
            <MyFooter/>
        </div>
    );
}

export default InfoProjectPage;
