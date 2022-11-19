import {
    AuthenticateUserRequest, AuthenticateUserResponse, 
    DeleteUserRequest, RefreshAccessTokenRequest,
    RefreshAccessTokenResponse, RegisterUserRequest, 
    RegisterUserResponse, VerifyTokenRequest, 
    VerifyTokenResponse 
} from "./auth-api.types";
import {Response} from "../../../common/api/types";

export interface AuthenticateApi {

    registerUser(data: RegisterUserRequest): Promise<Response<RegisterUserResponse>>
    
    authenticateUser(data: AuthenticateUserRequest): Promise<Response<AuthenticateUserResponse>>
    
    deleteUser(data: DeleteUserRequest): Promise<Response<void>>

    verifyAccessToken(data: VerifyTokenRequest): Promise<Response<VerifyTokenResponse>>

    verifyRefreshToken(data: VerifyTokenRequest): Promise<Response<VerifyTokenResponse>>

    refreshAccessToken(data: RefreshAccessTokenRequest): Promise<Response<RefreshAccessTokenResponse>>
}
