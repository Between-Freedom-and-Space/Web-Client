import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './entry/entry'
import { Provider } from 'react-redux'
import { configureStore, createReducer, createSlice } from '@reduxjs/toolkit'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const initialState = {

}
const slice = createSlice({
    name: 'stub',
    initialState,
    reducers: {

    }
})

const stubStore = configureStore({
    reducer: slice.reducer
})

root.render(
    <React.StrictMode>
        <Provider store={stubStore}>
            <App />
        </Provider>
    </React.StrictMode>
)
