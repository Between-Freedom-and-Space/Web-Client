import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './entry/entry'
import { Provider } from 'react-redux'
import { store } from './config/redux.config'
import { Buffer } from "buffer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

window.Buffer = window.Buffer || Buffer

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)