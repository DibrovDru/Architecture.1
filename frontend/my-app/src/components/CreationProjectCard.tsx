import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function Hint() {
    return (
        <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
        >
            {({ ref, ...triggerHandler }) => (
                <Button
                    variant="light"
                    {...triggerHandler}
                    className="d-inline-flex align-items-center"
                >
                    <Image
                        ref={ref}
                        roundedCircle
                        src={require('../images/hint.png')}
                        width='10px'
                    />
                    <span className="ms-1"></span>
                </Button>
            )}
        </OverlayTrigger>
    );
}

function CreationProjectCard() {
    return (
        <Card style={{ width: '18rem', backgroundColor: '#F2F4F6'}}>
            <Card.Img variant="top" src={require('../images/deta.png')} style={{height: '50px', width: 'auto', objectFit: 'scale-down'}}/>
            <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Создание проекта</Card.Title>
            </Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Имя проекта</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Form.Label>Количество дней с спринте</Form.Label>
                    <Hint/>
                    </div>
                    <Form.Control type="n_days_sprint" placeholder="7 дней" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Описание проекта</Form.Label>
                    <textarea className="form-control" placeholder="" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{width: '100%', backgroundColor: '#5222D0'}}>
                    Готово
                </Button>
            </Form>
            <Card.Body>
                <Card.Link href="#" style={{display: 'flex', justifyContent: 'center'}}>Назад</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CreationProjectCard;
