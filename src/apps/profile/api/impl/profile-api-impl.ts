import {ProfileApi} from "../profile-api";
import {inject, injectable} from "inversify";
import {Response} from "../../../../common/api/types";
import {GetProfileByIdResponse, ProfilePost} from "../profile-api.types";
import {TYPES} from "../../di/types";
import {AxiosInstance} from "axios";
import {parseResponse} from "../../../../common/helpers/api-helper";
import {TokenRepository} from "../../../auth/repository/token.repository";
import {TOKEN_HEADER_NAME} from "../../../../common/constants/headers";

@injectable()
export class ProfileApiImpl implements ProfileApi {

    @inject(TYPES.ProfileAxiosInstance)
    private axios: AxiosInstance | undefined

    @inject(TYPES.TokenRepository)
    private tokenRepository: TokenRepository | undefined

    public async getProfileById(id: number): Promise<Response<GetProfileByIdResponse>> {
        const response = await this.axios!.get(`/by-id/${id}`, {
            headers: {
                'X-Authenticate-Token': this.tokenRepository!.getTokens()?.accessToken
            }
        })
        return parseResponse(response.data, (content: any) => {
            return {
                profileId: content['profile_id'],
                nickname: content['nickname'],
                name: content['name_alias'],
                description: content['description'],
                location: content['location'],
                followingCount: content['subscriptions_count'],
                followersCount: content['subscribers_count'],
                posts: content['posts'].map((postContent: any) => {
                    return {
                        id: postContent['post_id'],
                        title: postContent['name'],
                        text: postContent['text'],
                        createdAt: new Date(Date.parse(postContent['updated_date'])),
                        likesCount: 0,
                        dislikesCount: 0,
                        commentsCount: 0,
                        userReaction: 'not-reacted',
                        comments: Array.of(),
                    } as ProfilePost
                }),
                isUserFollowingProfile: false,
                isUserProfile: content['is_user_profile'],
            }
        })
    }
}