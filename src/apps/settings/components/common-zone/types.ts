export interface CommonZoneController {

    onChangeNicknameButtonClicked(): void

    onChangeEmailButtonClicked(): void

    onNewNicknameChanged(newInput: string): void

    onNewEmailChanged(newInput: string): void
}