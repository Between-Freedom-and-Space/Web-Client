export interface InputController {

    onInputChanged(newInput: string): void

    onEnterPressed(currentInput: string): void
}