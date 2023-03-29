import {injectable} from "inversify";
import {
    GetProfileFollowersFailure,
    GetProfileFollowersResult, GetProfileFollowingFailure,
    GetProfileFollowingResult
} from "./profile-followers-usecase.types";

@injectable()
export class ProfileFollowersUseCase {

    public async getProfileFollowers(profileId: number): Promise<GetProfileFollowersResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as GetProfileFollowersFailure
    }

    public async getProfileFollowing(profileId: number): Promise<GetProfileFollowingResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as GetProfileFollowingFailure
    }
}