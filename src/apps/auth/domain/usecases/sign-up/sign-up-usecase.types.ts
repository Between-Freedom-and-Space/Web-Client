export interface SendEmailVerificationCodeData {
    readonly email: string
}

export type SendEmailVerificationResultType = 'success' | 'failure'

export interface SendEmailVerificationCodeResult {
    type: SendEmailVerificationResultType
    message?: string
}

export interface PerformSignUpData {
    readonly nickname: string
    readonly name: string
    readonly description: string
    readonly location: string
    readonly email: string
    readonly password: string
    readonly repeatedPassword: string
    readonly verificationCode: string
}

export interface SignUpResult { }

export interface SignUpSuccess extends SignUpResult { }

export interface SignUpFailure extends SignUpResult {
    message: string
}