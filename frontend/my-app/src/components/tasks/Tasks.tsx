import React from "react";
import app_styles from '../../App.module.css';
import task_pages_styles from '../../pages/main_tasks_page/TasksPage.module.css';
import base_styles from '../base/base.module.css';
import {TaskType} from "../../types";
import {tasks} from "../../state/state";
import {TaskCard} from "./TaskCard";


function Tasks() {

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


            <div className={task_pages_styles.sprint}>
                <img src={require('../../images/opened_bracket.png')} />
                <p>
                    1 спринт (24.03.2023 - 31.03.2023)
                </p>
            </div>

            <div className={app_styles.space_around}>
                <div className={task_pages_styles.task_column_width}>
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
                </div>
                <div className={task_pages_styles.task_column_width}>
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
                </div>
                <div className={task_pages_styles.task_column_width}>
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
                </div>

            </div>

            <div className={task_pages_styles.sprint}>
                <img src={require('../../images/opened_bracket.png')} />
                <p>
                    2 спринт (24.03.2023 - 31.03.2023)
                </p>
            </div>

            <div className={base_styles.myfooter} />
        </>
    );
}
export default Tasks;