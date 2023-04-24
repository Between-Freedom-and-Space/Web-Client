import {Container} from "inversify";
import {ProfileUseCase} from "../domain/usecases/profile.usecase";
import {ProfileApi} from "../api/profile-api";
import {TYPES} from "./types";
import {ProfileApiImpl} from "../api/impl/profile-api-impl";
import {ProfileSortUseCase} from "../domain/usecases/profile-sort.usecase";
import {ProfileFollowersUseCase} from "../domain/usecases/profile-followers.usecase";
import {AxiosInstance} from "axios";
import profileAxios from "../api/axios/config";

const profileContainer = new Container({
    defaultScope: "Singleton"
})

profileContainer
    .bind<AxiosInstance>(TYPES.ProfileAxiosInstance)
    .toConstantValue(profileAxios)

profileContainer
    .bind<ProfileApi>(TYPES.ProfileApi)
    .to(ProfileApiImpl)

profileContainer
    .bind<ProfileUseCase>(ProfileUseCase)
    .toSelf()
profileContainer
    .bind<ProfileSortUseCase>(ProfileSortUseCase)
    .toSelf()
profileContainer
    .bind<ProfileFollowersUseCase>(ProfileFollowersUseCase)
    .toSelf()

export default profileContainer