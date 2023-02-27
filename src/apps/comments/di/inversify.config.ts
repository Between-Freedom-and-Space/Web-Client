import {Container} from "inversify";
import {AxiosInstance} from "axios";
import TYPES from "./types";
import commentAxios from "../api/axios/config";
import {CommentsApi} from "../api/comments-api";
import {CommentsApiImpl} from "../api/impl/comments-api-impl";
import {CommentReactionApi} from "../api/comment-reaction-api";
import {CommentReactionApiImpl} from "../api/impl/comment-reaction-api-impl";

const commentDependenciesContainer = new Container({
    defaultScope: 'Singleton'
})

commentDependenciesContainer
    .bind<AxiosInstance>(TYPES.CommentAxiosInstance)
    .toConstantValue(commentAxios)

commentDependenciesContainer
    .bind<CommentsApi>(TYPES.CommentsApi)
    .to(CommentsApiImpl)
commentDependenciesContainer
    .bind<CommentReactionApi>(TYPES.CommentReactionApi)
    .to(CommentReactionApiImpl)

export default commentDependenciesContainer