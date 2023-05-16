import React, {FC, useContext, useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import app_styles from '../App.module.css';
import tasks_styles from '../components/tasks/tasks.module.css';
import {Sprint} from "../types";
import sprints_page_styles from '../pages/main_sprints_page/SprintsPage.module.css';
import {Context} from "../index";


export const SprintCard: FC<Sprint> = ({
                                       id,
                                       name,
                                       description,
                                       date_start,
                                       date_end,
                                       is_actual
                                   }) => {

    const {storageCurrentState, storageSprints} = useContext(Context);

    const [show, setShow] = useState(false);

    const [currentName, setCurrentName] = useState<string>(storageCurrentState.currentSprint.name);
    const [currentDescription, setCurrentDescription] = useState<string>(storageCurrentState.currentSprint.description);
    const [currentDate_start, setCurrentDate_start] = useState<string>(storageCurrentState.currentSprint.date_start);
    const [currentDate_end, setCurrentDate_end] = useState<string>(storageCurrentState.currentSprint.date_end);
    const [currentIs_actual, setIs_actual] = useState<boolean>(storageCurrentState.currentSprint.is_actual);

    useEffect(() => {
        setCurrentName(storageCurrentState.currentSprint.name);
        setCurrentDescription(storageCurrentState.currentSprint.description);
        setCurrentDate_start(storageCurrentState.currentSprint.date_start);
        setCurrentDate_end(storageCurrentState.currentSprint.date_end);
        setIs_actual(storageCurrentState.currentSprint.is_actual);
    }, [storageCurrentState.currentSprint]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const saveChanges = () => {
        for (var i = 0; i < storageSprints.getSprints.length; i++) {
            if (storageSprints.getSprints[i].id == storageCurrentState.currentSprint.id) {
                storageSprints.getSprints[i].name = currentName;
                storageSprints.getSprints[i].date_start = currentDate_start;
                storageSprints.getSprints[i].date_end = currentDate_end;
                storageSprints.getSprints[i].description = currentDescription;
                break;
            }
        }
        handleClose();
    }

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
                                value={currentName}
                                onChange={(event) => setCurrentName(event.target.value)}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={`mb-3 ${app_styles.space_between}`} controlId="exampleForm.ControlInput1">
                            <Form.Label className={tasks_styles.name_field}>Дата начала спринта</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentDate_start}
                                onChange={(event) => setCurrentDate_start(event.target.value)}
                                autoFocus
                            />
                        </Form.Group>


                        <Form.Group className={`mb-3 ${app_styles.space_between}`} controlId="exampleForm.ControlInput1">
                            <Form.Label className={tasks_styles.name_field}>Дата завершения спринта</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentDate_end}
                                onChange={(event) => setCurrentDate_end(event.target.value)}
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
                                value={currentDescription}
                                onChange={(event) => setCurrentDescription(event.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
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