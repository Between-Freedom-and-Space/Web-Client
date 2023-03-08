export interface EnterEmailController {

    onEmailChanged(newEmail: string): void

    onEnterPressed(): void

    onSendButtonPressed(): void

    onTryToLogInPressed(): void
}

export enum EnterEmailStatus {
    SENDING_CODE,
    ENTERING_EMAIL,

}