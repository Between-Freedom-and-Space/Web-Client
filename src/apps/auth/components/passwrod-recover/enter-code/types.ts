export interface EnterRecoverCodeController {

    onCodeInputChanged(newInput: string): void

    onEnterPressed(): void

    onCheckCodeClicked(): void

    onSendAgainClicked(): void
}