export interface SignInState {
    readonly nickname: string
    readonly password: string
    readonly state: AuthState
}

export interface SignUpState {
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