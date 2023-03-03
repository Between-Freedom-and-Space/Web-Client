import React from "react";
import styles from './password-recover-change.module.scss'

import config from './assets/config.json'
import {PasswordRecoverChangeController, PasswordRecoverChangeState} from "./types";
import PasswordInput from "../../../../../common/components/ui-kit/inputs/password/password-input";
import Button from "../../../../../common/components/ui-kit/button/button";
import {ButtonType, SizeType} from "../../../../../common/components/ui-kit/button/types";
import {mapPasswordRecoverState} from "./helpers";
import {InputController} from "../../../../../common/components/ui-kit/inputs/types";

interface Props {
    newPassword?: string
    newPasswordRepeated?: string
    state?: PasswordRecoverChangeState
    controller?: PasswordRecoverChangeController
}

function PasswordRecoverChange({
    newPassword,
    newPasswordRepeated,
    state = PasswordRecoverChangeState.IN_PROGRESS,
    controller,
}: Props) {
    const passwordInputState = mapPasswordRecoverState(state)

    const recoverButtonClickHandler = () => {
        controller?.onRecoverButtonClicked()
    }
    const passwordInputController: InputController = {
        onInputChanged(newInput: string) {
            controller?.onPasswordInputChanged(newInput)
        },
        onEnterPressed(currentInput: string) {
            controller?.onEnterPressed()
        }
    }
    const repeatedPasswordInputController: InputController = {
        onInputChanged(newInput: string) {
            controller?.onRepeatPasswordInputChanged(newInput)
        },
        onEnterPressed(currentInput: string) {
            controller?.onEnterPressed()
        }
    }

    return (
        <div className={styles.topContainer}>
            <div className={styles.label}>{config.label}</div>
            <div className={styles.description}>{config.description}</div>

            <div className={styles.passwordInputsContainer}>
                <div className={styles.passwordInputWrapper}>
                    <PasswordInput
                        currentState={passwordInputState}
                        text={newPassword}
                        hintText={config.new_password_hint}
                        controller={passwordInputController}
                    />
                </div>
                <div className={styles.passwordInputWrapper}>
                    <PasswordInput
                        currentState={passwordInputState}
                        text={newPasswordRepeated}
                        hintText={config.new_password_repeat_hint}
                        controller={repeatedPasswordInputController}
                    />
                </div>
            </div>

            <div className={styles.recoverButtonWrapper}>
                <Button
                    type={ButtonType.PRIMARY}
                    onClick={recoverButtonClickHandler}
                    widthType={SizeType.MAX_PERCENT}
                    heightType={SizeType.MAX_PERCENT}
                >{config.recover_button}</Button>
            </div>
        </div>
    )
}

export default PasswordRecoverChange;