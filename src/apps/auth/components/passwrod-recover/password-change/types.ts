export interface PasswordRecoverChangeController {

    onPasswordInputChanged(newInput: string): void

    onRepeatPasswordInputChanged(newInput: string): void

    onEnterPressed(): void

    onRecoverButtonClicked(): void
}

export enum PasswordRecoverChangeState {
    IN_PROGRESS,
    PASSWORDS_MATCH,
    PASSWORDS_NOT_MATCH
}