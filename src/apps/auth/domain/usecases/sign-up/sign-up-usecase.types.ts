export interface SendEmailVerificationCodeData {
    readonly email: string
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