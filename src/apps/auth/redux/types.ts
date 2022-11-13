export interface SignInState {
    readonly login: string
    readonly password: string
}

export interface SignUpState {
    readonly nickname: string
    readonly email: string
    readonly phoneNumber: string
    readonly description: string
    readonly location: string
    readonly password: string
}