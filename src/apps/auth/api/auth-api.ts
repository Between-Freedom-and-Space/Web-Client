import {
    AuthenticateUserRequest, AuthenticateUserResponse, 
    DeleteUserRequest, RefreshAccessTokenRequest,
    RefreshAccessTokenResponse, RegisterUserRequest, 
    RegisterUserResponse, VerifyTokenRequest, 
    VerifyTokenResponse 
} from "./auth-api.types";

export interface AuthenticateApi {

    registerUser(data: RegisterUserRequest): RegisterUserResponse
    
    authenticateUser(data: AuthenticateUserRequest): AuthenticateUserResponse
    
    deleteUser(data: DeleteUserRequest): void

    verifyAccessToken(data: VerifyTokenRequest): VerifyTokenResponse

    verifyRefreshToken(data: VerifyTokenRequest): VerifyTokenResponse

    refreshAccessToken(data: RefreshAccessTokenRequest): RefreshAccessTokenResponse
}
