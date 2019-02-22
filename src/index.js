import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from "./Store/store"
import './index.css';
import App from './App';
// import * as registerServiceWorker from './registerServiceWorker';


const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
// registerServiceWorker();
