import React from "react";
import styles from './password-recover-enter-email.module.scss'

import config from './assets/config.json';
import {EnterEmailController, EnterEmailStatus} from "./types";
import PlainInput from "../../../../../common/components/ui-kit/inputs/plain/plain-input";
import Button from "../../../../../common/components/ui-kit/button/button";
import {ButtonType, SizeType} from "../../../../../common/components/ui-kit/button/types";
import {InputController} from "../../../../../common/components/ui-kit/inputs/types";
import {getSendButtonState} from "./helpers";

interface Props {
    email?: string,
    status?: EnterEmailStatus
    controller?: EnterEmailController
}

function PasswordRecoverEnterEmail({
    email,
    status = EnterEmailStatus.ENTERING_EMAIL,
    controller,
}: Props) {
    const buttonState = getSendButtonState(status)

    const logInClickHandler = () => {
        controller?.onTryToLogInPressed()
    }
    const sendButtonClickHandler = () => {
        controller?.onSendButtonPressed()
    }
    const inputController: InputController = {
        onInputChanged(newInput: string) {
            controller?.onEmailChanged(newInput)
        },
        onEnterPressed(_: string) {
            controller?.onEnterPressed()
        }
    }

    return (
        <div className={styles.topContainer}>
            <div className={styles.label}>{config.label}</div>
            <div className={styles.description}>{config.description}</div>

            <div className={styles.emailInputWrapper}>
                <PlainInput hintText={config.input_hint} text={email} controller={inputController}/>
            </div>
            <div className={styles.sendButtonWrapper}>
                <Button
                    type={ButtonType.PRIMARY}
                    state={buttonState}
                    onClick={sendButtonClickHandler}
                    widthType={SizeType.MAX_PERCENT}
                    heightType={SizeType.MAX_PERCENT}
                >{config.button_title}</Button>
            </div>

            <div className={styles.logInContainer}>
                <div className={styles.logInTitle}>{config.log_in_title}</div>
                <div className={styles.logInLink} onClick={logInClickHandler}>{config.log_in_link_title}</div>
            </div>
        </div>
    )
}

export default PasswordRecoverEnterEmail;