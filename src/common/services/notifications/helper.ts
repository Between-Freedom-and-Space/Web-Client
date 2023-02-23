import {NotificationData} from "./types";
import {Store} from "react-notifications-component";

export function addNotification(data: NotificationData) {
    Store.addNotification({
        title: data.title,
        message: data.message,
        type: data.type,
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true,
            pauseOnHover: true,
        },
        touchSlidingExit: {
            swipe: {
                duration: 400,
                timingFunction: 'ease-out',
                delay: 0,
            },
            fade: {
                duration: 400,
                timingFunction: 'ease-out',
                delay: 0
            }
        }
    })
}