import {
    AuthenticateUserRequest, AuthenticateUserResponse, 
    DeleteUserRequest, RefreshAccessTokenRequest,
    RefreshAccessTokenResponse, RegisterUserRequest, 
    RegisterUserResponse, VerifyTokenRequest, 
    VerifyTokenResponse 
} from "./auth-api.types";
import {Response} from "../../../common/api/types";

export interface AuthenticateApi {

    registerUser(data: RegisterUserRequest): Response<RegisterUserResponse>
    
    authenticateUser(data: AuthenticateUserRequest): Response<AuthenticateUserResponse>
    
    deleteUser(data: DeleteUserRequest): Response<void>

    verifyAccessToken(data: VerifyTokenRequest): Response<VerifyTokenResponse>

    verifyRefreshToken(data: VerifyTokenRequest): Response<VerifyTokenResponse>

    refreshAccessToken(data: RefreshAccessTokenRequest): Response<RefreshAccessTokenResponse>
}
