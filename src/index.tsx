import React from 'react'
import * as ReactDOM from "react-dom";
import App from './entry/entry'
import { Provider } from 'react-redux'
import { store } from './config/redux.config'
import { Buffer } from "buffer";

window.Buffer = window.Buffer || Buffer

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)