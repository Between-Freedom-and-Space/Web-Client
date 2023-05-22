export interface SendVerifiedCodeResponse {
    readonly result: 'success' | 'failure'
    readonly message?: string
}

export interface CheckVerifiedCodeResponse {
    readonly checkResult: 'verified' | 'invalid'
    readonly message?: string
}

export interface RecoverPasswordRequest {
    readonly email: string
    readonly code: string
    readonly newPassword: string
}

export interface RecoverPasswordResponse {
    readonly result: 'success' | 'failure'
    readonly message?: string
}