import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './store/store';
import Projects from './store/projects';
import Tasks from "./store/tasks";
import Sprints from "./store/sprints";

interface State {
    storageCurrentState: Store,
    storageProjects: Projects,
    storageTasks: Tasks
    storageSprints: Sprints
}

const store = new Store();
export const projects: Projects = new Projects();
const tasks: Tasks = new Tasks();
const sprints: Sprints = new Sprints();

export const Context = createContext<State>({
    storageCurrentState: store,
    storageProjects: projects,
    storageTasks: tasks,
    storageSprints: sprints
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Context.Provider value={{ storageCurrentState: store, storageProjects: projects, storageTasks: tasks, storageSprints: sprints }}>
        <App />
    </Context.Provider>
);
