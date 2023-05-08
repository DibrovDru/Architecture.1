import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './store/store';
import Projects from './store/projects';

interface State {
    storageCurrentState: Store,
    storageProjects: Projects
}

const store = new Store();
const projects: Projects = new Projects();

export const Context = createContext<State>({
    storageCurrentState: store,
    storageProjects: projects
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Context.Provider value={{ storageCurrentState: store, storageProjects: projects }}>
        <App />
    </Context.Provider>
);
