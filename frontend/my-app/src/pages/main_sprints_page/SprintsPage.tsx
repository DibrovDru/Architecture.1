import React, {useContext, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AutorisationCard from "../../components/AutorisationCard";
import {CreationProjectInfo, AddingEmployeesToProject, CreationHierarchy} from "../../components/CreationProjectInfo";
import {ProjectCreateionStage, TaskType} from "../../types";
import app_styles from "../../App.module.css";
import MyHeader from "../../components/base/Header";
import Menu from "../../components/base/Menu";
import base_styles from "../../components/base/base.module.css";
import MyFooter from "../../components/base/Footer";
import task_pages_styles from "../main_tasks_page/TasksPage.module.css";
import {defaultSprints} from "../../store/state";
import sprints_page_styles from './SprintsPage.module.css';
import SprintCard from "../../components/SprintCard";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import TasksService from "../../logic/services/TasksService";
import SprintsService from "../../logic/services/SprintsService";


function SprintsPage() {

    const {storageSprints, storageCurrentState} = useContext(Context);

    useEffect(() => {
        storageSprints.setSprints(SprintsService.fetchSprints());
        console.log(storageSprints.getSprints.length)
    }, [])


    return (
        <div>
            <MyHeader/>
            <Container>
                <Row>
                    <Col sm={2}>
                        <Menu/>
                    </Col>
                    <Col sm={10}>
                        <>
                            <h3 className={`${task_pages_styles.title} ${app_styles.header_weight} ${app_styles.margin_top_from_header}`}>
                                Спринты
                            </h3>

                            <div className={app_styles.space_around}>
                                <div className={`${task_pages_styles.task_type} ${sprints_page_styles.sprint_column_width}`}>
                                    <h5>
                                        Активные
                                    </h5>
                                    <div>
                                        +
                                    </div>
                                </div>
                                <div className={`${task_pages_styles.task_type} ${sprints_page_styles.sprint_column_width}`}>
                                    <h5>
                                        Завершенные
                                    </h5>
                                    <div>
                                        +
                                    </div>
                                </div>
                            </div>




                            <div className={app_styles.space_around}>
                                <div className={sprints_page_styles.sprint_column_width}>
                                    {storageSprints.getSprints.filter(sprint => sprint.is_actual)
                                        .map(sprint =>
                                            <div onClick={() => {storageCurrentState.setCurrentSprint(sprint)}}>
                                            <SprintCard id={sprint.id}
                                                        name={sprint.name}
                                                        description={sprint.description}
                                                        date_start={sprint.date_start}
                                                        date_end={sprint.date_end}
                                                        is_actual={sprint.is_actual}
                                            />
                                            </div>)
                                    }
                                </div>
                                <div className={sprints_page_styles.sprint_column_width}>
                                    {storageSprints.getSprints.filter(sprint => !sprint.is_actual)
                                        .map(sprint =>
                                            <SprintCard id={sprint.id}
                                                        name={sprint.name}
                                                        description={sprint.description}
                                                        date_start={sprint.date_start}
                                                        date_end={sprint.date_end}
                                                        is_actual={sprint.is_actual}
                                            />)
                                    }
                                </div>

                            </div>

                            <div className={base_styles.myfooter} />
                        </>
                    </Col>
                </Row>
            </Container>
            <MyFooter/>
        </div>
    );
}

export default observer(SprintsPage);
