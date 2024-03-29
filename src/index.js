import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { render } from "react-dom";
import enrollmentApp from "./reducers/reducer";

const initialState = {
    userData: {
        name: {},
        contactInfo: {}
    }
};

const store = createStore(enrollmentApp, initialState);
console.log(store);
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
