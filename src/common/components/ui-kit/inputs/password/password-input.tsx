import React from 'react'

import cancelIcon from './assets/password_input_cancel.svg';
import { PasswordInputState } from './types';
import { onInputChangeHandler, onInputKeyUpHandler } from '../helpers';
import { InputController } from '../types'

import styles from "./password-input.module.scss"

interface Props {
    text?: string
    hintText?: string
    controller?: InputController
    currentState: PasswordInputState
}

function PasswordInput ({
    text,
    hintText,
    controller,
    currentState,
}: Props) {
    return (
        <div className={styles.container} data-state={currentState}>
            <input className={styles.input}
                type='password'
                placeholder={hintText}
                onChange={event => onInputChangeHandler(event, controller)}
                onKeyUp={event => onInputKeyUpHandler(event, controller)}
                value={text}
                data-state={currentState}
            />
            {/*<img className={styles.cancelIcon} src={cancelIcon} alt="Cancel Icon"/>*/}
        </div>
    )
}

export default PasswordInput
