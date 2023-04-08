export interface SearchState {
    readonly searchText: string
    readonly showingState: ShowingState
    readonly isLoading: boolean
    readonly errorMessage?: string
    readonly foundTotalCount: number
    readonly foundPostsCount: number
    readonly foundProfilesCount: number
    readonly foundPosts: Array<PostBaseInformation>
    readonly foundProfiles: Array<ProfileBaseInformation>
}

export interface PostBaseInformation {
    readonly id: number
    readonly title: string
    readonly text: string
    readonly authorNickname: string
    readonly authorName: string
    readonly likesCount: number
    readonly dislikesCount: number
    readonly commentsCount: number
}

export interface ProfileBaseInformation {
    readonly id: number
    readonly profileIconUrl?: string
    readonly nickname: string
    readonly name: string
    readonly postsCount: number
    readonly followersCount: number
    readonly isUserFollowing: boolean
    readonly isFollowLoading: boolean
}

export enum ShowingState {
    SHOWING_POSTS,
    SHOWING_PROFILES
}