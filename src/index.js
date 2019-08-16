import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
    }

rerenderEntireTree();

store.subscribe(rerenderEntireTree);
    

serviceWorker.unregister();
