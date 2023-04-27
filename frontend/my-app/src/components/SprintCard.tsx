import React, {FC, useState} from "react";
import Card from "react-bootstrap/Card";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import app_styles from '../App.module.css';
import tasks_styles from '../components/tasks/tasks.module.css';
import {Sprint} from "../types";
import sprints_page_styles from '../pages/main_sprints_page/SprintsPage.module.css';


export const SprintCard: FC<Sprint> = ({
                                       id,
                                       name,
                                       description,
                                       timestamp,
                                       is_actual,
                                       n_days
                                   }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card className={sprints_page_styles.sprint_card}>

            {/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
            <Modal show={show} onHide={handleClose} dialogClassName={tasks_styles.modal_task_window}>
                <Modal.Header closeButton>
                    <Modal.Title> {name} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className={`mb-3 ${app_styles.space_between}`} controlId="exampleForm.ControlInput1">
                            <Form.Label className={tasks_styles.name_field}>Название спринта</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                readOnly={true}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={`mb-3 ${app_styles.space_between}`} controlId="exampleForm.ControlInput1">
                            <Form.Label className={tasks_styles.name_field}>Количество дней</Form.Label>
                            <Form.Control
                                type="text"
                                value={n_days}
                                readOnly={true}
                                autoFocus
                            />
                        </Form.Group>


                        <Form.Group className={`mb-3 ${app_styles.space_between}`} controlId="exampleForm.ControlInput1">
                            <Form.Label className={tasks_styles.name_field}>Дата начала</Form.Label>
                            <Form.Control
                                type="text"
                                value={timestamp}
                                readOnly={true}
                                autoFocus
                            />
                        </Form.Group>


                        {/*//////////////////////////////////////////////////////////////////////////*/}

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Цель спринта</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                            />
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
            </Modal>
            {/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

            <Card.Body onClick={handleShow}>
                <Card.Title> {name} </Card.Title>
            </Card.Body>
        </Card>
    );
}

export default SprintCard;