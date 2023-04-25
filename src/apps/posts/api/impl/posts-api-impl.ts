import {PostsApi} from "../posts-api";
import {Response} from "../../../../common/api/types";
import {
    CreatePostRequest,
    CreatePostResponse,
    GetPostFullInformationResponse,
    PostFullInformationComment
} from "../posts-api.types";
import {inject, injectable} from "inversify";
import {TYPES} from "../../di/types";
import {TokenRepository} from "../../../auth/repository/token.repository";
import {parseResponse} from "../../../../common/helpers/api-helper";
import {AxiosInstance} from "axios";

@injectable()
export class PostsApiImpl implements PostsApi {

    @inject(TYPES.PostsAxiosInstance)
    private axios: AxiosInstance | undefined

    @inject(TYPES.TokenRepository)
    private tokenRepository: TokenRepository | undefined

    public async createPost(request: CreatePostRequest): Promise<Response<CreatePostResponse>> {
        const response = await this.axios!.patch('/post/create', {
            post_name: request.postTitle,
            post_text: request.postTitle,
            is_visible: request.isVisible,
            tags_aliases: [],
        }, {
            headers: {
                'X-Authenticate-Token': this.tokenRepository!.getTokens()?.accessToken
            }
        })

        return parseResponse(response, (content: any) => {
            return {
                postId: content['post_id'],
                title: content['name'],
                text: content['text'],
                updatedDate: new Date(Date.parse(content['updated_date']))
            }
        })
    }

    public async getFullPostInformation(postId: number): Promise<Response<GetPostFullInformationResponse>> {
        const response = await this.axios!.get(`/post/${postId}`, {
            headers: {
                'X-Authenticate-Token': this.tokenRepository!.getTokens()?.accessToken
            }
        })

        return parseResponse(response, (content: any) => {
            return {
                postId: content['post_id'],
                title: content['name'],
                text: content['text'],
                likesCount: content['likes_count'],
                dislikesCount: content['dislikes_count'],
                commentsCount: content['comments_count'],
                comments: content['comments'].map((commentContent: any) => {
                    return {
                        commentId: commentContent['comment_id'],
                        authorId: commentContent['author_id'],
                        text: commentContent['text'],
                        updatedDate: new Date(Date.parse(commentContent['updated_date']))
                    } as PostFullInformationComment
                })
            }
        })
    }
}