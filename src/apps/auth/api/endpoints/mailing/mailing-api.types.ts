export interface SendEmailVerificationCodeRequest {
    readonly email: string
    readonly securityVariable: string
}

export interface VerifyEmailVerificationCodeRequest {
    readonly verificationCode: string
    readonly targetEmail: string
    readonly securityVariable: string
}

export interface VerifyCodeResponse {
    readonly result: VerifyCodeResult
}

export type VerifyCodeResult = 'Invalid Code' | 'Not Found' | 'Validated'
