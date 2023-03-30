import styles from "./Tasks.module.css";

import { Task } from "../../types";

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
