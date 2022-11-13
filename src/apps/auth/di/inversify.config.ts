import { AxiosInstance } from "axios";
import { Container } from "inversify";
import { AuthenticateApi } from "../api/auth-api"
import authAxios from "../api/axios/config";
import { AuthenticateApiImpl } from "../api/impl/auth-api-impl";
import { SignInUsecase } from "../domain/usecases/sign-in.usecase";
import { SignUpUsecase } from "../domain/usecases/sign-up.usecase";
import { AuthenticateInputsValidator } from "../domain/validators/authenticate-inputs.validator";
import TYPES from "./types";

const authDependenciesContainer = new Container({
    defaultScope: 'Singleton'
})

authDependenciesContainer
    .bind<AuthenticateApi>(TYPES.AuthenticateApi)
    .to(AuthenticateApiImpl)
authDependenciesContainer
    .bind<AxiosInstance>(TYPES.AuthAxiosInstance)
    .toConstantValue(authAxios)
authDependenciesContainer
    .bind<SignUpUsecase>(SignUpUsecase)
    .toSelf()
authDependenciesContainer
    .bind<SignInUsecase>(SignInUsecase)
    .toSelf()
authDependenciesContainer
    .bind<AuthenticateInputsValidator>(AuthenticateInputsValidator)
    .toSelf()

export default authDependenciesContainer