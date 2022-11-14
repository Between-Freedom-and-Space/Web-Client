import { AxiosInstance } from "axios";
import { Container } from "inversify";
import { AuthenticateApi } from "../api/auth-api"
import authAxios from "../api/axios/config";
import { AuthenticateApiImpl } from "../api/impl/auth-api-impl";
import { SignInUseCase } from "../domain/usecases/sign-in.usecase";
import { SignUpUseCase } from "../domain/usecases/sign-up.usecase";
import { AuthenticateInputsValidator } from "../domain/validators/authenticate-inputs.validator";
import TYPES from "./types";
import {TokenRepository} from "../repository/token.repository";
import {LocalStorageTokenRepository} from "../repository/impl/local-storage.token.repository";
import {PasswordEncryptor} from "../../../common/helpers/security/password-encryptor";
import {KeccakPasswordEncryptor} from "../../../common/helpers/security/impl/keccak.password-encryptor";
import {RequestInterceptor, ResponseInterceptor} from "../../../common/api/interceptor";
import {AuthTokenInterceptor} from "../api/axios/interceptors";
import {ResponseAdapterInterceptor} from "../../../common/api/impl/response-adapter.interceptor";

const authDependenciesContainer = new Container({
    defaultScope: 'Singleton'
})

authDependenciesContainer
    .bind<AxiosInstance>(TYPES.AuthAxiosInstance)
    .toConstantValue(authAxios)

authDependenciesContainer
    .bind<AuthenticateApi>(TYPES.AuthenticateApi)
    .to(AuthenticateApiImpl)

authDependenciesContainer
    .bind<TokenRepository>(TYPES.TokenRepository)
    .to(LocalStorageTokenRepository)

authDependenciesContainer
    .bind<PasswordEncryptor>(TYPES.PasswordEncryptor)
    .to(KeccakPasswordEncryptor)

authDependenciesContainer
    .bind<RequestInterceptor>(TYPES.AuthTokenInterceptor)
    .to(AuthTokenInterceptor)
authDependenciesContainer
    .bind<ResponseInterceptor>(TYPES.ResponseAdapterInterceptor)
    .to(ResponseAdapterInterceptor)

authDependenciesContainer
    .bind<AuthenticateInputsValidator>(AuthenticateInputsValidator)
    .toSelf()

authDependenciesContainer
    .bind<SignInUseCase>(SignInUseCase)
    .toSelf()
authDependenciesContainer
    .bind<SignUpUseCase>(SignUpUseCase)
    .toSelf()

export default authDependenciesContainer