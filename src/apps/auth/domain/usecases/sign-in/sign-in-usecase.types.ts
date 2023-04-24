export interface PerformSignInData {
    readonly nickname: string
    readonly password: string
}

export type SignInResult = SignInResultFailure | SignInResultSuccess

export interface SignInResultSuccess {
    readonly profileId: number
    readonly accessToken: string
    readonly refreshToken: string
}

export interface SignInResultFailure {
    readonly code?: number
    readonly reason: string
}