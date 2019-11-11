import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";

let rerenderDom = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
};

rerenderDom(store.getState());

store.subscribe(rerenderDom);

