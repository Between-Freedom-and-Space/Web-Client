import {Container} from "inversify";
import {SettingsApi} from "../api/settings-api";
import {SettingsApiImpl} from "../api/impl/settings-api-impl";
import TYPES from "./types";
import {SettingsUseCase} from "../domain/usecases/settings.usecase";

const settingsDependenciesContainer = new Container({
    defaultScope: 'Singleton'
})

settingsDependenciesContainer
    .bind<SettingsApi>(TYPES.SettingsApi)
    .to(SettingsApiImpl)

settingsDependenciesContainer
    .bind<SettingsUseCase>(SettingsUseCase)
    .toSelf()


export default settingsDependenciesContainer
