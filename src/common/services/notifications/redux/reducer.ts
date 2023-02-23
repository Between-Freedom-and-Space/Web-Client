import {NotificationState} from "./types";
import {PayloadAction} from "@reduxjs/toolkit";
import {NotificationData} from "../types";
import {addNotification as addNotificationHelper} from "../helper"

export function addNotification(
    state: NotificationState,
    data: PayloadAction<NotificationData>
): NotificationState {
    const notification = data.payload
    addNotificationHelper(notification)
    return {
        ...state,
        notifications: [...state.notifications, notification]
    }
}