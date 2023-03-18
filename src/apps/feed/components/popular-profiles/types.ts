export interface FeedPopularProfilesController {

    onProfileIconClicked(profileId: number): void

    onProfileNicknameClicked(profileId: number): void

    onProfileFollowButtonClicked(profileId: number): void

    onProfilePostsCountClicked(profileId: number): void
}