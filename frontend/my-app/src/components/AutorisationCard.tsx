import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import reg_auth_styles from '../pages/reg_auth_page/RegAuth.module.css';
import app_styles from '../App.module.css';

function AutorisationCard() {
    return (
        <Card className={`${reg_auth_styles.card_width} ${app_styles.grey}`}>
            <Card.Img variant="top" src={require('../images/deta.png')} className={app_styles.deta}/>
            <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Вход в систему</Card.Title>
            </Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className={`${app_styles.main_color} ${app_styles.max_width}`}>
                    Готово
                </Button>
            </Form>
            <Card.Body>
                <Card.Link href="#" className={app_styles.to_center}>Ругистрация</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default AutorisationCard;
