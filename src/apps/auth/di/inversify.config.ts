import { AxiosInstance } from "axios";
import { Container } from "inversify";
import { AuthenticateApi } from "../api/auth-api"
import authAxios from "../api/axios/config";
import "reflect-metadata";
import { AuthenticateApiImpl } from "../api/impl/auth-api-impl";
import { SignInUseCase } from "../domain/usecases/sign-in/sign-in.usecase";
import { SignUpUseCase } from "../domain/usecases/sign-up/sign-up.usecase";
import { InputsValidator } from "../../../common/services/validators/inputs.validator";
import TYPES from "./types";
import {TokenRepository} from "../repository/token.repository";
import {LocalStorageTokenRepository} from "../repository/impl/local-storage.token.repository";
import {PasswordEncryptor} from "../../../common/helpers/security/password-encryptor";
import {KeccakPasswordEncryptor} from "../../../common/helpers/security/impl/keccak.password-encryptor";
import {RequestInterceptor, ResponseInterceptor} from "../../../common/api/interceptor";
import {AuthTokenInterceptor} from "../api/axios/interceptors";
import {SecurityVariableRepository} from "../repository/security-variable.repository";
import {LocalStorageSecurityVariableRepository} from "../repository/impl/local-storage.security-variable.repository";
import {SecurityVariableGenerator} from "../domain/services/security-variable.generator";
import {UuidSecurityVariableGenerator} from "../domain/services/impl/uuid.security-variable.generator";
import {MailingApi} from "../api/mailing-api";
import {MailingApiImpl} from "../api/impl/mailing-api-impl";
import {LoggingRequestInterceptor, LoggingResponseInterceptor} from "../../../common/api/logging-interceptor";
import {RecoverPasswordApi} from "../api/recover-password-api";
import {RecoverPasswordApiImpl} from "../api/impl/recover-password-api-impl";
import {RecoverPasswordUseCase} from "../domain/usecases/recover-password/recover-password.usecase";

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
    .bind<MailingApi>(TYPES.MailingApi)
    .to(MailingApiImpl)
authDependenciesContainer
    .bind<RecoverPasswordApi>(TYPES.RecoverPasswordApi)
    .to(RecoverPasswordApiImpl)

authDependenciesContainer
    .bind<TokenRepository>(TYPES.TokenRepository)
    .to(LocalStorageTokenRepository)
authDependenciesContainer
    .bind<SecurityVariableRepository>(TYPES.SecurityVariableRepository)
    .to(LocalStorageSecurityVariableRepository)

authDependenciesContainer
    .bind<PasswordEncryptor>(TYPES.PasswordEncryptor)
    .to(KeccakPasswordEncryptor)

authDependenciesContainer
    .bind<RequestInterceptor<any>>(TYPES.AuthTokenInterceptor)
    .to(AuthTokenInterceptor)
authDependenciesContainer
    .bind<RequestInterceptor<any>>(TYPES.LoggingRequestInterceptor)
    .to(LoggingRequestInterceptor)
authDependenciesContainer
    .bind<ResponseInterceptor<any>>(TYPES.LoggingResponseInterceptor)
    .to(LoggingResponseInterceptor)

authDependenciesContainer
    .bind<InputsValidator>(InputsValidator)
    .toSelf()

authDependenciesContainer
    .bind<SecurityVariableGenerator>(TYPES.SecurityVariableGenerator)
    .to(UuidSecurityVariableGenerator)

authDependenciesContainer
    .bind<SignInUseCase>(SignInUseCase)
    .toSelf()
authDependenciesContainer
    .bind<SignUpUseCase>(SignUpUseCase)
    .toSelf()
authDependenciesContainer
    .bind<RecoverPasswordUseCase>(RecoverPasswordUseCase)
    .toSelf()

export default authDependenciesContainer