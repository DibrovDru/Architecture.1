import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './store/store';
import Projects from './store/projects';

interface State {
    store: Store,
    projects: Projects
}

const store = new Store();
const projects: Projects = new Projects();

export const Context = createContext<State>({
    store,
    projects
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Context.Provider value={{ store, projects }}>
        <App />
    </Context.Provider>
);
