import React from 'react'

import SignUpSingleInputItem from './simple-input-item/sign-up-single-input-item'
import config from "./assets/config.json"

import styles from "./sign-up.module.scss"
import PasswordInput from '../../../../common/components/ui-kit/inputs/password/password-input'
import { PasswordInputState } from '../../../../common/components/ui-kit/inputs/password/types'
import Button from '../../../../common/components/ui-kit/button/button'
import { ButtonType, SizeType } from '../../../../common/components/ui-kit/button/types'

function SignUp() {
    return (
        <div className={styles.formContainer}>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.nickname.title}
                    description={config.nickname.description}
                    inputHint={config.nickname.input_hint}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.name.title}
                    description={config.name.description}
                    inputHint={config.name.input_hint}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.profile_description.title}
                    description={config.profile_description.description}
                    inputHint={config.profile_description.input_hint}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.location.title}
                    description={config.location.description}
                    inputHint={config.location.input_hint}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.email.title}
                    description={config.email.description}
                    inputHint={config.email.input_hint}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.password.title}
                    description={config.password.description}
                    withInput={false}
                />
                <div className={styles.passwordInputsContainer}>
                    <div className={styles.passwordInputWrapper}>
                        <PasswordInput
                            currentState={PasswordInputState.INPUT_IN_PROGRESS}
                            hintText={config.password.input_hint[0]}
                        />
                    </div>
                    <div className={styles.passwordInputWrapper}>
                        <PasswordInput
                            currentState={PasswordInputState.INPUT_IN_PROGRESS}
                            hintText={config.password.input_hint[1]}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.verification_code.title}
                    description={config.verification_code.description}
                    inputHint={config.verification_code.input_hint}
                />
            </div>

            <div className={styles.sendVerificationCodeButtonWrapper}>
                <Button type={ButtonType.SECONDARY} widthType={SizeType.MAX_PERCENT} heightType={SizeType.MAX_PERCENT}>
                    {config.buttons.send_verification_code.title}
                </Button>
            </div>

            <div className={styles.signUpButtonWrapper}>
                <Button type={ButtonType.PRIMARY} widthType={SizeType.MAX_PERCENT} heightType={SizeType.MAX_PERCENT}>
                    {config.buttons.sign_up.title}
                </Button>
            </div>
        </div>
    )
}

export default SignUp
