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
import CloseButton from 'react-bootstrap/CloseButton';
import creation_project_styles from '../pages/creation_project/CreationProject.module.css';
import app_styles from '../App.module.css';
import app from "../App";

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
        <Card className={`${creation_project_styles.width_card_creation_project} ${app_styles.grey}`}>
            <Card.Img variant="top" src={require('../images/deta.png')} className={app_styles.deta}/>
            <Card.Body>
                <Card.Title className={app_styles.to_center}>Создание проекта</Card.Title>
            </Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Имя проекта</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div className={app_styles.space_between}>
                        <Form.Label>Количество дней с спринте</Form.Label>
                        <Hint/>
                    </div>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                        <option value="3">6</option>
                        <option value="3">7</option>
                        <option value="3">8</option>
                        <option value="3">9</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Описание проекта</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" className={`${app_styles.max_width} ${app_styles.main_color}`}>
                    Готово
                </Button>
            </Form>
            <Card.Body>
                <Card.Link href="#" className={app_styles.to_center}>Назад</Card.Link>
            </Card.Body>
        </Card>
    );
}

export function AddingEmployeesToProject() {
    return (
        <Card className={`${creation_project_styles.width_card_creation_project} ${app_styles.grey}`}>
            <Card.Img variant="top" src={require('../images/deta.png')} className={app_styles.deta}/>
            <Card.Body>
                <Card.Title className={app_styles.to_center}>Создание проекта</Card.Title>
            </Card.Body>
            <div className={`overflow-scroll ${creation_project_styles.window_scroll}`}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Добавить участников</Form.Label>
                        <div className={`${app_styles.space_between} ${creation_project_styles.margin_small}`}>
                            <Form.Control type="email" placeholder="borovets" />
                            <CloseButton className={app_styles.margin_auto} />
                        </div>
                        <div className={`${app_styles.space_between} ${creation_project_styles.margin_small}`}>
                            <Form.Control type="email" placeholder="dibrov" />
                            <CloseButton className={app_styles.margin_auto} />
                        </div>
                        <div className={`${app_styles.space_between} ${creation_project_styles.margin_small}`}>
                            <Form.Control type="email" placeholder="borovets" />
                            <CloseButton className={app_styles.margin_auto} />
                        </div>
                        <div className={`${app_styles.space_between} ${creation_project_styles.margin_small}`}>
                            <Form.Control type="email" placeholder="borovets" />
                            <CloseButton className={app_styles.margin_auto} />
                        </div>
                        <div className={`${app_styles.space_between} ${creation_project_styles.margin_small}`}>
                            <Form.Control type="email" placeholder="borovets" />
                            <CloseButton className={app_styles.margin_auto} />
                        </div>
                        <div className={`${app_styles.space_between} ${creation_project_styles.margin_small}`}>
                            <Form.Control type="email" placeholder="borovets" />
                            <CloseButton className={app_styles.margin_auto} />
                        </div>
                        <div className={`${app_styles.space_between} ${creation_project_styles.margin_small}`}>
                            <Form.Control type="email" placeholder="borovets" />
                            <CloseButton className={app_styles.margin_auto} />
                        </div>
                        <div className={`${app_styles.space_between} ${creation_project_styles.margin_small}`}>
                            <Form.Control type="email" placeholder="borovets" />
                            <CloseButton className={app_styles.margin_auto} />
                        </div>
                        <div className={`${app_styles.space_between} ${creation_project_styles.margin_small}`}>
                            <Form.Control type="email" placeholder="borovets" />
                            <CloseButton className={app_styles.margin_auto} />
                        </div>
                        <div className={`${app_styles.space_between} ${creation_project_styles.margin_small}`}>
                            <Form.Control type="email" placeholder="borovets" />
                            <CloseButton className={app_styles.margin_auto} />
                        </div>
                        <div className={`${app_styles.space_between} ${creation_project_styles.margin_small}`}>
                            <Form.Control type="email" placeholder="borovets" />
                            <CloseButton className={app_styles.margin_auto} />
                        </div>
                    </Form.Group>
                </Form>
            </div>

            <Button variant="primary" type="submit" className={`${app_styles.max_width} ${app_styles.main_color}`}>
                +
            </Button>

            <div style={{height: '100px'}}/>

            <Button variant="primary" type="submit" className={`${app_styles.max_width} ${app_styles.main_color}`}>
                Готово
            </Button>
            <Card.Body>
                <Card.Link href="#" className={app_styles.to_center}>Назад</Card.Link>
            </Card.Body>
        </Card>
    );
}

function AddingRelations() {
    return (
        <div className={`${app_styles.space_between} ${creation_project_styles.margin_big}`}>
            <Form.Group className={`mb-3 ${app_styles.half_width}`} controlId="formBasicEmail">
                <Form.Label>Руководитель</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <div className={app_styles.half_width}>
                <div className={app_styles.space_between}>
                <text>
                    Подчиненные
                </text>
                    <CloseButton />
                </div>
            <Dropdown className={creation_project_styles.relation_margin}>
                <div className={app_styles.space_between}>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="info" className={creation_project_styles.employee_in_relation}>
                    <text style={{backgroundColor: '#5222D0', color: 'white'}}>
                    borovets
                    </text>
                </Dropdown.Toggle>
                <CloseButton style={{margin: 'auto'}}/>
                </div>

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
            <Dropdown className={creation_project_styles.relation_margin}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="info" className={creation_project_styles.employee_in_relation}>
                        <text style={{backgroundColor: '#5222D0', color: 'white'}}>
                            dibrov
                        </text>
                    </Dropdown.Toggle>
                    <CloseButton style={{margin: 'auto'}}/>
                </div>

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
            <Button variant="primary" type="submit" className={`${app_styles.max_width} ${app_styles.main_color}`}>
                Подчиненный +
            </Button>
            </div>
        </div>
    );
}


function CreatingRelations() {
    return (
        <div className={`overflow-scroll ${creation_project_styles.window_scroll}`}>
            <AddingRelations/>

            <AddingRelations/>

            <AddingRelations/>

            <AddingRelations/>
        </div>
    );
}

export function CreationHierarchy() {
    return (
        <Card className={`${creation_project_styles.width_card_creation_project} ${app_styles.grey}`}>
            <Card.Img variant="top" src={require('../images/deta.png')} className={app_styles.deta}/>
            <Card.Body>
                <Card.Title className={app_styles.to_center}>Создание проекта</Card.Title>
            </Card.Body>
            <Form>

                <CreatingRelations/>

                <Button variant="primary" type="submit" className={`${app_styles.max_width} ${app_styles.main_color}`}>
                    Новая связь
                </Button>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Комментарий (необязательно)</Form.Label>
                    <textarea className="form-control" placeholder="" />
                </Form.Group>
                <Button variant="primary" type="submit" className={`${app_styles.max_width} ${app_styles.main_color}`}>
                    Готово
                </Button>
            </Form>
            <Card.Body>
                <Card.Link href="#" className={app_styles.to_center}>Назад</Card.Link>
            </Card.Body>
        </Card>
    );
}