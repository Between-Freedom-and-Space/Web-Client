export function getProfileRouting(profileId: number): string {
    return `/profile/${profileId}`
}

export function getAuthenticateRouting(): string {
    return "/authenticate"
}

export function getProfileFollowingRouting(profileId: number): string {
    return `/profile/${profileId}/following`
}

export function getPostRouting(postId: number): string {
    return `/post/${postId}`
}

export function getCreateNewPostRouting(): string {
    return `/post/create-new`
}

export function getSettingsRouting(): string {
    return `/profile/settings`
}

export function getSearchRouting(searchText: string): string {
    return `/search/${searchText}`
}