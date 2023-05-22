import {inject, injectable} from "inversify";
import {PostReactionState} from "../../../posts/components/common/types";
import {
    FollowProfileFailure,
    FollowProfileResult, GetProfileDataFailure,
    GetProfileDataResult, GetProfileDataSuccess,
    ReactPostFailure,
    ReactPostResult
} from "./profile-usecase.types";
import {ProfileApi} from "../../api/endpoints/profile/profile-api";
import {TYPES} from "../../di/types";

@injectable()
export class ProfileUseCase {

    @inject(TYPES.ProfileApi)
    private profileApi: ProfileApi | undefined

    public async getProfileData(id: number): Promise<GetProfileDataResult> {
        const {content, error } = await this.profileApi!.getProfileById(id)
        if (!content) {
            return {
                type: 'failure',
                message: error?.message || 'Something went wrong'
            } as GetProfileDataFailure
        }

        console.log(content.isUserProfile)
        return {
            type: 'success',
            data: content
        } as GetProfileDataSuccess
    }

    public async followProfile(profileId: number): Promise<FollowProfileResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as FollowProfileFailure
    }

    public async reactPost(postId: number, reaction: PostReactionState): Promise<ReactPostResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as ReactPostFailure
    }
}