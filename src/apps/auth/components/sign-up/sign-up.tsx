import React, {useState} from 'react'

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
import CommonLoader from "../../../../common/components/ui-kit/loaders/common-loader";
import {signUpActions} from "../../redux/slice";
import {sendVerificationCodeThunk, signUpThunk} from "../../redux/reducer";
import {notificationActions} from "../../../../common/services/notifications/redux/slice";

function SignUp() {
    const dispatch = useAppDispatch()
    const signUpState = useAppSelector(rootState => rootState.authSignUp)
    const navigate = useNavigate()

    const [nickname, setNickname] = useState('')
    const [name, setName] = useState('')
    const [profileDescription, setProfileDescription] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const [verificationCode, setVerificationCode] = useState('')

    const nicknameController: InputController = {
        onInputChanged(newInput: string) {
            setNickname(newInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'nickname', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            setNickname(currentInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'nickname', value: currentInput}))
        }
    }
    const nameController: InputController = {
        onInputChanged(newInput: string) {
            setName(newInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'name', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            setName(currentInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'name', value: currentInput}))
        }
    }
    const profileDescriptionController: InputController = {
        onInputChanged(newInput: string) {
            setProfileDescription(newInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'description', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            setProfileDescription(currentInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'description', value: currentInput}))
        }
    }
    const locationController: InputController = {
        onInputChanged(newInput: string) {
            setLocation(newInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'location', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            setLocation(currentInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'location', value: currentInput}))
        }
    }
    const emailController: InputController = {
        onInputChanged(newInput: string) {
            setEmail(newInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'email', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            setEmail(currentInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'email', value: currentInput}))
        }
    }
    const passwordController: InputController = {
        onInputChanged(newInput: string) {
            setPassword(newInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'password', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            setPassword(currentInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'password', value: currentInput}))
        }
    }
    const repeatedPasswordController: InputController = {
        onInputChanged(newInput: string) {
            setRepeatedPassword(newInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'repeatedPassword', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            setRepeatedPassword(currentInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'repeatedPassword', value: currentInput}))
        }
    }
    const verificationCodeController: InputController = {
        onInputChanged(newInput: string) {
            setVerificationCode(newInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'verificationCode', value: newInput}))
        },
        onEnterPressed(currentInput: string) {
            setVerificationCode(currentInput)
            dispatch(signUpActions.formFieldValueChanged({field: 'verificationCode', value: currentInput}))
        }
    }

    if (signUpState.state === AuthState.LOADING) {
        return (
            <div className={styles.formContainer}>
                <CommonLoader visibility={true} />
            </div>
        )
    }
    if (signUpState.state === AuthState.AUTHENTICATED) {
        navigate('/profile')
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
                    controller={nicknameController}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.name.title}
                    description={config.name.description}
                    inputHint={config.name.input_hint}
                    controller={nameController}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.profile_description.title}
                    description={config.profile_description.description}
                    inputHint={config.profile_description.input_hint}
                    controller={profileDescriptionController}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.location.title}
                    description={config.location.description}
                    inputHint={config.location.input_hint}
                    controller={locationController}
                />
            </div>

            <div className={styles.itemContainer}>
                <SignUpSingleInputItem
                    title={config.email.title}
                    description={config.email.description}
                    inputHint={config.email.input_hint}
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
                            controller={passwordController}
                        />
                    </div>
                    <div className={styles.passwordInputWrapper}>
                        <PasswordInput
                            currentState={PasswordInputState.INPUT_IN_PROGRESS}
                            hintText={config.password.input_hint[1]}
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
