import {NotificationState} from "./types";
import {createSlice} from "@reduxjs/toolkit";
import { addNotification } from "./reducer";

const initialState: NotificationState = {
    notifications: Array.of()
}

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: initialState,
    reducers: {
        addNotification: addNotification
    }
})

export const notificationActions = notificationsSlice.actions