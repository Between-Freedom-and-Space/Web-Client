import React from "react";
import styles from './password-recover-enter-code.module.scss'

import config from './assets/config.json'
import PlainInput from "../../../../../common/components/ui-kit/inputs/plain/plain-input";
import Button from "../../../../../common/components/ui-kit/button/button";
import {ButtonType, SizeType} from "../../../../../common/components/ui-kit/button/types";
import {CheckCodeStatus, EnterRecoverCodeController, SendCodeAgainStatus} from "./types";
import {InputController} from "../../../../../common/components/ui-kit/inputs/types";
import {formatTimeRemainedSeconds, getCheckCodeButtonState, getSendAgainButtonState} from "./helpers";

interface Props {
    code?: string
    timeRemainedSeconds?: number
    checkCodeStatus?: CheckCodeStatus,
    sendAgainStatus?: SendCodeAgainStatus,
    controller?: EnterRecoverCodeController
}

function PasswordRecoverEnterCode({
    code,
    timeRemainedSeconds = 0,
    checkCodeStatus = CheckCodeStatus.NOT_CHECKING,
    sendAgainStatus = SendCodeAgainStatus.NOT_SENDING,
    controller,
}: Props) {
    const sendAgainButtonState = getSendAgainButtonState(sendAgainStatus)
    const checkCodeButtonState = getCheckCodeButtonState(checkCodeStatus)
    const sendAgainText = `${config.send_again_code}: ${formatTimeRemainedSeconds(timeRemainedSeconds)}`

    const checkCodeButtonClickHandler = () => {
        controller?.onCheckCodeClicked()
    }
    const sendCodeAgainButtonClickHandler = () => {
        controller?.onSendAgainClicked()
    }
    const codeInputController: InputController = {
        onInputChanged(newInput: string) {
            controller?.onCodeInputChanged(newInput)
        },
        onEnterPressed(currentInput: string) {
            controller?.onEnterPressed()
        }
    }

    return (
        <div className={styles.topContainer}>
            <div className={styles.label}>{config.label}</div>
            <div className={styles.description}>{config.description}</div>

            <div className={styles.inputCodeWrapper}>
                <PlainInput text={code} controller={codeInputController} hintText={config.input_hint}/>
            </div>

            <div className={styles.controlsContainer}>
                <div className={styles.checkCodeButtonWrapper}>
                    <Button
                        type={ButtonType.SECONDARY}
                        state={checkCodeButtonState}
                        onClick={checkCodeButtonClickHandler}
                        widthType={SizeType.MAX_PERCENT}
                        heightType={SizeType.MAX_PERCENT}
                    >{config.check_code}</Button>
                </div>
                <div className={styles.sendAgainButtonWrapper}>
                    <Button
                        type={ButtonType.SECONDARY}
                        state={sendAgainButtonState}
                        onClick={sendCodeAgainButtonClickHandler}
                        widthType={SizeType.MAX_PERCENT}
                        heightType={SizeType.MAX_PERCENT}
                    >{sendAgainText}</Button>
                </div>
            </div>
        </div>
    )
}

export default PasswordRecoverEnterCode;