import {Container} from "inversify";
import {PostsApi} from "../api/posts-api";
import {TYPES} from "./types";
import {PostsApiImpl} from "../api/impl/posts-api-impl";
import {PostsUseCase} from "../domain/usecases/posts.usecase";

const postsContainer = new Container({
    defaultScope: "Singleton"
})

postsContainer
    .bind<PostsApi>(TYPES.PostsApi)
    .to(PostsApiImpl)

postsContainer
    .bind<PostsUseCase>(PostsUseCase)
    .toSelf()


export default postsContainer