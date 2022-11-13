import React from 'react'
import PlainInput from '../../../../../common/components/ui-kit/inputs/plain/plain-input'

import styles from "./sign-up-single-input-item.module.scss"

interface Props {
    title?: string,
    description?: string,
    inputText?: string,
    inputHint?: string,
    withInput?: boolean
}

function SignUpSingleInputItem({
    title,
    description,
    inputText,
    inputHint,
    withInput = true
}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            {withInput ? Input(inputText, inputHint) : null}
        </div>
    )
}

function Input(inputText?: string, inputHint?: string) {
    return (
        <div className={styles.input}>
            <PlainInput text={inputText} hintText={inputHint}/>
        </div>
    )
}

export default SignUpSingleInputItem