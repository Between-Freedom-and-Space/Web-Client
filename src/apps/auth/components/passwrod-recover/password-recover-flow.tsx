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
import {recoverPasswordActions} from "../../redux/slices";
import {notificationActions} from "../../../../common/services/notifications/redux/slice";
import {
    checkVerifiedCodeThunk,
    recoverPasswordThunk,
    sendVerifiedCodeThunk
} from "../../redux/recover-password-reducers";
import {getCheckCodeStatus, getEnterEmailStatus, getPasswordRecoverStatus, getSendCodeAgainStatus} from "./helpers";

function PasswordRecoverFlow() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const passwordRecoverState = useAppSelector((state: RootState) => state.recoverPassword)

    const enterEmailController: EnterEmailController = {
        onEmailChanged(newEmail: string) {
            dispatch(recoverPasswordActions.emailChanged(newEmail))
        },
        onEnterPressed() {
            dispatch(sendVerifiedCodeThunk())
        },
        onSendButtonPressed() {
            dispatch(sendVerifiedCodeThunk())
        },
        onTryToLogInPressed() {
            navigate('/authenticate')
        },
    }
    const enterCodeController: EnterRecoverCodeController = {
        onCodeInputChanged(newInput: string) {
            dispatch(recoverPasswordActions.verificationCodeChanged(newInput))
        },
        onEnterPressed() {
            dispatch(checkVerifiedCodeThunk())
        },
        onCheckCodeClicked() {
            dispatch(checkVerifiedCodeThunk())
        },
        onSendAgainClicked() {
            dispatch(sendVerifiedCodeThunk())
        },
    }
    const changePasswordController: PasswordRecoverChangeController = {
        onPasswordInputChanged(newInput: string) {
            dispatch(recoverPasswordActions.newPasswordChanged(newInput))
        },
        onRepeatPasswordInputChanged(newInput: string) {
            dispatch(recoverPasswordActions.repeatedNewPasswordChanged(newInput))
        },
        onEnterPressed() {
            dispatch(recoverPasswordThunk())
        },
        onRecoverButtonClicked() {
            dispatch(recoverPasswordThunk())
        },
    }
    const backButtonClickHandler = () => {
        navigate(-1)
    }

    if (passwordRecoverState.errorMessage) {
        dispatch(notificationActions.addNotification({
            id: "1",
            title: 'Error',
            message: passwordRecoverState.errorMessage,
            type: 'danger',
        }))
        dispatch(recoverPasswordActions.errorShown())
    }

    let content: ReactNode = null
    switch (passwordRecoverState.flowState) {
    case PasswordRecoverFlowState.ENTERING_EMAIL: {
        content = (
            <PasswordRecoverEnterEmail
                email={passwordRecoverState.email}
                status={getEnterEmailStatus(passwordRecoverState)}
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
                checkCodeStatus={getCheckCodeStatus(passwordRecoverState)}
                sendAgainStatus={getSendCodeAgainStatus(passwordRecoverState)}
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
                status={getPasswordRecoverStatus(passwordRecoverState)}
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