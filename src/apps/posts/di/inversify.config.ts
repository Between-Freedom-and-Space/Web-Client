import {Container} from "inversify";
import {PostsApi} from "../api/endpoints/posts/posts-api";
import {TYPES} from "./types";
import {PostsApiImpl} from "../api/impl/posts-api-impl";
import {PostsUseCase} from "../domain/usecases/posts.usecase";
import {AxiosInstance} from "axios";
import postsAxios from "../api/axios/config";
import {TokenRepository} from "../../auth/repository/token.repository";
import {LocalStorageTokenRepository} from "../../auth/repository/impl/local-storage.token.repository";

const postsContainer = new Container({
    defaultScope: "Singleton"
})

postsContainer
    .bind<AxiosInstance>(TYPES.PostsAxiosInstance)
    .toConstantValue(postsAxios)
postsContainer
    .bind<TokenRepository>(TYPES.TokenRepository)
    .to(LocalStorageTokenRepository)

postsContainer
    .bind<PostsApi>(TYPES.PostsApi)
    .to(PostsApiImpl)

postsContainer
    .bind<PostsUseCase>(PostsUseCase)
    .toSelf()


export default postsContainer