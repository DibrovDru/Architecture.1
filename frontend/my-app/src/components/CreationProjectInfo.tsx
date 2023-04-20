import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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

export function CreationProjectInfo() {
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

export function AddingEmployeesToProject() {
    return (
        <Card style={{ width: '18rem', backgroundColor: '#F2F4F6'}}>
            <Card.Img variant="top" src={require('../images/deta.png')} style={{height: '50px', width: 'auto', objectFit: 'scale-down'}}/>
            <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Создание проекта</Card.Title>
            </Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Добавить участников</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{width: '100%', backgroundColor: '#5222D0'}}>
                    +
                </Button>

                <div style={{height: '200px'}}></div>

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

function AddingRelations() {
    return (
        <div style={{display:"flex", justifyContent: 'space-between', marginBottom: '2rem'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'50%'}}>
            <Form.Label>Руководитель</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <div style={{width:'50%'}}>
            <text >
                Подчиненные
            </text>
        <Dropdown  style={{ marginTop: '0.5rem'}}>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="info" style={{width: "100%", height: '37px', display: 'flex', justifyContent: 'right', backgroundColor: 'white'}}>
                <text style={{backgroundColor: '#5222D0', color: 'white'}}>
                borovets
                </text>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>
                    Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown  style={{ marginTop: '0.5rem'}}>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="info" style={{width: "100%", height: '37px', display: 'flex', justifyContent: 'right', backgroundColor: 'white'}}>
                <text style={{backgroundColor: '#5222D0', color: 'white'}}>
                    dibrov
                </text>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>
                    Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Button variant="primary" type="submit" style={{width: '100%', backgroundColor: '#565656', marginTop: '0.5rem'}}>
            Подчиненный +
        </Button>
        </div>
        </div>
    );
}


function CreatingRelations() {
    return (
        <div className="overflow-scroll" style={{height: '250px'}}>
            <AddingRelations/>

            <AddingRelations/>
        </div>
    );
}

export function CreationHierarchy() {
    return (
        <Card style={{ width: '25rem', backgroundColor: '#F2F4F6'}}>
            <Card.Img variant="top" src={require('../images/deta.png')} style={{height: '50px', width: 'auto', objectFit: 'scale-down'}}/>
            <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Создание проекта</Card.Title>
            </Card.Body>
            <Form>
                <CreatingRelations/>

                <Button variant="primary" type="submit" style={{width: '100%', backgroundColor: '#5222D0', marginTop: '0.5rem'}}>
                    Новая связь
                </Button>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Комментарий (необязательно)</Form.Label>
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