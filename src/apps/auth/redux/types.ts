export interface SignInState {
    readonly nickname: string
    readonly password: string
    readonly isLoggedIn: boolean
}

export interface SignUpState {
    readonly nickname: string
    readonly email: string
    readonly phoneNumber: string
    readonly description: string
    readonly location: string
    readonly password: string
    readonly isLoggedIn: boolean
}

export interface OnSignUpFieldValueChanged {
    readonly field: keyof SignUpState
    readonly value: SignUpState[keyof SignUpState]
}