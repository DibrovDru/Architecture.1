import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegistrationCard() {
    return (
        <Card style={{ width: '18rem', backgroundColor: '#F2F4F6'}}>
            <Card.Img variant="top" src={require('../images/deta.png')} style={{height: '50px', width: 'auto', objectFit: 'scale-down'}}/>
            <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Регистрация в системе</Card.Title>
            </Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Как вас зовут?</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Повторите пароль</Form.Label>
                    <Form.Control type="check_password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{width: '100%', backgroundColor: '#5222D0'}}>
                    Готово
                </Button>
            </Form>
            <Card.Body>
                <Card.Link href="#" style={{display: 'flex', justifyContent: 'center'}}>Ругистрация</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default RegistrationCard;
