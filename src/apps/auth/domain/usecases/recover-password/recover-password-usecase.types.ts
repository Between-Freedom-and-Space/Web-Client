export interface SendVerificationCodeResult {
    type: 'success' | 'failure'
    code?: number
    message?: string
}

export interface CheckVerificationCodeResult {
    type: 'verified' | 'rejected'
    code?: number
    message?: string
}

export interface RecoverPasswordData {
    readonly email: string
    readonly verificationCode: string
    readonly newPassword: string
    readonly repeatedNewPassword: string
}

export interface RecoverPasswordResult {
    type: 'success' | 'failure'
}

export interface RecoverPasswordFailure extends RecoverPasswordResult {
    code?: number
    message: string
}

export interface RecoverPasswordSuccess extends RecoverPasswordResult {
    readonly accessToken: string
    readonly refreshToken: string
}