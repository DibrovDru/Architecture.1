import styles from "./Tasks.module.css";

import { Task } from "../../types";

export function NewTaskPanel(props: any) {
  return (
    <div className={styles.new_task_panel}>
      <div className={styles.task_type}>
        <div>Task type:</div>
        <div className={styles.types}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={styles.description}>
        <div>Description:</div>
        <input></input>
      </div>

      <div className={styles.executor}>
        <div>Executor:</div>
        <div className={styles.choose_employee}></div>
      </div>
    </div>
  );
}

function TodoTasks({ tasks }: { tasks: Array<Task> }) {
  // console.log(tasks);
  // debugger;
  return (
    <div className={styles.tasks_column}>
      <div className={styles.tasks_type}>TODO</div>
      {tasks.map((el: Task) => (
        <div className={styles.task}>
          <div> name : {el.name} </div>{" "}
          <div> executor: {el.executor.name} </div>{" "}
        </div>
      ))}
    </div>
  );
}

function ActiveTasks({ tasks }: { tasks: Array<Task> }) {
  // console.log(tasks);
  // debugger;
  return (
    <div className={styles.tasks_column}>
      <div className={styles.tasks_type}>In Progress</div>
      {tasks.map((el: Task) => (
        <div className={styles.task}>
          <div> name : {el.name} </div>{" "}
          <div> executor: {el.executor.name} </div>{" "}
        </div>
      ))}
    </div>
  );
}

function DoneTasks({ tasks }: { tasks: Array<Task> }) {
  // console.log(tasks);
  // debugger;
  return (
    <div className={styles.tasks_column}>
      <div className={styles.tasks_type}>DONE</div>
      {tasks.map((el: Task) => (
        <div className={styles.task}>
          <div> name : {el.name} </div>{" "}
          <div> executor: {el.executor.name} </div>{" "}
        </div>
      ))}
    </div>
  );
}

export function Tasks({
  isOpenNavBar,
  tasks,
}: {
  isOpenNavBar: boolean;
  tasks: Array<Task>;
}) {
  // console.log(tasks);
  // debugger;
  return (
    <div className={styles.content}>
      {isOpenNavBar ? <></> : <div className={styles.empty_column}></div>}
      <TodoTasks tasks={tasks.filter((el) => el.type == "TODO")} />
      <ActiveTasks tasks={tasks.filter((el) => el.type == "INPROGRESS")} />
      <DoneTasks tasks={tasks.filter((el) => el.type == "DONE")} />
      <div className={styles.empty_column}></div>
    </div>
  );
}
