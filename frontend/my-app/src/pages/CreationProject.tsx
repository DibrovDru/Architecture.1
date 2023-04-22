import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AutorisationCard from "../components/AutorisationCard";
import {CreationProjectInfo, AddingEmployeesToProject, CreationHierarchy} from "../components/CreationProjectInfo";
import {ProjectCreateionStage} from "../types";

function ImgCard() {
    return (
        <Card style={{width: '80%'}}>
            <Card.Img variant="top" src={require('../images/man.png')}/>
            <Card.Body>
                <Card.Text style={{textAlign: 'center'}}>
                    Система для управления вашими проектами онлайн
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function CreationProject() {
    let stage : ProjectCreateionStage = ProjectCreateionStage.adding_employees as ProjectCreateionStage;
    if (stage === ProjectCreateionStage.naming) {
        return (
            <Container>
                <Row style={{height: '100vh'}}>
                    <Col className="border" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#F2F4F6'
                    }}>
                        <CreationProjectInfo/>
                    </Col>
                    <Col className="border" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <ImgCard/>
                    </Col>
                </Row>
            </Container>
        );
    } else if (stage === ProjectCreateionStage.adding_employees) {
        return (
            <Container>
                <Row style={{height: '100vh'}}>
                    <Col className="border" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#F2F4F6'
                    }}>
                        <AddingEmployeesToProject />
                    </Col>
                    <Col className="border" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <ImgCard/>
                    </Col>
                </Row>
            </Container>
        );
    } else {  // stage == ProjectCreateionStage.creating_hierarchy
        return (
            <Container>
                <Row style={{height: '100vh'}}>
                    <Col className="border" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#F2F4F6'
                    }}>
                        <CreationHierarchy/>
                    </Col>
                    <Col className="border" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <ImgCard/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CreationProject;
