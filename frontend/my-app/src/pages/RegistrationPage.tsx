import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RegistrationCard from "../components/RegistrationCard";

function RegistrationPage() {
    return (
        <Container>
            <Row style={{height: '100vh'}}>
                <Col className="border" style={{display:'flex', justifyContent:'center',alignItems:'center', backgroundColor: '#F2F4F6'}}>
                    <RegistrationCard />
                </Col>
                <Col className="border" style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                    <Card style={{ width: '80%' }}>
                        <Card.Img variant="top" src={require('../images/man.png')}/>
                        <Card.Body>
                            <Card.Text style={{textAlign: 'center'}}>
                                Система для управления вашими проектами онлайн
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default RegistrationPage;
