import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './store/store';
import Projects from './store/projects';
import Tasks from "./store/tasks";

interface State {
    storageCurrentState: Store,
    storageProjects: Projects,
    storageTasks: Tasks
}

const store = new Store();
const projects: Projects = new Projects();
const tasks: Tasks = new Tasks();

export const Context = createContext<State>({
    storageCurrentState: store,
    storageProjects: projects,
    storageTasks: tasks
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Context.Provider value={{ storageCurrentState: store, storageProjects: projects, storageTasks: tasks }}>
        <App />
    </Context.Provider>
);
