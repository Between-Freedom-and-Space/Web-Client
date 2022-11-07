import React from 'react'
import { onInputChangeHandler, onInputKeyUpHandler } from '../helpers'
import { InputController } from '../types'

import styles from "./search-input.module.scss";

interface Props {
    text?: string
    hintText?: string
    controller?: InputController
}

function SearchInput ({ text, hintText, controller } : Props) {
    return (
        <input
            className={styles.input}
            placeholder={hintText}
            value={text}
            onChange={event => onInputChangeHandler(event, controller)}
            onKeyUp={event => onInputKeyUpHandler(event, controller)}
        />
    )
}

export default SearchInput
