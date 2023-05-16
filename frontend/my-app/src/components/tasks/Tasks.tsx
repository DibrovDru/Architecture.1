import React, {useContext, useEffect, useState} from "react";
import app_styles from '../../App.module.css';
import task_pages_styles from '../../pages/main_tasks_page/TasksPage.module.css';
import base_styles from '../base/base.module.css';
import {Sprint, TaskType} from "../../types";
import {defaultSprints, defaultTasks} from "../../store/state";
import {TaskCard} from "./TaskCard";
import {Context} from "../../index";
import {Task} from "../../types";
import {observer} from "mobx-react-lite";
import ProjectsService from "../../logic/services/ProjectsService";
import TasksService from "../../logic/services/TasksService";
import SprintsService from "../../logic/services/SprintsService";


function Tasks() {

    const { storageCurrentState, storageTasks, storageSprints } = useContext(Context);


    const [currentTasks, setCurrentTasks] = useState<Task[]>([]);

    const [currentSprints, setCurrentSprints] = useState<Sprint[]>([]);



    useEffect(() => {
        console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ = ');
        console.log(defaultTasks.length);
        storageTasks.setTasks(TasksService.fetchTasks(storageCurrentState.currentProject.id));
        console.log(storageTasks.getTasks.length);



        storageSprints.setSprints(SprintsService.fetchSprints());

        console.log(storageSprints.getSprints.length)
    }, []);


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
        for (let i = 0; i < storageTasks.getTasks.length; ++i) {
            if (storageTasks.getTasks[i].id == currentCard.id) {
                storageTasks.getTasks[i].type = taskType;
                break;
            }
        }
    };

    const changeSprintState = (sprint_id: number) => {
        for (var i = 0; i < storageSprints.getSprints.length; i++) {
            if (storageSprints.getSprints[i].id == sprint_id) {
                storageSprints.getSprints[i].is_open = !storageSprints.getSprints[i].is_open;
                break;
            }
        }
        console.log('qwerty')
    }

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


            {storageSprints.getSprints.map(sprint => {
                return (
                    <><div className={task_pages_styles.sprint}>
                        <img src={require('../../images/opened_bracket.png')} />
                        <p onClick={() => changeSprintState(sprint.id)}>
                            {sprint.name} ({sprint.date_start} - {sprint.date_end})
                        </p>
                    </div>

                {sprint.is_open
                    ?
                    <div className={app_styles.space_around}>
                        <div className={task_pages_styles.task_column_width}
                             onDragOver={handleDragOver}
                             onDrop={(event) => handleDrop(event, TaskType.ToDo)}
                        >
                            {storageTasks.getTasks.filter(task => task.type === TaskType.ToDo && task.sprint.id == sprint.id)
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
                            {storageTasks.getTasks.filter(task => task.type === TaskType.InProgress && task.sprint.id == sprint.id)
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
                            {storageTasks.getTasks.filter(task => task.type === TaskType.Done && task.sprint.id == sprint.id)
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
                    </div>
                    :
                    <></>
                }
                </>
            );
            })}
            <div className={base_styles.myfooter} />
        </>
    );
}
export default observer(Tasks);