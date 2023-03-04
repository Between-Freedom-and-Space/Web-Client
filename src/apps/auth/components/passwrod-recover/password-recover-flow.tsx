import React, {ReactNode} from "react";
import styles from './password-recover-flow.module.scss'

import PasswordRecoverEnterEmail from "./enter-email/password-recover-enter-email";
import PasswordRecoverEnterCode from "./enter-code/password-recover-enter-code";
import PasswordRecoverResult from "./recover-result/password-recover-result";
import PasswordRecoverChange from "./password-change/password-recover-change";
import {useNavigate} from "react-router-dom";
import {RootState, useAppDispatch, useAppSelector} from "../../../../config/redux.config";
import {PasswordRecoverFlowState} from "../../redux/types";
import {EnterEmailController} from "./enter-email/types";
import {EnterRecoverCodeController} from "./enter-code/types";
import {PasswordRecoverChangeController} from "./password-change/types";

function PasswordRecoverFlow() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const passwordRecoverState = useAppSelector((state: RootState) => state.recoverPassword)

    const enterEmailController: EnterEmailController = {
        onEmailChanged(newEmail: string) {
        },
        onEnterPressed() {
        },
        onSendButtonPressed() {
        },
        onTryToLogInPressed() {
        },
    }
    const enterCodeController: EnterRecoverCodeController = {
        onCodeInputChanged(newInput: string) {
        },
        onEnterPressed() {
        },
        onCheckCodeClicked() {
        },
        onSendAgainClicked() {
        },
    }
    const changePasswordController: PasswordRecoverChangeController = {
        onPasswordInputChanged(newInput: string) {
        },
        onRepeatPasswordInputChanged(newInput: string) {
        },
        onEnterPressed() {
        },
        onRecoverButtonClicked() {
        },
    }
    const backButtonClickHandler = () => {
        navigate(-1)
    }

    let content: ReactNode = null
    switch (passwordRecoverState.flowState) {
    case PasswordRecoverFlowState.ENTERING_EMAIL: {
        content = (
            <PasswordRecoverEnterEmail
                email={passwordRecoverState.email}
                controller={enterEmailController}
            />
        )
        break
    }
    case PasswordRecoverFlowState.ENTERING_VERIFICATION_CODE: {
        content = (
            <PasswordRecoverEnterCode
                code={passwordRecoverState.recoverCode}
                timeRemainedSeconds={passwordRecoverState.timeRemainedSeconds}
                controller={enterCodeController}
            />
        )
        break
    }
    case PasswordRecoverFlowState.INPUT_NEW_PASSWORD: {
        content = (
            <PasswordRecoverChange
                newPassword={passwordRecoverState.newPassword}
                newPasswordRepeated={passwordRecoverState.newPasswordRepeated}
                state={passwordRecoverState.passwordChangeState}
                controller={changePasswordController}
            />
        )
        break
    }
    case PasswordRecoverFlowState.RECOVER_FINISHED: {
        content = (
            <PasswordRecoverResult onBackButtonClicked={backButtonClickHandler}/>
        )
        break
    }
    }

    return (
        <div className={styles.topContainer}>
            {content}
        </div>
    )
}

export default PasswordRecoverFlow