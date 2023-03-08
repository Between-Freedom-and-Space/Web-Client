export interface EnterRecoverCodeController {

    onCodeInputChanged(newInput: string): void

    onEnterPressed(): void

    onCheckCodeClicked(): void

    onSendAgainClicked(): void
}

export enum CheckCodeStatus {
    IN_PROGRESS,
    NOT_CHECKING,
}

export enum SendCodeAgainStatus {
    IN_PROGRESS,
    NOT_SENDING,

}