import {
    AuthenticateUserRequest, AuthenticateUserResponse, 
    DeleteUserRequest, RefreshAccessTokenRequest,
    RefreshAccessTokenResponse, RegisterUserRequest, 
    RegisterUserResponse
} from "./auth-api.types";
import {Response} from "../../../common/api/types";

export interface AuthenticateApi {

    registerUser(data: RegisterUserRequest): Promise<Response<RegisterUserResponse>>
    
    authenticateUser(data: AuthenticateUserRequest): Promise<Response<AuthenticateUserResponse>>
    
    deleteUser(data: DeleteUserRequest): Promise<Response<void>>

    refreshAccessToken(data: RefreshAccessTokenRequest): Promise<Response<RefreshAccessTokenResponse>>
}
