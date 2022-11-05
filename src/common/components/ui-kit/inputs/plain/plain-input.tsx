import React from 'react'

import {InputController} from "../types";
import {onInputChangeHandler, onInputKeyUpHandler} from "../helpers";

import styles from "./plain-input.module.scss"

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
            onChange={(event) => onInputChangeHandler(event, controller)}
            onKeyUp={(event) => onInputKeyUpHandler(event, controller)}
        />
    )
}

export default PlainInput
