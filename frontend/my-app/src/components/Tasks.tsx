import React, {FC} from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import app_styles from '../App.module.css';
import main_pages_styles from '../pages/main_tasks_page/TasksPage.module.css';
import {Task, TaskType} from "../types";
import {tasks} from "../state/state";

const TaskCard: FC<Task> = ({
                                id,
                                name,
                                description,
                                type,
                                creator,
                                executor
                            }) => {
    return (
        <Card style={{marginTop: '10px', height: '200px', overflow: 'hidden' }}>
            <Card.Body>
                <Card.Title> {name} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">executor: {executor.login} </Card.Subtitle>
                <Card.Text>
                    { description }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}



function Tasks() {

    return (
        <>
        <Col sm={3}>
            <h3 className={`${main_pages_styles.title} ${app_styles.header_weight} ${app_styles.margin_top_from_header}`}>
                Все задачи
            </h3>

{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
            <div className={main_pages_styles.task_type}>
                <h5>
                    Открытые
                </h5>
                <div>
                    +
                </div>
            </div>


            <div className={main_pages_styles.sprint}>
                <img src={require('../images/opened_bracket.png')} />
                <p>
                    1 спринт (24.03.2023 - 31.03.2023)
                </p>
            </div>

            {tasks.filter(task => task.type === TaskType.ToDo)
                .map(task =>
                    <TaskCard id={task.id}
                              name={task.name}
                              description={task.description}
                              executor={task.executor}
                              creator={task.creator}
                              type={task.type}
                    />)
            }

            <div className={main_pages_styles.sprint}>
                <img src={require('../images/opened_bracket.png')} />
                <p>
                    2 спринт (24.03.2023 - 31.03.2023)
                </p>
            </div>
        </Col>

{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
        <Col sm={3}>
            <div className={`${main_pages_styles.title} ${app_styles.margin_top_from_header}`} />
            <div className={main_pages_styles.task_type}>
                <h5>
                    Активные
                </h5>
                <div>
                    +
                </div>
            </div>

            <div className={main_pages_styles.sprint} />

            {tasks.filter(task => task.type === TaskType.InProgress)
                .map(task =>
                    <TaskCard id={task.id}
                              name={task.name}
                              description={task.description}
                              executor={task.executor}
                              creator={task.creator}
                              type={task.type}
                    />)
            }

            <div className={main_pages_styles.sprint} />
        </Col>
        <Col>

{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
            <div className={`${main_pages_styles.title} ${app_styles.margin_top_from_header}`} />
            <div className={main_pages_styles.task_type}>
                <h5>
                    Решенные
                </h5>
                <div>
                    +
                </div>
            </div>

            <div className={main_pages_styles.sprint} />

            {tasks.filter(task => task.type === TaskType.Done)
                .map(task =>
                    <TaskCard id={task.id}
                              name={task.name}
                              description={task.description}
                              executor={task.executor}
                              creator={task.creator}
                              type={task.type}
                    />)
            }

            <div className={main_pages_styles.sprint} />
        </Col>
        </>
    );
}
export default Tasks;