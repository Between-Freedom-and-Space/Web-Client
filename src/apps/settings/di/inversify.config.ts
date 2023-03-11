import {Container} from "inversify";
import {SettingsApi} from "../api/settings-api";
import {SettingsApiImpl} from "../api/impl/settings-api-impl";
import TYPES from "./types";
import {SettingsUseCase} from "../domain/usecases/settings.usecase";
import {InputsValidator} from "../../../common/services/validators/inputs.validator";
import {LocalStorageTokenRepository} from "../../auth/repository/impl/local-storage.token.repository";
import {TokenRepository} from "../../auth/repository/token.repository";
import {RequestInterceptor} from "../../../common/api/interceptor";
import {AuthTokenInterceptor} from "../../auth/api/axios/interceptors";
import {configureAxios} from "./settings/axios.settings";
import {AxiosInstance} from "axios";
import settingsAxios from "../api/axios/config";

const settingsDependenciesContainer = new Container({
    defaultScope: 'Singleton'
})

settingsDependenciesContainer
    .bind<AxiosInstance>(TYPES.SettingsAxios)
    .toConstantValue(settingsAxios)

settingsDependenciesContainer
    .bind<SettingsApi>(TYPES.SettingsApi)
    .to(SettingsApiImpl)

settingsDependenciesContainer
    .bind<InputsValidator>(InputsValidator)
    .toSelf()
settingsDependenciesContainer
    .bind<TokenRepository>(TYPES.TokenRepository)
    .to(LocalStorageTokenRepository)

settingsDependenciesContainer
    .bind<RequestInterceptor<any>>(TYPES.TokenRequestInterceptor)
    .to(AuthTokenInterceptor)

settingsDependenciesContainer
    .bind<SettingsUseCase>(SettingsUseCase)
    .toSelf()

configureAxios(settingsDependenciesContainer)

export default settingsDependenciesContainer
