import React from 'react'
import * as styles from './index.css'
import ReactDOM from 'react-dom/client'
import App from './entry/entry'
import { Provider } from 'react-redux'
import { store } from './config/redux.config'
import { Buffer } from "buffer";

window.Buffer = window.Buffer || Buffer

const style = document.createElement('style')
style.innerHTML = styles
document.head.append(style)

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