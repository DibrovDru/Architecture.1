import React from "react";
import styles from "./Tasks.module.css";

function TodoTasks() {
  return <div className={styles.tasks}>TODO</div>;
}

function ActiveTasks() {
  return <div className={styles.tasks}>Active</div>;
}

function DoneTasks() {
  return <div className={styles.tasks}>DONE</div>;
}

export function Tasks() {
  return (
    <div className={styles.content}>
      <TodoTasks />
      <ActiveTasks />
      <DoneTasks />
      <div className={styles.tasks}>text</div>
    </div>
  );
}
