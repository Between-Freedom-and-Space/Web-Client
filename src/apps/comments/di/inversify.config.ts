import {Container} from "inversify";
import {AxiosInstance} from "axios";
import TYPES from "./types";
import commentAxios from "../api/axios/config";
import {CommentsApi} from "../api/comments-api";
import {CommentsApiImpl} from "../api/impl/comments-api-impl";

const commentDependenciesContainer = new Container({
    defaultScope: 'Singleton'
})

commentDependenciesContainer
    .bind<AxiosInstance>(TYPES.CommentAxiosInstance)
    .toConstantValue(commentAxios)

commentDependenciesContainer
    .bind<CommentsApi>(TYPES.CommentsApi)
    .to(CommentsApiImpl)

export default commentDependenciesContainer