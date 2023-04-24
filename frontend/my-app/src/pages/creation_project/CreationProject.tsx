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



function CreationProject() {
    let stage : ProjectCreateionStage = ProjectCreateionStage.creating_hierarchy as ProjectCreateionStage;
    if (stage === ProjectCreateionStage.naming) {
        return (
            <Container>
                <Row className={app_styles.height_full_screen}>
                    <Col className={`${app_styles.to_center} ${app_styles.grey}`}>
                        <CreationProjectInfo/>
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
                        <AddingEmployeesToProject />
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
                        <CreationHierarchy/>
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
