import {SortField, SortType} from "../components/profile-posts/posts-controls/types";

export interface ProfileState {
    readonly profileId: number
    readonly profileIconUrl?: string
    readonly profileName: string
    readonly profileNickname: string
    readonly profileDescription: string
    readonly profileLocation: string
    readonly followersCount: number
    readonly followingCount: number

    readonly isUserProfile: boolean
    readonly userIsFollowingProfile: boolean

    readonly isProfileDataLoading: boolean
    readonly isFollowLoading: boolean
    readonly isSaveLoading: boolean

    readonly errorMessage?: string

    readonly posts: Array<ProfilePost>
    readonly selectedSortField: SortField
    readonly selectedSortType: SortType
}

export interface ProfilePost {
    readonly postId: number
    readonly profileIconUrl?: string
    readonly nickname: string
    readonly postTitle: string
    readonly postText: string
    readonly likesCount: number
    readonly dislikesCount: number
    readonly commentsCount: number
    readonly reactionState: ProfilePostReactionState,
    readonly createdAt: Date
    readonly comments: Array<ProfilePostComment>
}

export interface ProfilePostComment {
    readonly id: number
    readonly profileIconUrl?: string
    readonly nickname: string
    readonly commentText: string
    readonly createdAt: Date
}

export interface SortPostsData {
    readonly field: SortField
    readonly type: SortType
}

export enum ProfilePostReactionState {
    NOT_REACTED,
    LIKED,
    DISLIKED
}

export interface ReactPostData {
    postId: number
    reactionState: ProfilePostReactionState
}

export interface FollowProfileData {
    profileId: number
}