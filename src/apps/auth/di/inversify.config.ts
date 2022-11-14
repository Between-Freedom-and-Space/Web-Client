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

const authDependenciesContainer = new Container({
    defaultScope: 'Singleton'
})

authDependenciesContainer
    .bind<AuthenticateApi>(TYPES.AuthenticateApi)
    .to(AuthenticateApiImpl)
authDependenciesContainer
    .bind<TokenRepository>(TYPES.TokenRepository)
    .to(LocalStorageTokenRepository)
authDependenciesContainer
    .bind<AxiosInstance>(TYPES.AuthAxiosInstance)
    .toConstantValue(authAxios)
authDependenciesContainer
    .bind<SignUpUseCase>(SignUpUseCase)
    .toSelf()
authDependenciesContainer
    .bind<SignInUseCase>(SignInUseCase)
    .toSelf()
authDependenciesContainer
    .bind<AuthenticateInputsValidator>(AuthenticateInputsValidator)
    .toSelf()

export default authDependenciesContainer