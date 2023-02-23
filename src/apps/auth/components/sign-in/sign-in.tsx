import React, {useEffect, useState} from 'react'
import Button from '../../../../common/components/ui-kit/button/button'
import {ButtonType, SizeType} from '../../../../common/components/ui-kit/button/types'
import PasswordInput from '../../../../common/components/ui-kit/inputs/password/password-input'
import {PasswordInputState} from '../../../../common/components/ui-kit/inputs/password/types'
import PlainInput from '../../../../common/components/ui-kit/inputs/plain/plain-input'
import config from "./assets/config.json"

import styles from "./sign-in.module.scss"
import {useNavigate} from "react-router-dom";
import {signInThunk} from "../../redux/reducer";
import {InputController} from "../../../../common/components/ui-kit/inputs/types";
import {RootState, useAppDispatch, useAppSelector} from "../../../../config/redux.config";
import {AuthState} from "../../redux/types";
import CommonLoader from "../../../../common/components/ui-kit/loaders/common-loader";
import {signInActions} from "../../redux/slice";
import {notificationActions} from "../../../../common/services/notifications/redux/slice";

function SignIn() {
    const signInState = useAppSelector((state: RootState) => state.authSignIn)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [passwordState, setPasswordState] = useState(PasswordInputState.INPUT_IN_PROGRESS)

    const loginController: InputController = {
        onInputChanged(newInput: string) {
            dispatch(signInActions.nicknameFieldChanged(newInput))
        },
        onEnterPressed(currentInput: string) {
            dispatch(signInActions.nicknameFieldChanged(currentInput))
        }
    }
    const passwordController: InputController = {
        onInputChanged(newInput: string) {
            dispatch(signInActions.passwordFieldChanged(newInput))
        },
        onEnterPressed(currentInput: string) {
            dispatch(signInActions.passwordFieldChanged(currentInput))
        }
    }

    if (signInState.state === AuthState.LOADING) {
        return (
            <div className={styles.formContainer}>
                <CommonLoader visibility={true}/>
            </div>
        )
    }
    if (signInState.state === AuthState.AUTHENTICATED) {
        navigate('/profile')
    }

    if (signInState.errorMessage) {
        dispatch(notificationActions.addNotification(
            {
                id: "0",
                title: "Error",
                type: 'danger',
                message: signInState.errorMessage,
            }
        ))
        dispatch(signInActions.errorShown())
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.loginInputWrapper}>
                <PlainInput
                    hintText={config.login_input_hint}
                    text={signInState.nickname}
                    controller={loginController}
                />
            </div>
            <div className={styles.passwordInputWrapper}>
                <PasswordInput
                    currentState={passwordState}
                    hintText={config.password_input_hint}
                    text={signInState.password}
                    controller={passwordController}
                />
            </div>
            <div className={styles.buttonsContainer}>
                <div className={styles.buttonWrapper} data-button-pos='first'>
                    <Button
                        type={ButtonType.SECONDARY}
                        widthType={SizeType.MAX_PERCENT}
                        heightType={SizeType.MAX_PERCENT}
                        onClick={() => navigate(-1)}
                    >
                        {config.cancel_button_title}
                    </Button>
                </div>
                <div className={styles.buttonWrapper} data-button-pos='second'>
                    <Button
                        type={ButtonType.PRIMARY}
                        widthType={SizeType.MAX_PERCENT}
                        heightType={SizeType.MAX_PERCENT}
                        onClick={() => dispatch(signInThunk(signInState))}
                    >
                        {config.sign_in_button_title}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn
