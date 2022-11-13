export interface RegisterUserRequest {
    readonly mail: string
    readonly phoneNumber?: string
    readonly nickname: string
    readonly passwordEncrypted: string
    readonly nameAlias: string
    readonly description: string
    readonly location: string
}

export interface RegisterUserResponse {
    readonly id: number
    readonly nickname: string
    readonly nameAlias: string
    readonly description?: string
    readonly location?: string
    readonly iconId?: number
    readonly createdDate: Date
    readonly updatedDate: Date
}

export interface AuthenticateUserRequest {
    readonly nickname: string
    readonly passwordEncoded: string
}

export interface AuthenticateUserResponse {
    readonly accessToken: string
    readonly refreshToken: string
}

export interface DeleteUserRequest {
    readonly accessToken: string
}

export interface VerifyTokenRequest {
    readonly token: string
}

export interface VerifyTokenResponse {
    readonly tokenType: string
    readonly verifyResult: string
}

export interface RefreshAccessTokenRequest {
    readonly refreshToken: string
}

export interface RefreshAccessTokenResponse {
    readonly newAccessToken: string
}