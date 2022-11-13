import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../../../common/components/ui-kit/button/button'
import { ButtonType, SizeType } from '../../../../common/components/ui-kit/button/types'
import PasswordInput from '../../../../common/components/ui-kit/inputs/password/password-input'
import { PasswordInputState } from '../../../../common/components/ui-kit/inputs/password/types'
import PlainInput from '../../../../common/components/ui-kit/inputs/plain/plain-input'
import config from "./assets/config.json"

import styles from "./sign-in.module.scss"

function SignIn() {
    const [passwordState, setPasswordState] = useState(PasswordInputState.INPUT_IN_PROGRESS)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    return (
        <div className={styles.formContainer}>
            <div className={styles.loginInputWrapper}>
                <PlainInput hintText={config.login_input_hint}/>
            </div>
            <div className={styles.passwordInputWrapper}>
                <PasswordInput currentState={passwordState} hintText={config.password_input_hint}/>
            </div>
            <div className={styles.buttonsContainer}>
                <div className={styles.buttonWrapper} data-button-pos='first'>
                    <Button type={ButtonType.SECONDARY} widthType={SizeType.MAX_PERCENT} heightType={SizeType.MAX_PERCENT}>
                        {config.cancel_button_title}
                    </Button>
                </div>
                <div className={styles.buttonWrapper} data-button-pos='second'>
                    <Button type={ButtonType.PRIMARY} widthType={SizeType.MAX_PERCENT} heightType={SizeType.MAX_PERCENT}>
                        {config.sign_in_button_title}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn
