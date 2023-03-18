import {injectable} from "inversify";
import {
    FollowProfileFailure,
    FollowProfileResult, GetPopularPostsFailure,
    GetPopularPostsResult, GetPopularProfilesFailure,
    GetPopularProfilesResult, GetSubscriptionPostsFailure,
    GetSubscriptionPostsResult,
    Reaction, ReactPostFailure,
    ReactPostResult
} from "./feed-usecase.types";

@injectable()
export class FeedUseCase {

    public async getPopularPosts(): Promise<GetPopularPostsResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as GetPopularPostsFailure
    }

    public async getPopularProfiles(): Promise<GetPopularProfilesResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as GetPopularProfilesFailure
    }

    public async getSubscriptionPosts(): Promise<GetSubscriptionPostsResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as GetSubscriptionPostsFailure
    }

    public async reactPost(postId: number, reaction: Reaction): Promise<ReactPostResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as ReactPostFailure
    }

    public async followProfile(profileId: number): Promise<FollowProfileResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as FollowProfileFailure
    }
}