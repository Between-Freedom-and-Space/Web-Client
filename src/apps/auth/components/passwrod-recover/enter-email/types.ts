export interface EnterEmailController {

    onEmailChanged(newEmail: string): void

    onEnterPressed(): void

    onSendButtonPressed(): void

    onTryToLogInPressed(): void
}