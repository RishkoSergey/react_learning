import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It is my first post', likesCount: 18}
]

let dialogs = [
    {id: 1, name: 'Hustler'},
    {id: 2, name: 'Gangster'},
    {id: 3, name: 'Mafiozi'}
]

let messages = [
    {id: 1, message: 'Yo'},
    {id: 2, message: 'Wassup?'},
    {id: 3, message: 'Where r u, bro?'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

serviceWorker.unregister();
