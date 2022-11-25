export type NotificationId = string

export interface NotificationData {
    id: NotificationId
    title: string
    message: string
    type: 'success' | 'danger' | 'info' | 'default' | 'warning'
}