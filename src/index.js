import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Imports the createStore from Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import postReducer from './reducers/postReducer';

//Creates the store where the app state will be kept
const store = createStore(postReducer);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
