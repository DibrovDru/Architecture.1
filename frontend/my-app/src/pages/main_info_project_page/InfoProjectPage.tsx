import React, {FC, useContext, useEffect, useState} from 'react';

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
import {useParams} from "react-router-dom";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ProjectsService from "../../logic/services/ProjectsService";
import Projects from "../../store/projects";


const InfoProjectCard: FC/*<Project>*/  = observer((/*project*/) => {
    const { storageCurrentState} = useContext(Context);

    const [name, setName] = useState<string>(storageCurrentState.currentProject.name);
    const [description, setDescription] = useState<string>(storageCurrentState.currentProject.description);

    useEffect(() => {
        setName(storageCurrentState.currentProject.name);
        setDescription(storageCurrentState.currentProject.description);
    }, [storageCurrentState.currentProject.name, storageCurrentState.currentProject.description]);

    const saveChanges = () => {
        ProjectsService.pushProject(String(storageCurrentState.currentProject.id),
                                    name,
                                    description);
        storageCurrentState.setCurrentProject(ProjectsService.fetchProject(String(storageCurrentState.currentProject.id)));
    }

    console.log('lol', name, description);
    console.log('bruh', storageCurrentState.currentProject.name, storageCurrentState.currentProject.description);

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Наименование</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Описание</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={3}
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </Form.Group>

            <Button variant="primary"
                    // type="submit"
                    onClick={saveChanges}
            >
                Сохранить
            </Button>
        </Form>

    );
});

const InfoProjectPage = () => {
    const { project_id } = useParams<{ project_id: string }>();

    const { storageCurrentState, storageProjects} = useContext(Context);

    // const [currentProject, setCurrentProject] = useState<Project>({} as Project);

    useEffect(() => {
        storageProjects.setProjects(ProjectsService.fetchProjects());
        storageCurrentState.setCurrentProject(ProjectsService.fetchProject(project_id));

        // setCurrentProject(storageCurrentState.currentProject);
        console.log('name = ', storageCurrentState.currentProject.name);
    }, []);


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
                            // id={storageCurrentState.currentProject.id}
                            // name={storageCurrentState.currentProject.name}
                            // description={storageCurrentState.currentProject.description}
                            // creator={storageCurrentState.currentProject.creator}
                        />

                    </Col>
                    <Col sm={3}>
                        <h3 className={`${main_pages_styles.title} ${app_styles.header_weight} ${app_styles.margin_top_from_header}`}>
                            Автор
                        </h3>
                        <Profile
                            id={storageCurrentState.user.id}
                            name={storageCurrentState.user.name}
                            surname={storageCurrentState.user.surname}
                            login={storageCurrentState.user.login}
                        />

                        <h3 className={`${main_pages_styles.title} ${app_styles.header_weight} ${app_styles.margin_top_from_header}`}>
                            Участники
                        </h3>
                        <Profile
                            id={storageCurrentState.user.id}
                            name={storageCurrentState.user.name}
                            surname={storageCurrentState.user.surname}
                            login={storageCurrentState.user.login}
                        />
                        <Profile
                            id={storageCurrentState.user.id}
                            name={storageCurrentState.user.name}
                            surname={storageCurrentState.user.surname}
                            login={storageCurrentState.user.login}
                        />
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

export default InfoProjectPage;
