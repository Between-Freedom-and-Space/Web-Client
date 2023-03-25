export interface ProfileState {
    profileIconUrl?: string
    profileName: string
    profileNickname: string
    profileDescription: string
    profileLocation: string
    followersCount: number
    followingCount: number

    userIsFollowingProfile: boolean

    isProfileDataLoading: boolean
    isFollowLoading: boolean
    isSaveLoading: boolean
}