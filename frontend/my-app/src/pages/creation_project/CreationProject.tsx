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
import Form from "react-bootstrap/Form";
import creation_project_styles from "./CreationProject.module.css";
import CloseButton from "react-bootstrap/CloseButton";
import ContainerDeta from "../../components/ContainerDeta";



function CreationProject() {
    let stage : ProjectCreateionStage = ProjectCreateionStage.creating_hierarchy as ProjectCreateionStage;
    if (stage === ProjectCreateionStage.naming) {
        return (
            <Container>
                <Row className={app_styles.height_full_screen}>
                    <Col className={`${app_styles.to_center} ${app_styles.grey}`}>

                        <ContainerDeta style_card={`${creation_project_styles.width_card_creation_project} ${app_styles.grey}`}
                                       img_path={require('../../images/deta.png')}
                                       img_style={app_styles.deta}
                                       name={'Создание проекта'}
                                       next_button={'Далее'}
                                       prev_button={'Назад'}
                        >
                            <CreationProjectInfo/>
                        </ContainerDeta>

                    </Col>
                    <Col className={app_styles.to_center}>
                        <ImgCard/>
                    </Col>
                </Row>
            </Container>
        );
    } else if (stage === ProjectCreateionStage.adding_employees) {
        return (
            <Container>
                <Row className={app_styles.height_full_screen}>
                    <Col className={`${app_styles.to_center} ${app_styles.grey}`}>

                        <ContainerDeta style_card={`${creation_project_styles.width_card_creation_project} ${app_styles.grey}`}
                                       img_path={require('../../images/deta.png')}
                                       img_style={app_styles.deta}
                                       name={'Добавить участников'}
                                       next_button={'Далее'}
                                       prev_button={'Назад'}
                        >
                            <AddingEmployeesToProject />
                        </ContainerDeta>

                    </Col>
                    <Col className={app_styles.to_center}>
                        <ImgCard/>
                    </Col>
                </Row>
            </Container>
        );
    } else {  // stage == ProjectCreateionStage.creating_hierarchy
        return (
            <Container>
                <Row className={app_styles.height_full_screen}>
                    <Col className={`${app_styles.to_center} ${app_styles.grey}`}>

                        <ContainerDeta style_card={`${creation_project_styles.width_card_creation_project} ${app_styles.grey}`}
                                       img_path={require('../../images/deta.png')}
                                       img_style={app_styles.deta}
                                       name={'Создание иерархии'}
                                       next_button={'Готово'}
                                       prev_button={'Назад'}
                        >
                            <CreationHierarchy/>
                        </ContainerDeta>

                    </Col>
                    <Col className={app_styles.to_center}>
                        <ImgCard/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CreationProject;
