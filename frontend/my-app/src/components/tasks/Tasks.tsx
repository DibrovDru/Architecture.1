import React, {useContext, useEffect, useState} from "react";
import app_styles from '../../App.module.css';
import task_pages_styles from '../../pages/main_tasks_page/TasksPage.module.css';
import base_styles from '../base/base.module.css';
import {Sprint, TaskType} from "../../types";
import {sprints, tasks} from "../../store/state";
import {TaskCard} from "./TaskCard";
import {Context} from "../../index";
import {Task} from "../../types";


function Tasks() {

    const { storageCurrentState, storageTasks, storageSprints } = useContext(Context);


    const [currentTasks, setCurrentTasks] = useState<Task[]>([]);

    const [currentSprints, setCurrentSprints] = useState<Sprint[]>([]);


    useEffect(() => {
        console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ = ');
        console.log(tasks);
        storageTasks.setTasks(tasks);
        storageSprints.setSprints(sprints);

        setCurrentTasks(storageTasks.tasks);
        setCurrentSprints(storageSprints.sprints);

        console.log('tasks = ');
        console.log(currentTasks.length);
        console.log(storageTasks.tasks.length)
        console.log(storageSprints.sprints.length)
    }, []);
    // console.log('=========================================================================================');
    // console.log(storageTasks.tasks)


    const [dragging, setDragging] = useState(false);
    const [currentCard, setCurrentCard] = useState<Task>({} as Task);

    const handleDragStart = (event: any, card: Task) => {
        setDragging(true);
        setCurrentCard(card);
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    const handleDragOver = (event: any) => {
        event.preventDefault();
    };

    const handleDrop = (event: any, taskType: TaskType) => {
        event.preventDefault();
        console.log('dropped', taskType)
        for (let i = 0; i < storageTasks.tasks.length; ++i) {
            if (storageTasks.tasks[i].id == currentCard.id) {
                storageTasks.tasks[i].type = taskType;
                break;
            }
        }
    };

    return (
        <>
            <h3 className={`${task_pages_styles.title} ${app_styles.header_weight} ${app_styles.margin_top_from_header}`}>
                Все задачи
            </h3>

            <div className={app_styles.space_around}>
                <div className={`${task_pages_styles.task_type} ${task_pages_styles.task_column_width}`}>
                    <h5>
                        Открытые
                    </h5>
                    <div>
                        +
                    </div>
                </div>
                <div className={`${task_pages_styles.task_type} ${task_pages_styles.task_column_width}`}>
                    <h5>
                        Активные
                    </h5>
                    <div>
                        +
                    </div>
                </div>
                <div className={`${task_pages_styles.task_type} ${task_pages_styles.task_column_width}`}>
                    <h5>
                        Завершенные
                    </h5>
                    <div>
                        +
                    </div>
                </div>
            </div>


            {currentSprints.map(sprint => {
                return (
                    <><div className={task_pages_styles.sprint}>
                        <img src={require('../../images/opened_bracket.png')} />
                        <p>
                            {sprint.name} ({sprint.date_start} - {sprint.date_end})
                        </p>
                    </div>


                <div className={app_styles.space_around}>
                    <div className={task_pages_styles.task_column_width}
                         onDragOver={handleDragOver}
                         onDrop={(event) => handleDrop(event, TaskType.ToDo)}
                    >
                        {currentTasks.filter(task => task.type === TaskType.ToDo && task.sprint.id == sprint.id)
                            .map(task =>
                                <div
                                    draggable
                                    onDragStart={(event) => handleDragStart(event, task)}
                                    onDragEnd={handleDragEnd}
                                >
                                <TaskCard id={task.id}
                                          name={task.name}
                                          description={task.description}
                                          executor={task.executor}
                                          creator={task.creator}
                                          type={task.type}
                                          sprint={task.sprint}
                                />
                                </div>)
                        }
                    </div>
                    <div className={task_pages_styles.task_column_width}
                         onDragOver={handleDragOver}
                         onDrop={(event) => handleDrop(event, TaskType.InProgress)}
                    >
                        {currentTasks.filter(task => task.type === TaskType.InProgress && task.sprint.id == sprint.id)
                            .map(task =>
                                <div
                                    draggable
                                    onDragStart={(event) => handleDragStart(event, task)}
                                    onDragEnd={handleDragEnd}
                                >
                                <TaskCard id={task.id}
                                          name={task.name}
                                          description={task.description}
                                          executor={task.executor}
                                          creator={task.creator}
                                          type={task.type}
                                          sprint={task.sprint}
                                />
                                </div>)
                        }
                    </div>
                    <div className={task_pages_styles.task_column_width}
                         onDragOver={handleDragOver}
                         onDrop={(event) => handleDrop(event, TaskType.Done)}
                    >
                        {currentTasks.filter(task => task.type === TaskType.Done && task.sprint.id == sprint.id)
                            .map(task =>
                                <div
                                    draggable
                                    onDragStart={(event) => handleDragStart(event, task)}
                                    onDragEnd={handleDragEnd}
                                >
                                <TaskCard id={task.id}
                                          name={task.name}
                                          description={task.description}
                                          executor={task.executor}
                                          creator={task.creator}
                                          type={task.type}
                                          sprint={task.sprint}
                                />
                                </div>)
                        }
                    </div>

                </div></>
            );
            })}


            <div className={base_styles.myfooter} />
        </>
    );
}
export default Tasks;