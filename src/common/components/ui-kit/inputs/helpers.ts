import { InputController } from "./types"

export function onInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>, controller?: InputController): void {
    controller?.onInputChanged(event.target.value)
}

export function onInputKeyUpHandler(event: React.KeyboardEvent<HTMLInputElement>, controller?: InputController): void {
    if (event.key === 'Enter') {
        controller?.onEnterPressed(event.currentTarget.value)
    }
}