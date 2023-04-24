import {inject, injectable} from "inversify";
import { AuthenticateApi } from "../auth-api";
import {
    RegisterUserRequest, RegisterUserResponse,
    AuthenticateUserRequest, AuthenticateUserResponse,
    DeleteUserRequest, RefreshAccessTokenRequest,
    RefreshAccessTokenResponse
} from "../auth-api.types";
import {AxiosInstance} from "axios";
import TYPES from "../../di/types";
import {Response} from "../../../../common/api/types";
import {parseResponse} from "../../../../common/helpers/api-helper";

@injectable()
export class AuthenticateApiImpl implements AuthenticateApi {

    @inject(TYPES.AuthAxiosInstance)
    private axios: AxiosInstance | undefined

    public async registerUser(data: RegisterUserRequest): Promise<Response<RegisterUserResponse>>{
        const response = await this.axios!.patch('/registration/register/user', {
            email: data.mail,
            nickname: data.nickname,
            password_encrypted: data.passwordEncrypted,
            name_alias: data.nameAlias,
            profile_description: data.description,
            location: data.location,
        })

        return parseResponse(response.data, (content: any) => {
            return {
                profileId: content['profile_id'] as number,
                accessToken: content['access_token'] as string,
                refreshToken: content['refresh_token'] as string
            }
        })
    }
    
    public async authenticateUser(data: AuthenticateUserRequest): Promise<Response<AuthenticateUserResponse>> {
        const response = await this.axios!.post('/authentication/authenticate', {
            nickname: data.nickname,
            password_encoded: data.passwordEncoded
        })

        return parseResponse(response.data, (content: any) => {
            return {
                profileId: content['profile_id'] as number,
                accessToken: content['access_token'] as string,
                refreshToken: content['refresh_token'] as string
            }
        })
    }
    
    public async deleteUser(data: DeleteUserRequest): Promise<Response<void>> {
        const response = await this.axios!.delete('/authentication/user/delete')

        return parseResponse(response.data)
    }
    
    public async refreshAccessToken(data: RefreshAccessTokenRequest): Promise<Response<RefreshAccessTokenResponse>> {
        const response = await this.axios!.post('/authentication/refresh/access/token')

        return parseResponse(response.data)
    }
}