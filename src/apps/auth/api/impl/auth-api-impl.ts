import {inject, injectable} from "inversify";
import { AuthenticateApi } from "../auth-api";
import {
    RegisterUserRequest, RegisterUserResponse,
    AuthenticateUserRequest, AuthenticateUserResponse,
    DeleteUserRequest, VerifyTokenRequest,
    VerifyTokenResponse, RefreshAccessTokenRequest,
    RefreshAccessTokenResponse
} from "../auth-api.types";
import {AxiosInstance} from "axios";
import TYPES from "../../di/types";
import {Response} from "../../../../common/api/types";

@injectable()
export class AuthenticateApiImpl implements AuthenticateApi {

    @inject(TYPES.AuthAxiosInstance)
    private axios: AxiosInstance | undefined

    public registerUser(data: RegisterUserRequest): Promise<Response<RegisterUserResponse>>{
        throw new Error("Method not implemented.");
    }
    
    public authenticateUser(data: AuthenticateUserRequest): Promise<Response<AuthenticateUserResponse>> {
        throw new Error("Method not implemented.");
    }
    
    public deleteUser(data: DeleteUserRequest): Promise<Response<void>> {
        throw new Error("Method not implemented.");
    }
    
    public verifyAccessToken(data: VerifyTokenRequest): Promise<Response<VerifyTokenResponse>> {
        throw new Error("Method not implemented.");
    }
    
    public verifyRefreshToken(data: VerifyTokenRequest): Promise<Response<VerifyTokenResponse>> {
        throw new Error("Method not implemented.");
    }
    
    public refreshAccessToken(data: RefreshAccessTokenRequest): Promise<Response<RefreshAccessTokenResponse>> {
        throw new Error("Method not implemented.");
    }
    
}