import {injectable} from "inversify";
import {PostReactionState} from "../../../posts/components/common/types";
import {
    FollowProfileFailure,
    FollowProfileResult, GetProfileDataFailure,
    GetProfileDataResult,
    ReactPostFailure,
    ReactPostResult
} from "./profile-usecase.types";

@injectable()
export class ProfileUseCase {

    public async getProfileData(): Promise<GetProfileDataResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as GetProfileDataFailure
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