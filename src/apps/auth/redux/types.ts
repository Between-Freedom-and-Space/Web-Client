import {PasswordRecoverChangeState} from "../components/passwrod-recover/password-change/types";

export interface SignInState {
    readonly profileId: number
    readonly nickname: string
    readonly password: string
    readonly state: AuthState
    readonly errorMessage?: string
}

export interface SignUpState {
    readonly profileId: number
    readonly nickname: string
    readonly name: string
    readonly email: string
    readonly phoneNumber: string
    readonly description: string
    readonly location: string
    readonly password: string
    readonly repeatedPassword: string
    readonly verificationCode: string
    readonly verificationCodeState: VerificationCodeState
    readonly state: AuthState
    readonly errorMessage?: string
}

export interface RecoverPasswordState {
    readonly email: string
    readonly recoverCode: string
    readonly newPassword: string
    readonly newPasswordRepeated: string
    readonly passwordChangeState: PasswordRecoverChangeState
    readonly timeRemainedSeconds: number
    readonly errorMessage?: string
    readonly flowState: PasswordRecoverFlowState

    readonly isVerifiedCodeSending: boolean
    readonly isVerifiedCodeChecking: boolean
    readonly isPasswordRecovering: boolean
}

export interface OnSignUpFieldValueChanged {
    readonly field: keyof SignUpState
    readonly value: SignUpState[keyof SignUpState]
}

export enum AuthState {
    NOT_AUTHENTICATED,
    LOADING,
    AUTHENTICATED
}

export enum VerificationCodeState {
    NOT_SEND,
    SENDING,
    SEND
}

export enum PasswordRecoverFlowState {
    ENTERING_EMAIL,
    ENTERING_VERIFICATION_CODE,
    INPUT_NEW_PASSWORD,
    RECOVER_FINISHED
}