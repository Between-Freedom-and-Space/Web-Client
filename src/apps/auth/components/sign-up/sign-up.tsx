import React from 'react'

import SignUpSingleInputItem from './simple-input-item/sign-up-single-input-item'
import config from "./assets/config.json"

import styles from "./sign-up.module.scss"
import PasswordInput from '../../../../common/components/ui-kit/inputs/password/password-input'
import {PasswordInputState} from '../../../../common/components/ui-kit/inputs/password/types'
import Button from '../../../../common/components/ui-kit/button/button'
import {ButtonType, SizeType} from '../../../../common/components/ui-kit/button/types'
import {useAppDispatch, useAppSelector} from "../../../../config/redux.config";
import {useNavigate} from "react-router-dom";
import {InputController} from "../../../../common/components/ui-kit/inputs/types";
import {AuthState} from "../../redux/types";
import {signUpActions} from "../../redux/slices";
import {sendVerificationCodeThunk, signUpThunk} from "../../redux/auth-reducers";
import {notificationActions} from "../../../../common/services/notifications/redux/slice";
import {getSendCodeButtonState, getSignUpButtonState} from "./helpers";
import {getProfileRouting} from "../../../../config/routings.config";

function SignUp() {
    const dispatch = useAppDispatch()
    const signUpState = useAppSelector(rootState => rootState.authSignUp)
    const navigate = useNavigate()

    const nicknameController: InputController = {
        onInputChanged(newInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'nickname', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'nickname', value: currentInput}))
        }
    }
    const nameController: InputController = {
        onInputChanged(newInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'name', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'name', value: currentInput}))
        }
    }
    const profileDescriptionController: InputController = {
        onInputChanged(newInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'description', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'description', value: currentInput}))
        }
    }
    const locationController: InputController = {
        onInputChanged(newInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'location', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'location', value: currentInput}))
        }
    }
    const emailController: InputController = {
        onInputChanged(newInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'email', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'email', value: currentInput}))
        }
    }
    const passwordController: InputController = {
        onInputChanged(newInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'password', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'password', value: currentInput}))
        }
    }
    const repeatedPasswordController: InputController = {
        onInputChanged(newInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'repeatedPassword', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'repeatedPassword', value: currentInput}))
        }
    }
    const verificationCodeController: InputController = {
        onInputChanged(newInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'verificationCode', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            dispatch(signUpActions.formFieldValueChanged({field: 'verificationCode', value: currentInput}))
        }
    }

    if (signUpState.state === AuthState.AUTHENTICATED) {
        navigate(getProfileRouting(signUpState.profileId))
    }

    if (signUpState.errorMessage) {
        dispatch(notificationActions.addNotification(
            {
                id: "0",
                type: 'danger',
                title: 'Error',
                message: signUpState.errorMessage
            }
        ))
        dispatch(signUpActions.errorShown())
    }

    return (
        <div className={styles.formContainer}>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.nickname.title}
                    description={config.nickname.description}
                    inputHint={config.nickname.input_hint}
                    inputText={signUpState.nickname}
                    controller={nicknameController}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.name.title}
                    description={config.name.description}
                    inputHint={config.name.input_hint}
                    inputText={signUpState.name}
                    controller={nameController}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.profile_description.title}
                    description={config.profile_description.description}
                    inputHint={config.profile_description.input_hint}
                    inputText={signUpState.description}
                    controller={profileDescriptionController}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.location.title}
                    description={config.location.description}
                    inputHint={config.location.input_hint}
                    inputText={signUpState.location}
                    controller={locationController}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.email.title}
                    description={config.email.description}
                    inputHint={config.email.input_hint}
                    inputText={signUpState.email}
                    controller={emailController}
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
                            text={signUpState.password}
                            controller={passwordController}
                        />
                    </div>
                    <div className={styles.passwordInputWrapper}>
                        <PasswordInput
                            currentState={PasswordInputState.INPUT_IN_PROGRESS}
                            hintText={config.password.input_hint[1]}
                            text={signUpState.repeatedPassword}
                            controller={repeatedPasswordController}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.verification_code.title}
                    description={config.verification_code.description}
                    inputHint={config.verification_code.input_hint}
                    controller={verificationCodeController}
                />
            </div>

            <div className={styles.sendVerificationCodeButtonWrapper}>
                <Button
                    type={ButtonType.SECONDARY}
                    state={getSendCodeButtonState(signUpState)}
                    widthType={SizeType.MAX_PERCENT}
                    heightType={SizeType.MAX_PERCENT}
                    onClick={() => dispatch(sendVerificationCodeThunk(signUpState))}
                >
                    {config.buttons.send_verification_code.title}
                </Button>
            </div>

            <div className={styles.signUpButtonWrapper}>
                <Button
                    type={ButtonType.PRIMARY}
                    state={getSignUpButtonState(signUpState)}
                    widthType={SizeType.MAX_PERCENT}
                    heightType={SizeType.MAX_PERCENT}
                    onClick={() => dispatch(signUpThunk(signUpState))}
                >
                    {config.buttons.sign_up.title}
                </Button>
            </div>
        </div>
    )
}

export default SignUp
