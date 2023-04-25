import {Container} from "inversify";
import {PostsApi} from "../api/posts-api";
import {TYPES} from "./types";
import {PostsApiImpl} from "../api/impl/posts-api-impl";
import {PostsUseCase} from "../domain/usecases/posts.usecase";
import {AxiosInstance} from "axios";
import postsAxios from "../api/axios/config";

const postsContainer = new Container({
    defaultScope: "Singleton"
})

postsContainer
    .bind<AxiosInstance>(TYPES.PostsAxiosInstance)
    .toConstantValue(postsAxios)

postsContainer
    .bind<PostsApi>(TYPES.PostsApi)
    .to(PostsApiImpl)

postsContainer
    .bind<PostsUseCase>(PostsUseCase)
    .toSelf()


export default postsContainer