import React from 'react'

import styles from "./plain-input.module.scss"
import {InputController} from "../types";

interface Props {
    hintText?: string
    initialText?: string
    controller?: InputController
}

function PlainInput ({hintText, controller}: Props) {
    return (
        <input
            className={styles.input}
            placeholder={hintText}
            onChange={(event) => onChangeHandler(event, controller)}
            onKeyUp={(event) => onKeyUpHandler(event, controller)}
        />
    )
}

function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>, controller?: InputController): void {

}

function onKeyUpHandler(event: React.KeyboardEvent<HTMLInputElement>, controller?: InputController): void {
    event.currentTarget.value
}

export default PlainInput
