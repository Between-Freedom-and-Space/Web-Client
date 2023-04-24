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
    readonly profileId: number
    readonly accessToken: string
    readonly refreshToken: string
}

export interface AuthenticateUserRequest {
    readonly nickname: string
    readonly passwordEncoded: string
}

export interface AuthenticateUserResponse {
    readonly profileId: number
    readonly accessToken: string
    readonly refreshToken: string
}

export interface DeleteUserRequest {
    readonly accessToken: string
}

export interface RefreshAccessTokenRequest {
    readonly refreshToken: string
}

export interface RefreshAccessTokenResponse {
    readonly newAccessToken: string
}