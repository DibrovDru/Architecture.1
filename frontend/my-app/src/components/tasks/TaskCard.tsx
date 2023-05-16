import React, {FC, useContext, useEffect, useState} from "react";
import {Task} from "../../types";
import Card from "react-bootstrap/Card";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import app_styles from '../../App.module.css';
import tasks_styles from './tasks.module.css';
import Comments from "../comments/Comments";
import {Context} from "../../index";



export const TaskCard: FC<Task> = ({
                                       id,
                                       name,
                                       description,
                                       type,
                                       creator,
                                       executor,
                                       sprint
                                   }) => {

    const {storageTasks, storageCurrentState} = useContext(Context);

    const [show, setShow] = useState(false);

    const [currentTask, setCurrentTask] = useState<Task>(/*storageCurrentState.currentTask*/{id, name, description, type, creator, executor, sprint});

    useEffect(() => {
        setCurrentTask(/*storageCurrentState.currentTask*/{id, name, description, type, creator, executor, sprint});
        console.log('QWERTY:');
        console.log(storageCurrentState.currentTask.name);
    }, [storageCurrentState.currentTask])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const saveChanges = () => {
        for (var i = 0; i < storageTasks.getTasks.length; i++) {
            if (storageTasks.getTasks[i].id == storageCurrentState.currentTask.id) {
                storageTasks.getTasks[i].type = currentTask.type;
                storageTasks.getTasks[i].name = currentTask.name;
                storageTasks.getTasks[i].sprint = currentTask.sprint;
                storageTasks.getTasks[i].creator = currentTask.creator;
                storageTasks.getTasks[i].executor = currentTask.executor;
                storageTasks.getTasks[i].description = currentTask.description;
                break;
            }
        }
        handleClose();
    }

    return (
        <Card style={{marginTop: '10px', height: '200px', overflow: 'hidden'}}>

{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
            <Modal show={show} onHide={handleClose} dialogClassName={tasks_styles.modal_task_window}>
                <Modal.Header closeButton>
                    <Modal.Title> {currentTask.name} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className={`mb-3 ${app_styles.space_between}`} controlId="exampleForm.ControlInput1">
                            <Form.Label className={tasks_styles.name_field}>Проект</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentTask.name}
                                onChange={(event) => setCurrentTask({...currentTask, name: event.target.value})}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={`mb-3 ${app_styles.space_between}`} controlId="exampleForm.ControlInput1">
                            <Form.Label className={tasks_styles.name_field}>Автор</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentTask.creator.name + ' ' + currentTask.creator.surname}
                                readOnly={true}
                                autoFocus
                            />
                        </Form.Group>


                        <Form.Group className={`mb-3 ${app_styles.space_between}`} controlId="exampleForm.ControlInput1">
                            <Form.Label className={tasks_styles.name_field}>Исполнитель</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentTask.executor.name + ' ' + currentTask.executor.surname}
                                readOnly={true}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={`mb-3 ${app_styles.space_between}`} controlId="exampleForm.ControlInput1">
                            <Form.Label className={tasks_styles.name_field}>Спринт</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentTask.sprint.name}
                                readOnly={true}
                                autoFocus
                            />
                        </Form.Group>


                        <Form.Group className={`mb-3 ${app_styles.space_between}`} controlId="exampleForm.ControlInput1">
                            <Form.Label className={tasks_styles.name_field}>Статус</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentTask.type}
                                readOnly={true}
                                autoFocus
                            />
                        </Form.Group>


                        {/*//////////////////////////////////////////////////////////////////////////*/}

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Описание</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={currentTask.description}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Comments/>

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
                <Card.Title> {currentTask.name} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">executor: {currentTask.executor.login} </Card.Subtitle>
                <Card.Text>
                    {currentTask.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}