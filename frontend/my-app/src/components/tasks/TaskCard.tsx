import React, {FC, useState} from "react";
import {Task} from "../../types";
import Card from "react-bootstrap/Card";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import app_styles from '../../App.module.css';
import tasks_styles from './tasks.module.css';

export const TaskCard: FC<Task> = ({
                                       id,
                                       name,
                                       description,
                                       type,
                                       creator,
                                       executor
                                   }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card style={{marginTop: '10px', height: '200px', overflow: 'hidden'}}>

{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
            <Modal show={show} onHide={handleClose} dialogClassName={tasks_styles.modal_task_window}>
                <Modal.Header closeButton>
                    <Modal.Title> {name} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className={`mb-3 ${app_styles.space_between}`} controlId="exampleForm.ControlInput1">
                            <Form.Label>Проект</Form.Label>
                            <Form.Control
                                // type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
                {/*<style>{tasks_styles.modal_task_window}</style>*/}
            </Modal>
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

            <Card.Body onClick={handleShow}>
                <Card.Title> {name} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">executor: {executor.login} </Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}