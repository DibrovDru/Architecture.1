import React from "react";
import styles from "./Tasks.module.css";
import { useStore } from "react-redux";
import { Store } from "@reduxjs/toolkit";

type Task = {
  name: string;
  executor: string;
};

function TodoTasks() {
  const tasks = [
    {
      name: "frontend",
      execitor: "Andrey",
    },
    {
      name: "backend",
      execitor: "Andrey",
    },
    {
      name: "Technical descriptionaaaaaa a a  a a a a a a",
      execitor: "Sveta",
    },
    {
      name: "disgn",
      execitor: "Sonya",
    },
    {
      name: "frontend",
      execitor: "Andrey",
    },
    {
      name: "backend",
      execitor: "Andrey",
    },
    {
      name: "Technical descriptiona",
      execitor: "Sveta",
    },
    {
      name: "disgn",
      execitor: "Sonya",
    },
    {
      name: "frontend",
      execitor: "Andrey",
    },
    {
      name: "backend",
      execitor: "Andrey",
    },
    {
      name: "Technical descriptiona",
      execitor: "Sveta",
    },
    {
      name: "disgn",
      execitor: "Sonya",
    },
  ];

  return (
    <div className={styles.tasks_column}>
      <div className={styles.tasks_type}>TODO</div>
      {tasks.map((el) => (
        <div className={styles.task}>
          <div> name : {el.name} </div> <div> executor: {el.execitor} </div>{" "}
        </div>
      ))}
    </div>
  );
}

function ActiveTasks() {
  const tasks = [
    {
      name: "frontend",
      execitor: "Andrey",
    },
    {
      name: "backend",
      execitor: "Andrey",
    },
    {
      name: "Technical description",
      execitor: "Sveta",
    },
    {
      name: "disgn",
      execitor: "Sonya",
    },
  ];

  return (
    <div className={styles.tasks_column}>
      <div className={styles.tasks_type}>InProcess</div>
      {tasks.map((el) => (
        <div className={styles.task}>
          <div> name : {el.name} </div> <div> executor: {el.execitor} </div>{" "}
        </div>
      ))}
    </div>
  );
}

function DoneTasks() {
  const store: Store = useStore();
  console.log(store.getState());
  // debugger;
  return (
    <div className={styles.tasks_column}>
      <div className={styles.tasks_type}>DONE</div>
      {store.getState().tasks.map((el: Task) => (
        <div className={styles.task}>
          <div> name : {el.name} </div> <div> executor: {el.executor} </div>{" "}
        </div>
      ))}
    </div>
  );
}

export function Tasks(props: { isOpenNavBar: boolean }) {
  return (
    <div className={styles.content}>
      {props.isOpenNavBar ? <></> : <div className={styles.empty_column}></div>}
      <TodoTasks />
      <ActiveTasks />
      <DoneTasks />
      <div className={styles.empty_column}></div>
    </div>
  );
}
